const carCanvas = document.getElementById("carCanvas");
carCanvas.width = 200;
const networkCanvas = document.getElementById("networkCanvas");
networkCanvas.width = 300;

const carCtx = carCanvas.getContext("2d");
const networkCtx = networkCanvas.getContext("2d");

const road = new Road(carCanvas.width / 2, carCanvas.width * 0.9);

const N = 1000;
const cars = generateCars(N);
let bestCar = cars[0];
if (localStorage.getItem("bestBrain")) {
  for (let i = 0; i < cars.length; i++) {
    const savedBrain = JSON.parse(localStorage.getItem("bestBrain"));
    // Check if saved brain matches current topology (levels[0].inputs.length)
    // Current input: sensor.rayCount (5) + speed (1) = 6
    // If you changed rayCount or anything else, this needs to match.
    // For now we assume default rayCount=5. If saved brain has different input count, discard.
    if(savedBrain.levels[0].inputs.length != 6){
        console.warn("Brain input mismatch. Discarding old brain.");
        localStorage.removeItem("bestBrain");
        break; 
    }
    
    cars[i].brain = savedBrain;
    if (i != 0) {
      NeuralNetwork.mutate(cars[i].brain, 0.1);
    }
  }
}

const traffic = [
    new Car(road.getLaneCenter(1), -100, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(0), -300, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(2), -300, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(0), -500, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(1), -500, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(1), -700, 30, 50, "DUMMY", 2, getRandomColor()),
    new Car(road.getLaneCenter(2), -700, 30, 50, "DUMMY", 2, getRandomColor()),
];

function updateTraffic() {
    // 1. Remove cars that are far behind
    for (let i = traffic.length - 1; i >= 0; i--) {
        if (traffic[i].y > bestCar.y + 1000) {
            traffic.splice(i, 1);
        }
    }

    // 2. Add new cars ahead if we have fewer than 10
    // Generate new cars far ahead of the best car
    if (traffic.length < 10) {
        const leadPosition = Math.min(...traffic.map(c => c.y), bestCar.y - 500);
        
        // Ensure we don't spawn too close to existing cars
        // Simple check: minimal distance
        const checkLane = getRandomLane();
        const checkY = leadPosition - getRandomY(200); // 200 min distance

        let tooClose = false;
        for (let i = 0; i < traffic.length; i++) {
             if (Math.abs(traffic[i].y - checkY) < 150) { // Keep spacing
                 tooClose = true;
                 break;
             }
        }
        
        if (!tooClose) {
             traffic.push(new Car(
                checkLane,
                checkY,
                30,
                50,
                "DUMMY",
                getRandomSpeed(),
                getRandomColor()
            ));
        }
    }
}

animate();

function save() {
  localStorage.setItem("bestBrain", JSON.stringify(bestCar.brain));
}

function discard() {
  localStorage.removeItem("bestBrain");
}

function generateCars(N) {
  const cars = [];
  for (let i = 1; i <= N; i++) {
    cars.push(new Car(road.getLaneCenter(1), 100, 30, 50, "AI"));
  }
  return cars;
}

function animate(time) {
  updateTraffic(); // Add this call
  
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].update(road.borders, []);
  }
  for (let i = 0; i < cars.length; i++) {
    cars[i].update(road.borders, traffic);
  }
  
  // Robust bestCar finding
  const minY = Math.min(...cars.map((c) => c.y));
  bestCar = cars.find((c) => c.y == minY) || cars[0];

  carCanvas.height = window.innerHeight;
  networkCanvas.height = window.innerHeight;

  carCtx.save();
  carCtx.translate(0, -bestCar.y + carCanvas.height * 0.7);

  road.draw(carCtx);
  for (let i = 0; i < traffic.length; i++) {
    traffic[i].draw(carCtx);
  }
  carCtx.globalAlpha = 0.2;
  for (let i = 0; i < cars.length; i++) {
    cars[i].draw(carCtx);
  }
  carCtx.globalAlpha = 1;
  bestCar.draw(carCtx, true);

  carCtx.restore();

  networkCtx.lineDashOffset = -time / 50;
  Visualizer.drawNetwork(networkCtx, bestCar.brain);
  requestAnimationFrame(animate);
}
