function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    current=new operation(graphics.main)
    current.transition('main',[types.level[0]])
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}