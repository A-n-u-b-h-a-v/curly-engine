# Apple iPhone 15 Pro Website Clone

This project is a visually stunning clone of the Apple iPhone 15 Pro website, built to demonstrate the power of modern web technologies for creating immersive 3D and animated user experiences. It replicates the premium look and feel of Apple's product pages using React and Three.js.

## 🚀 Tech Stack

This project leverages a cutting-edge stack to deliver high-performance animations and 3D graphics:

- **[React](https://react.dev/)**: The core framework for building the user interface.
- **[Three.js](https://threejs.org/)** & **[React Three Fiber](https://docs.pmnd.rs/react-three-fiber)**: For rendering interactive 3D models of the iPhone directly in the browser.
- **[GSAP (GreenSock Animation Platform)](https://gsap.com/)**: Used extensively for complex scroll-triggered animations and timeline sequencing.
- **[Tailwind CSS](https://tailwindcss.com/)**: For rapid, utility-first styling and responsive design.
- **[Vite](https://vitejs.dev/)**: A blazing fast frontend build tool.
- **[Lenis](https://github.com/studio-freight/lenis)**: For smooth, momentum-based scrolling that enhances the premium feel.

## ✨ Features

- **Interactive 3D Models**: View the iPhone 15 Pro in multiple colors and sizes with a fully interactive 3D viewer.
- **Smooth Animations**: Seamless transitions and scroll-based animations powered by GSAP.
- **Video Carousel**: Custom video player components showcasing product highlights.
- **Responsive Design**: Fully responsive layout that looks great on all devices.
- **High-Performance**: Optimized for smooth frame rates and fast loading times using Vite and efficient 3D rendering practices.

## 🛠️ Installation & Setup

Follow these steps to get the project running locally:

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd apple-website-clone
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **Open in Browser**:
    Visit `http://localhost:5173` (or the URL shown in your terminal) to view the application.

## 📂 Project Structure

- **`src/components`**: Contains all the UI components like `Hero`, `Navbar`, `Model`, `Highlights`, etc.
  - **`Model.jsx` & `ModelView.jsx`**: Handle the 3D scene and model rendering.
  - **`VideoCarousel.jsx`**: Manages the video highlights section.
- **`public`**: Static assets.
- **`src/utils`**: Utility functions and animation helpers.
- **`src/constants`**: Static data and configuration.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve the project.

## 📄 License

This project is for educational purposes. All product names, logos, and brands are property of their respective owners.
