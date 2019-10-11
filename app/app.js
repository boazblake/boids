import { loop } from "./loop.js";
import { particleEngine } from "./particleEngine.js";
import { groupEngine } from "./groupEngine.js";
import { render } from "./render.js";
import { store } from "./store.js";
import { generate } from "./utilities.js";

const init = id => {
  const app = document.getElementById(id);
  const canvas = document.createElement("canvas");
  canvas.width = store.width;
  canvas.height = store.height;
  const context = canvas.getContext("2d");
  app.appendChild(canvas);
  return context;
};

export const update = ctx => (particles, time) => {
  ctx.clearRect(0, 0, store.width, store.height);
  const ps = groupEngine(store, particles);
  const pps = ps.map(particleEngine(store, time));
  pps.forEach(render(store, ctx));
  return pps;
};

const particles = generate(store);

export const App = id => {
  const ctx = init(id);
  loop(window, particles, update(ctx));
};
