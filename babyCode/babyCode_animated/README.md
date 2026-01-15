# Baby Code Animated - Advanced GSAP Experiments

This project is a showcase of advanced web animations and interactive layouts built with React and GSAP. It demonstrates complex scroll-triggered effects, horizontal scrolling sections, and floating UI elements to create an immersive user experience.

## 🚀 Tech Stack

- **[React](https://react.dev/)**: Core UI library.
- **[GSAP](https://gsap.com/)**: Powerhouse for animations.
  - **ScrollTrigger**: For coordinating animations with scroll position.
  - **useGSAP**: For safe and efficient GSAP usage in React.
- **[Lenis](https://github.com/darkroomengineering/lenis)**: For buttery smooth scroll effects.
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first styling.
- **[Vite](https://vitejs.dev/)**: Fast build tool and dev server.

## ✨ Features

- **Horizontal Scroll Sections**: Seamless transition from vertical to horizontal scrolling using ScrollTrigger pinning.
- **Floating Panels**: Dynamic panels that expand and contract based on scroll interactions.
- **Grid Stages**: Complex grid layouts that transform and animate into view.
- **Masking Effects**: sophisticated reveal animations using CSS clip-paths and GSAP.
- **Smooth Scrolling**: Enhanced scrolling experience with Lenis integration.

## 🛠️ Installation & Setup

1.  **Navigate to the project directory**:
    ```bash
    cd babyCode_animated
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    ```

4.  **View locally**: Open `http://localhost:5173`.

## 📂 Project Structure

- **`src/components`**: Contains complex animated components:
  - `HorizontalPanels.jsx`: The side-scrolling section.
  - `FloatingPanel.jsx`: overlay elements.
  - `GridStage.jsx`: The layout grid animations.
  - `ShowcaseSections.jsx`: Additional content blocks.
- **`src/App.jsx`**: Main orchestrator for the scroll timelines and refs.