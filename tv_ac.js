img ="";
status = "";
function preload(){
img = loadImage("tv_ac.JPG")
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
    text('T.V.', 195, 250)
    noFill();
    stroke('#ffff00');
    rect(180, 230, 300, 180);
    text('A.C.', 195, 60)
    rect(180, 40, 300, 108);
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