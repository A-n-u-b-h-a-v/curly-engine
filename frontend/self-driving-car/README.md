# Self-Driving Car Simulation

A self-driving car tracking simulation built with vanilla JavaScript and HTML5 Canvas. It implements a neural network and sensor system to navigate a car through a traffic course without collisions.

## 🚀 Tech Stack

- **Vanilla JavaScript**: Core logic for physics, neural network, and simulation.
- **HTML5 Canvas**: For rendering the car, road, sensors, and network visualization.
- **No Dependencies**: Runs entirely in the browser without build tools or external libraries.

## ✨ Features

- **Neural Network**: A custom implementation of a feed-forward neural network.
- **Sensor System**: Ray-casting sensors to detect borders and traffic.
- **Visualizer**: Real-time visualization of the neural network's activation states.
- **Traffic Simulation**: Dummy cars that move along the road to create obstacles.

## 🛠️ Installation & Setup

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd self-driving-car
    ```

2.  **Run the Simulation**:
    - Simply open `index.html` in any modern web browser.
    - Refresh the page to restart the simulation.

## 📂 Project Structure

- **`index.html`**: Entry point.
- **`script.js`**: Main simulation loop.
- **`car.js`**: Car physics and control logic.
- **`network.js`**: Neural network class implementation.
- **`sensor.js`**: Ray-casting sensor logic.
- **`road.js`**: Road generation and rendering.
- **`visualizer.js`**: Rendering the neural network dashboard.
