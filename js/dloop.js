class Dloop {
    constructor(genome) {
        this.brain = genome;
        this.brain.score = 0;
        this.sprite = loadImage('/assets/dloop.png');

        //Attributes
        this.pos = createVector(random(width), random(height));
        this.vel = createVector(0, 0);
        this.accel = createVector(0, 0);
        this.dir = createVector(0, 1).rotate(random(2*PI));
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
        this.energy = 50;
        this.energyMax = 100;
        this.health = 100;
        this.healthMax = 100;
        this.maturity = 0;
    }

    sense() {
        var inputs = [
            this.pos.x,
            this.pos.y,
            this.vel.heading(),
            this.vel.mag(),
            this.accel.heading(),
            this.maturity,
            this.health / this.healthMax,
            Math.sin(x/10)
        ];

    }

    move() {

    }

    act() {

    }

    show() {
        rotate_and_draw_image(this.sprite, this.pos.x, this.pos.y, 128, 128, (this.dir.heading() * 180 / PI) + 90);
    }

    closestDloops() {
        return dloops.filter(dloop => {
            let testAngle = createVector(dloop.pos.x - this.pos.x, dloop.pos.y - this.pos.y);
            let a = this.left.heading();
            let b = this.right.heading();
            a -= testAngle.heading();
            b -= testAngle.heading();
            return a * b >= 0 ? false : (Math.abs( a - b ) < PI && this.radius >= testAngle.mag());
        });
    }
}