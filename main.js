function setup(){
video = createCapture(VIDEO);
video.size(650,650);
video.position(35,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is initialized');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
    }