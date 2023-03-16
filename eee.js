function setup(){
    canvas = createCanvas(500,500);
    canvas.position(780,200);
    video = createCapture(VIDEO);
    video.size(500,500);
    video.hide();
}