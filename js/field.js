const FPS = Number.MAX_SAFE_INTEGER;
let dloops = [];
let iteration = 0;

function setup() {
    HEIGHT = windowHeight;
    WIDTH = windowWidth;
    createCanvas(WIDTH, HEIGHT);
    frameRate(FPS);
    for (let i = 0; i < 10; i++)
        dloops.push(new Dloop({}));
}

function draw() {
    iteration++;
    background(255);
    dloops.forEach(dloop => dloop.show());
}