function setup() {
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
}
var startx = 0.0;
var starty = 100.0;
var increment = 0.01;
function draw() {
    xoff = startx;
    loadPixels();
    for(var x=0; x<width; x++){
        yoff = starty;
        for(var y=0; y<height; y++){
            var index = (x + y*width) * 4;
            var r = map(noise(xoff, yoff), 0, 1, 0, 255);
            pixels[index + 0] = r;
            pixels[index + 1] = r;
            pixels[index + 2] = r;
            pixels[index + 3] = 255;
            yoff += increment;
        }
        xoff += increment;
    }
    updatePixels();
    startx += increment;
    starty += increment;
}