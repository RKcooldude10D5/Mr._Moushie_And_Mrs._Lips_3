function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("Model Loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x -15;
        nose_y=results[0].pose.nose.y -15;
    }
}
function gotPoses2(results){
    if(results.length > 0){
        console.log(results);
        nose_x=results[0].pose.nose.x -15;
        nose_y=results[0].pose.nose.y -15;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(ml ,nose_x, nose_y, 30, 30);
}
function takeSnapshot(){
    save('Taken_On_Mr._Moushie_&_Mrs._Lips');
}
nose_x=0;
nose_y=0;
function dachineseguymoushie(){
    ml=loadImage('Da Chinese Guy Moushie.png');
}
function dacreepyman(){
    ml=loadImage('Da Creepy Man Moushie.png');
}
function dadadmoushie(){
    ml=loadImage('Da Dad Moushie.png');
}
function dadalimoushie(){
    ml=loadImage('Da Dali Moushie.png');
}
function dafatdudemoushie(){
    ml=loadImage('Da Fat Dude Moushie.png');
}
function dagalaxymoushie(){
    ml=loadImage('Da Galaxy Moushie.png');
}
function damariomoushie(){
    ml=loadImage('Da Mario Moushie.png');
    document.getElementById("audio").play();
}
function lamoushiefrançaise(){
    ml=loadImage('La Moushie Française.png');
}  
function damrmoneybagsmoushie(){
    ml=loadImage('Da Mr. Moneybags Moushie.png');
}
function damosaicmoushie(){
    ml=loadImage('Da Mosaic Moushie.png');
}
function daunclemoushie(){
    ml=loadImage('Da Uncle Moushie.png');
}
function dawannabecoolguymoushie(){
    ml=loadImage('Da Wannabe Cool Guy Moushie.png');
}
function dablackglossylips(){
    ml=loadImage('Da Black Glossy Lips.png');
}
function dadrippyrainbowlips(){
    ml=loadImage('Da Drippy Rainbow Lips.png');
}
function dagalaxylips(){
    ml=loadImage('Da Galaxy Lips.png');
}
function dalipofhearts(){
    ml=loadImage('Da Lip Of Hearts.png');
}
function daneonlips(){
    ml=loadImage('Da Neon Lips.png');
}
function dapinksmudgylips(){
    ml=loadImage('Da Pink Smudgy Lips.png');
}
function darainbowlips(){
    ml=loadImage('Da Rainbow Lips.png');
}
function darainbowlips2(){
    ml=loadImage('Da Rainbow Lips 2.png');
}
function daredglossylips(){
    ml=loadImage('Da Red Glossy Lips.png');
}
function daredsmudgylips(){
    ml=loadImage('Da Red Smudgy Lips.png');
}