img ="";
status = "";
function preload(){
img = loadImage("desk.JPG")
}
function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    bjectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function draw(){
    image(img, 0, 0, 640, 420);
    fill("#ffff00");
    text('Desk', 45, 130)
    noFill();
    stroke('#ffff00');
    rect(30, 110,600, 300);
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