import dotenv from 'dotenv';
import { connectDB } from './config.js';
import Product from './models/Product.js';

dotenv.config();

await connectDB();

const mockProducts = [
  {
    name: "FASHIONABLY LONDON - LIMITED EDITION EDP 100ML (3.4 FL.OZ)",
    price: 3550,
    image: "https://static.zara.net/assets/public/c63c/6a53/c2b349288750/0b20d58d9953/20210308999-e1/20210308999-e1.jpg?ts=1760624188570&w=314"
  },
  {
    name: "ENERGETICALLY NEW YORK - LIMITED EDITION EDP 100ML (3.4 FL.OZ)",
    price: 3550,
    image: "https://static.zara.net/assets/public/9af4/a10d/8acf4ce0ad37/81be3ea611fc/20210309999-e1/20210309999-e1.jpg?ts=1760624189415&w=314"
  },
  {
    name: "EBONY WOOD - LIMITED EDITION EDP 100ML (3.4 FL.OZ)",
    price: 3550,
    image: "https://static.zara.net/assets/public/40d9/fd4f/6ec2499291ec/d1717ce93f5c/20210274999-e1/20210274999-e1.jpg?ts=1760624189947&w=314"
  },
  {
    name: "VANILLA COLLECTION 02: UNIQUE/HYPNOTIC/SEDUCTIVE EDP 100 ML / 3.38 fl. oz",
    price: 1950,
    image: "https://static.zara.net/assets/public/b171/483e/6f1f4c2b804b/4b745b2c0d6e/20213002999-e1/20213002999-e1.jpg?ts=1754558636283&w=314"
  },
  {
    name: "(SHAMANILLA) EDP 100ML (3.4 FL. OZ)",
    price: 1950,
    image: "https://static.zara.net/assets/public/2f06/9bd6/028d420e9676/8be366bb60d7/20230008999-e1/20230008999-e1.jpg?ts=1754320223060&w=314"
  },
  {
    name: "OUD VIBRANT LEATHER EDP 100ML (3.4 FL. OZ)",
    price: 2250,
    image: "https://static.zara.net/assets/public/8f36/5ab9/65b64e2ab470/01c729dd56a6/20210722999-e1/20210722999-e1.jpg?ts=1754321430732&w=314"
  },
  {
    name: "SAND DESERT AT SUNSET INTENSE EDP 100 ML / 3.38 oz",
    price: 2750,
    image: "https://static.zara.net/assets/public/1c1b/af6c/dd9e49cfa1c3/b87e2c81449b/20220320999-e1/20220320999-e1.jpg?ts=1755862487152&w=314"
  },
  {
    name: "VIBRANT LEATHER + OUD VIBRANT LEATHER EDP 2 X 60 ML / 2.03 oz",
    price: 2250,
    image: "https://static.zara.net/assets/public/c2aa/9263/0de84ecbb742/06100d1f5b11/20210726999-e1/20210726999-e1.jpg?ts=1754321499410&w=314"
  },
  {
    name: "GREEN SAVAGE + BLUE SPIRIT EDT 2 X 90 ML / 3.17 oz",
    price: 2150,
    image: "https://static.zara.net/assets/public/0609/78c5/c3154238a337/b95ae69c14b0/20210755999-e1/20210755999-e1.jpg?ts=1754561195344&w=314"
  },
  {
    name: "MAN NAVY BLACK + ZARA MAN 800 BLACK EDT 2 x 90 ML / 3.0 oz",
    price: 2150,
    image: "https://static.zara.net/assets/public/0928/6f1d/0380462a9923/2e1d01d38d70/20210838999-e1/20210838999-e1.jpg?ts=1754561198766&w=314"
  }
];

try {
  await Product.deleteMany({});
  await Product.insertMany(mockProducts);
  ;
  process.exit(0);
} catch (err) {
  throw err;
  process.exit(1);
}
