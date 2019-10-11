class Store {
  constructor() {
    this.count = 100;
    this.width = 1000;
    this.height = 500;
    this.minAcceleration = 0.001;
    this.maxAcceleration = 0.005;
    this.separationFactor = 0.37;
    this.alignmentFactor = 0.3;
    this.cohesionFactor = 0.4;
    this.perception = 75;
    this.jitter = 0.01;
    this.hueOffset = 240;
    this.showPerception = false;
    this.showNeighbors = false;
    this.showVelocity = false;
    this.shape = "triangle";
  }
}
export const store = new Store();

const binding = (id, key) => {
  const x = document.querySelector(`#${id}`);

  x.addEventListener("updated", e => {
    store[key] = e.detail.value;
  });

  x.setAttribute("value", store[key]);
};

binding("perception", "perception");
binding("jitter", "jitter");
binding("hue-offset", "hueOffset");
binding("separation", "separationFactor");
binding("alignment", "alignmentFactor");
binding("cohesion", "cohesionFactor");
binding("show-perception", "showPerception");
binding("show-neighbors", "showNeighbors");
binding("show-velocity", "showVelocity");
binding("shape", "shape");
