img = "";
status ="";
function setup(){
    canvas = createCanvas(1000, 800);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', loaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
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

    fill('#F54b42');
    text("Cat", 520, 160);
    noFill();
    rect(500, 150, 270, 320);
}

function loaded(){
console.log("Model Loaded");
status = true;
objectDetector.detect(img, gotResult);
}

function gotResult(){
    if(error){
        console.log(error);
    
    }
    console.log(results);
}