class Dloop {
    constructor(genome) {
        this.brain = genome;
        this.brain.score = 0;

        //Attributes
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.accel = createVector(0, 0);
        this.genes = {
            speed: 0,
            agility: 0,
            size: 0,
            sight: {
                range: 0,
                width: 0
            }
        };

        //State
        this.energy = 100;
        this.health = 100;
        this.maturity = 0;
    }


}