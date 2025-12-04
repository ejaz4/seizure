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
  app.style.backgroundColor = pickRandomColour();
  app.style.color = pickRandomColour();
  requestAnimationFrame(seizure);
};

// blazingly fast vsync seizure
requestAnimationFrame(seizure);