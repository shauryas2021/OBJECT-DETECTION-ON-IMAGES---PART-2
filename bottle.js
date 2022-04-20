img ="";
function preload(){
img = loadImage("bottle.JPG")
status = "";
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ffff00");
    text('Bottle', 155, 50)
    noFill();
    stroke('#ffff00');
    rect(150, 30, 200, 350);
}
function modelLoaded(){
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.log(error);
    }
console.log(results);
}