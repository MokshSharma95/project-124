function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(500,450);
    canvas.position(590,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('grey');
}

function modelLoaded(){
    console.log("poseNet is Initialised")

}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
    }
}
