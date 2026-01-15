# Real Time Tracker

A real-time geolocation tracking application built with Node.js, Express, and Socket.io. This application allows users to share their live location on a map in real-time.

## 🚀 Tech Stack

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
- **[Express](https://expressjs.com/)**: Web framework for handling server routes and views.
- **[Socket.io](https://socket.io/)**: For enabling real-time, bidirectional communication between web clients and servers.
- **[EJS](https://ejs.co/)**: Embedded JavaScript templating for rendering views.
- **[Leaflet.js](https://leafletjs.com/)**: (Assumed based on map functionality) For interactive maps.

## ✨ Features

- **Real-Time Location Sharing**: Users connected to the server broadcast their location to all other connected clients.
- **Live Updates**: Map markers update instantly as users move.
- **User Disconnection Handling**: Markers are automatically removed when a user disconnects.

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd "Real Time Tracker"
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the server**:
    ```bash
    node app.js
    ```
    or use nodemon if installed:
    ```bash
    npx nodemon app.js
    ```

4.  **Open in Browser**:
    Visit `http://localhost:3000`. Grant location permissions to see your marker on the map.

## 📂 Project Structure

- **`app.js`**: The main server file handling Socket.io connections and Express routes.
- **`views/`**: Contains the EJS templates for the frontend.
- **`public/`**: Static assets (CSS, client-side JS).
