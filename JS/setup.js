function setup(){
    createCanvas(windowWidth-50,windowHeight-50)
    setupGraphics()
    current=new operation(graphics.main)
    if(dev.test.length>0){
        current.generatePlayers(1)
        current.transition('main',[])
        dev.test.forEach(card=>current.cardManager.addCard(findName(card,types.card)))
        current.overlayManager.closeAll()
    }
}
function windowResized(){
    resizeCanvas(windowWidth-50,windowHeight-50)
}