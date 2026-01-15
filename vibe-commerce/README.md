# Vibe Commerce — Full Stack Mock E-Commerce Cart

This repository contains a small full-stack shopping cart app used for a coding assignment.

Structure
- backend/ — Express + Mongoose API and tests
- frontend/ — React (Vite) app

Features
- Backend APIs:
  - GET /api/products — returns product list (seeded with 10 mock items)
  - POST /api/cart — add { productId, qty }
  - DELETE /api/cart/:id — remove cart item
  - GET /api/cart — returns cart items with populated product data and total
  - POST /api/cart/checkout — mock checkout that clears the cart and returns a receipt
  - POST /api/checkout — alias for the above (compatibility)
- Frontend:
  - Products grid with "Add to Cart"
  - Cart view with quantity controls and remove
  - Checkout form (name/email) — produces a client-side receipt
  - Responsive, minimal monochrome styling

Testing
- Backend tests use Jest + supertest + mongodb-memory-server to run API integration tests without touching a real DB.

Setup (backend)
1. Open a terminal and install backend deps:

```powershell
cd backend
npm install
```

2. Seed products:

```powershell
node seedProducts.js
```

3. Run tests:

```powershell
npm test
```

4. Start server in development:

```powershell
npm start
```

The tests run an in-memory MongoDB. On Windows you may see a harmless warning from the test teardown; tests still pass.

Setup (frontend)
1. Install dependencies and start dev server:

```powershell
cd frontend
npm install
npm run dev
```

2. The frontend expects the backend at `http://localhost:5000` by default. You can set `CLIENT_URL` in `.env` for CORS.

Notes
- The app uses MongoDB (Mongoose). For local development, set `MONGO_URI` in `backend/.env` to connect to your MongoDB instance. The tests don't require this.
- The frontend checkout submits client-side and navigates to a Receipt page; the backend also exposes `/api/cart/checkout` and `/api/checkout` for server-side mock receipts.


