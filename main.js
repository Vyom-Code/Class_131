img = "";
function setup(){
    canvas = createCanvas(1000, 800);
    canvas.center();
}

function preload(){
    img = loadImage('dog_cat.jpg');

}

function draw(){
    image(img, 0, 0, 1000, 800);
    fill('#f54b42');
    text("Dog", 45, 75);
    noFill();
    stroke('#f54b42');
    rect(30, 60, 450, 350);
}