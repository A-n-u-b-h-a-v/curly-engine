import mongoose from 'mongoose';
import request from 'supertest';
import { MongoMemoryServer } from 'mongodb-memory-server';
import app from '../app.js';
import Product from '../models/Product.js';
import CartItem from '../models/CartItem.js';

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri, { dbName: 'test' });
});

afterAll(async () => {
    try {
      await mongoose.disconnect();
    } catch (e) {
    }  try {
    await mongoServer.stop();
  } catch (e) {
    ;
  }
});

beforeEach(async () => {
  await Product.deleteMany({});
  await CartItem.deleteMany({});
});

test('GET /api/products returns products', async () => {
  const p = await Product.create({ name: 'Test', price: 1000, image: '', description: '' });
  const res = await request(app).get('/api/products');
  expect(res.status).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
  expect(res.body.length).toBeGreaterThanOrEqual(1);
});

test('Cart flow: add, list, update qty, delete, checkout', async () => {
  const product = await Product.create({ name: 'Widget', price: 250, image: '' });

  const addRes = await request(app)
    .post('/api/cart')
    .send({ productId: product._id.toString(), qty: 2 });
  expect(addRes.status).toBe(200);

  const listRes = await request(app).get('/api/cart');
  expect(listRes.status).toBe(200);
  expect(listRes.body.items.length).toBe(1);
  const item = listRes.body.items[0];
  expect(item.qty).toBe(2);
  expect(listRes.body.total).toBe(250 * 2);

  const patchRes = await request(app)
    .patch(`/api/cart/${item._id}`)
    .send({ qty: 3 });
  expect(patchRes.status).toBe(200);

  const listRes2 = await request(app).get('/api/cart');
  expect(listRes2.body.items[0].qty).toBe(3);
  expect(listRes2.body.total).toBe(250 * 3);

  const delRes = await request(app).delete(`/api/cart/${item._id}`);
  expect(delRes.status).toBe(200);

  const empty = await request(app).get('/api/cart');
  expect(empty.body.items.length).toBe(0);

  await request(app).post('/api/cart').send({ productId: product._id.toString(), qty: 1 });
  const co = await request(app).post('/api/cart/checkout').send({ name: 'A', email: 'a@b.com' });
  expect(co.status).toBe(200);
  expect(co.body.receipt).toBeDefined();
  expect(co.body.receipt.total).toBe(250);
});
