leftwristX=0;
wrightwristX=0;
function setup(){
    video =createCapture(VIDEO);
    video.size(550, 500);
    canvas= createCanvas(550, 550);
    canvas .position(550, 160);
    posenet.ml5.posenet(video, modelLoaded);
posenet.on('pose', gotPoses);
}
function draw(){
    background(yellow);
    textSize(difference);
    text('Peter', 50, 400);
}

function gotPoses(){
    if(results.length> 0){
        console.log(results);
        leftwristX = results[0].pose.leftwrist.x;
        wrightwristX = results[0].pose.wrightwrist.x;
        difference = floor(leftwristX - wrightwristX);
    }

}
