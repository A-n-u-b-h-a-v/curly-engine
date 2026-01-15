# Inventory Management System (Invent)

A comprehensive full-stack inventory management dashboard built with Next.js, Redux, Node.js, and AWS (implied by typical full-stack scope, though tech stack confirms Node/Next).

## 🚀 Tech Stack

### Frontend (Client)
- **[Next.js 15](https://nextjs.org/)**: The React Framework for the Web.
- **[React 19](https://react.dev/)**: Latest React library for UI.
- **[Redux Toolkit](https://redux-toolkit.js.org/)**: State management.
- **[Material UI](https://mui.com/)**: Component library using `@mui/material` and `@mui/x-data-grid`.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling.
- **[Recharts](https://recharts.org/)**: Data visualization.

### Backend (Server)
- **[Node.js](https://nodejs.org/)** & **[Express](https://expressjs.com/)**: RESTful API server.
- **[Prisma](https://www.prisma.io/)**: ORM for database interaction.
- **[PostgreSQL](https://www.postgresql.org/)**: Relational database (Standard with Prisma).
- **[TypeScript](https://www.typescriptlang.org/)**: Type safety throughout the stack.

## ✨ Features

- **Dashboard**: Visual analytics with Recharts.
- **Inventory Tracking**: Data grid view of products and stock.
- **State Management**: Robust Global state handling with Redux Toolkit and Redux Persist.
- **Secure API**: Helmet and Morgan for security and logging.

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd invent
    ```

2.  **Setup Server**:
    ```bash
    cd server
    npm install
    npx prisma generate
    npm run dev
    ```

3.  **Setup Client**:
    ```bash
    cd client
    npm install
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:3000`.

## 📂 Project Structure

- **`client/`**: Next.js frontend application.
- **`server/`**: Express backend with Prisma.
