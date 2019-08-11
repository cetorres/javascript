let time = 0;
let wave = [];
let slider1;
let slider2;

function setup() {
    createCanvas(800, 600);
    slider1 = createSlider(1, 100, 5);
    slider1.position(20, 20);
    slider2 = createSlider(1, 10, 5);
    slider2.position(width-180, 20);
}

function draw() {
    background(0);

    fill(255);
    textSize(18);
    text(slider1.value(), 160, 27);
    text(slider2.value()/100, width - 45, 27);

    translate(height/3, height/2);

    let x = 0;
    let y = 0;

    for (let i = 0; i < slider1.value(); i++) {
        let prevX = x;
        let prevY = y;

        let n = i * 2 + 1;
        let radius = 100 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255, 100);
        noFill();
        ellipse(prevX, prevY, radius * 2);

        stroke(255);
        line(prevX, prevY, x, y);
    }

    wave.unshift(y);

    translate(height / 3, 0);
    line(x - (height / 3), y, 0, wave[0]);

    beginShape();
    noFill();
    for (let i = 0; i < wave.length; i++) {
        vertex(i, wave[i]);
    }
    endShape();

    time += slider2.value()/100;

    if (wave.length > width/2) {
        wave.pop();
    }
}