var bird;
var pipes = [];
var points = 0;

function setup() {
    createCanvas(600,600);

    bird = new Bird();
    pipes = [];
    points = 0;

    textSize(40);
    fill(255, 255, 51);
    text(points, width/2, 30);
}

function draw() {
    background(0);

    for (var i=pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();

        if (pipes[i].hits(bird)) {
            setup();
            return;
        }
        else {
            if (frameCount % 100 == 0) {
                points += round(i/3);
            }
        }

        fill(255,255,51);
        text(points, width/2, 30);

        if (pipes[i].offScreen()) {
            pipes.splice(i, 1);
        }
    }

    if (bird.hittingGround) {
        setup();
        return;
    }

    bird.update();
    bird.show();

    if (frameCount % 100 == 0) {
        pipes.push(new Pipe());
    }

}

function keyPressed() {
    if (key == ' ') {
        bird.up();
    }
}

function touchEnded() {
    bird.up();
}
