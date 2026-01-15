import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { cartRouter } from "./routes/cart.js";
import { productRouter } from "./routes/Products.js";
import CartItem from "./models/CartItem.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api/products", productRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => res.send("✅ API is running"));

export default app;

app.post('/api/checkout', async (req, res) => {
	try {
		const { name, email } = req.body;
		const items = await CartItem.find({ user: 'guest' }).populate('productId');
		const total = items.reduce((sum, i) => {
			const price = (i.productId && i.productId.price) || 0;
			return sum + (price * (i.qty || 0));
		}, 0);
		await CartItem.deleteMany({ user: 'guest' });
		res.json({ receipt: { name, email, total, timestamp: new Date().toISOString() } });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
});
