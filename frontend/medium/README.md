# Medium Clone

A full-stack blogging platform inspired by Medium, built with a serverless backend and a modern React frontend. It features a robust architecture with shared types and reliable data storage.

## 🚀 Tech Stack

### Backend
- **[Hono](https://hono.dev/)**: Ultrafast web framework for Cloudflare Workers (inferred from `wrangler.jsonc` and lightweight structure).
- **[Prisma](https://www.prisma.io/)**: Next-generation ORM for interacting with the database.
- **[PostgreSQL](https://www.postgresql.org/)**: (Assumed based on Prisma usage) Relational database.
- **[Cloudflare Workers](https://workers.cloudflare.com/)**: Serverless deployment platform.
- **[TypeScript](https://www.typescriptlang.org/)**: Static type checking.

### Frontend
- **[React](https://react.dev/)**: Component-based UI library.
- **[Vite](https://vitejs.dev/)**: Fast build tool.
- **[TypeScript](https://www.typescriptlang.org/)**: Ensures type safety across the stack.

### Shared
- **[Zod](https://zod.dev/)**: Schema validation used in both backend and frontend (likely in `common`).

## ✨ Features

- **Blog Creation**: Users can create and publish articles.
- **Authentication**: Secure user signup and login.
- **Serverless Architecture**: Scalable backend running on the edge.
- **Type Safety**: End-to-end type safety using shared Zod schemas.

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd medium
    ```

2.  **Install dependencies in all packages**:
    ```bash
    cd backend && npm install
    cd ../frontend && npm install
    cd ../common && npm install
    ```

3.  **Setup Backend**:
    - Configure `.env` with your database URL.
    - Run Prisma migrations:
      ```bash
      npx prisma migrate dev
      ```
    - Start the backend worker (command varies, usually `npm run dev` or `npx wrangler dev`).

4.  **Setup Frontend**:
    ```bash
    cd frontend
    npm run dev
    ```

5.  **Open in Browser**:
    Visit `http://localhost:5173` (or the URL provided by Vite).

## 📂 Project Structure

- **`backend/`**: Cloudflare Worker API with Prisma.
- **`frontend/`**: React application.
- **`common/`**: Shared Zod schemas and TypeScript types.
