const app = document.getElementById("app");
const colours = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];

const pickRandomColour = () => {
  return colours[Math.floor(Math.random() * colours.length)];
};

const seizure = () => {
  setInterval(() => {
    app.style.backgroundColor = pickRandomColour();
  }, 10);
};

seizure();
