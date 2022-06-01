const canvas = document.getElementById('renderSurface');
const rFluid = new Fluid(canvas);

rFluid.mapBehaviors({
  paused: false,
  dissipation: .966,
  velocity: .98,
  pressure: .5,
  curl: 9,
  pressure_iteration: 4,
  emitter_size: 0.03,
})
rFluid.activate();
