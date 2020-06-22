var socket;

function setup() {
    createCanvas(1450, 1450);
    background(51);

    socket = io.connect("https://d329ddbe1644.ngrok.io");
    socket.on('mouse', newDrawing);
}

function newDrawing(data) {
    noStroke();
    fill(255, 0, 1);
    ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
    console.log('Sending:' + mouseX + ',' + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit("mouse", data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36, 36);
}

function draw() {
   
}