function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    current=new operation(graphics.main)
    if(dev.test){
        current.generatePlayers(1)
        current.transition('main',[])
        current.cardManager.addCard(findName('Stir Fry',types.card))
        current.overlayManager.closeAll()
    }
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}