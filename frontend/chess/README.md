# Multiplayer Chess Game

A real-time multiplayer chess application built with Node.js, Express, and Socket.io. Players can join a game, be automatically assigned roles (White/Black), and play against each other with real-time move validation.

## 🚀 Tech Stack

- **[Node.js](https://nodejs.org/)**: Server-side runtime.
- **[Express](https://expressjs.com/)**: Web framework.
- **[Socket.io](https://socket.io/)**: For real-time event-based communication.
- **[Chess.js](https://github.com/jhlywa/chess.js)**: A comprehensive library for chess move generation/validation.
- **[EJS](https://ejs.co/)**: Templating engine for rendering the game interface.

## ✨ Features

- **Real-Time Multiplayer**: Instant move updates across connected clients.
- **Role Assignment**: First two connections are assigned White and Black; subsequent connections become spectators.
- **Move Validation**: Server-side validation using `chess.js` ensures only legal moves are made.
- **Drag and Drop Interface**: (Assumed based on typical chess UI) Intuitive gameplay.

## 🛠️ Installation & Setup

1.  **Navigate to the backend directory**:
    (The code is currently housed in the `backend` folder)
    ```bash
    cd backend
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the server**:
    ```bash
    node app.js
    ```

4.  **Play**:
    Open `http://localhost:3000` in two different browser tabs to simulate two players.

## 📂 Project Structure

- **`app.js`**: Main server file handling game logic, socket connections, and routing.
- **`public/`**: Client-side assets.
- **`views/`**: EJS templates for the game board.
