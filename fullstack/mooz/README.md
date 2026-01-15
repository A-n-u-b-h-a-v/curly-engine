# Mooz - Video Conferencing App

A modern video conferencing application built with Next.js, mimicking the functionality of Zoom. It leverages Stream for high-quality video calls and Clerk for secure authentication.

## 🚀 Tech Stack

- **[Next.js 14+](https://nextjs.org/)**: React framework with App Router.
- **[Clerk](https://clerk.com/)**: Complete user management and authentication.
- **[Stream Video SDK](https://getstream.io/video/)**: For reliable, low-latency video calling and conferencing.
- **[Tailwind CSS](https://tailwindcss.com/)**: For responsive and modern styling.
- **[shadcn/ui](https://ui.shadcn.com/)**: (Inferred from dependencies like `@radix-ui` and structure) Reusable UI components.

## ✨ Features

- **Secure Authentication**: Sign up/Sign in with Clerk.
- **Instant Meetings**: Create a meeting room and join instantly.
- **Schedule Meetings**: Plan future meetings with date and time pickers.
- **Meeting Controls**: Mute audio/video, screen sharing, and participant management.
- **Personal Meeting Room**: A dedicated room ID for each user.
- **Recording**: Record meetings for later viewing.

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd mooz
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Environment Variables**:
    Create a `.env.local` file and add API keys for Clerk and Stream:
    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
    CLERK_SECRET_KEY=...
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

    NEXT_PUBLIC_STREAM_API_KEY=...
    STREAM_SECRET_KEY=...
    ```

4.  **Run the application**:
    ```bash
    npm run dev
    ```

5.  **Open in Browser**:
    Visit `http://localhost:3000`.

## 📂 Project Structure

- **`app/`**: Next.js App Router pages and layouts.
- **`components/`**: Reusable UI components.
- **`providers/`**: Context providers (StreamClientProvider, etc.).
- **`actions/`**: Server actions for stream token generation.
