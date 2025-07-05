class card extends located{
    constructor(layer,parent,x,y,type){
        super(layer,x,y,{main:0,trigger:true,speed:5})
        this.parent=parent
        this.type=type
        this.name=types.card[this.type].name
        this.list=types.card[this.type].list
        this.desc=types.card[this.type].desc
        this.size=1
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.scale(this.size)
        layer.fill(225,this.fade.main)
        switch(this.list){
            case 0: layer.stroke(25,225,25,this.fade.main); break
            case 1: layer.stroke(25,225,125,this.fade.main); break
            case 2: layer.stroke(125,225,25,this.fade.main); break
            case 3: layer.stroke(25,225,225,this.fade.main); break
            case 4: layer.stroke(25,25,225,this.fade.main); break
            case 5: layer.stroke(125,this.fade.main); break
        }
        layer.strokeWeight(5)
        layer.rect(0,0,80,120)
        layer.fill(0,this.fade.main)
        layer.noStroke()
        layer.textSize(20)
        layer.text(this.name,0,-50)
        layer.pop()
    }
}