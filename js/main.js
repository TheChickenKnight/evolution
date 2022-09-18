
var Neat = neataptic.Neat;
var Methods = neataptic.Methods;
var Config  = neataptic.Config;
var Architect = neataptic.Architect;

var WIDTH;
var HEIGHT;
var FOOD_AMOUNT      = Math.round(WIDTH * HEIGHT * 4e-4);

var neat;

// GA settings
var PLAYER_AMOUNT     = 100;
var ITERATIONS        = 300;
var START_HIDDEN_SIZE = 1;
var MUTATION_RATE     = 1000000;
var ELITISM_PERCENT   = 0.1;

Config.warnings = false;

function startEval() {
  dloops = [];
  for (var genome in neat.population) {
    genome = neat.population[genome];
    dloops.push(new Dloop(genome));
  }
}

function endEval() {
    let avg = 0;
    for (let brain of neat.population)
      avg += brain.score;
    avg /= neat.population.length;
    console.log("Gen " + neat.generation +  " Average: " + avg)
    neat.sort();
    let newPopulation = [];
  
    for(let i = 0; i < neat.elitism; i++)
      newPopulation.push(neat.population[i]);
  
    for(let i = 0; i < neat.popsize - neat.elitism; i++)
      newPopulation.push(neat.getOffspring());
  
    neat.population = newPopulation;
    neat.mutate();
  
    neat.generation++;
    startEval();
}

function rotate_and_draw_image(img, img_x, img_y, img_width, img_height, img_angle) {
    push();
    imageMode(CENTER);
    translate(img_x, img_y);
    rotate(PI/180*img_angle);
    image(img, 0, 0, img_width, img_height);
    pop();
}