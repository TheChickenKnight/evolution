
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


function initNeat() {
  Config.warnings = false;
  neat = new Neat(
        11,
        8,
        null,
        {
            mutation: [
              Methods.Mutation.ADD_NODE,
              Methods.Mutation.SUB_NODE,
              Methods.Mutation.ADD_CONN,
              Methods.Mutation.SUB_CONN,
              Methods.Mutation.MOD_WEIGHT,
              Methods.Mutation.MOD_BIAS,
              Methods.Mutation.MOD_ACTIVATION,
              Methods.Mutation.ADD_GATE,
              Methods.Mutation.SUB_GATE,
              Methods.Mutation.ADD_SELF_CONN,
              Methods.Mutation.SUB_SELF_CONN,
              Methods.Mutation.ADD_BACK_CONN,
              Methods.Mutation.SUB_BACK_CONN
            ],
            popsize: PLAYER_AMOUNT,
            mutationRate: MUTATION_RATE,
            elitism: Math.round(ELITISM_PERCENT * PLAYER_AMOUNT),
            network: new Architect.Random(
              11,
              START_HIDDEN_SIZE,
              8
            )
          },
    );
}

function startEval() {

  tringles = [];
  for (var genome in neat.population) {
    genome = neat.population[genome];
    new Tringle(genome);
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
    imageMode(CENTER);
    translate(img_x+img_width/2, img_y+img_width/2);
    rotate(PI/180*angle);
    image(img, 0, 0, img_width, img_height);
    rotate(-PI / 180 * img_angle);
    translate(-(img_x+img_width/2), -(img_y+img_width/2));
    imageMode(CORNER);
}