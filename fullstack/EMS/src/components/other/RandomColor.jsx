const colors = ['red', 'blue', 'green', 'yellow'];

let previousColor = null;

export const getRandomColorFromArray = () => {
    let color = colors[Math.floor(Math.random() * colors.length)];
    while (color === previousColor) {
        color = colors[Math.floor(Math.random() * colors.length)];
    }
    previousColor = color;
    return color;
};