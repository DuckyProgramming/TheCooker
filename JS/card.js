class card extends located{
    constructor(layer,parent,x,y,type){
        super(layer,x,y,{main:0,trigger:true,speed:5})
        this.parent=parent
        this.type=type
        this.name=types.card[this.type].name
        this.list=types.card[this.type].list
        this.customerMult=types.card[this.type].customerMult
        this.desc=types.card[this.type].desc
        this.width=160
        this.height=200
        this.size=1
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.scale(this.size)
        layer.fill(200,this.fade.main)
        switch(this.list){
            case 0: layer.stroke(75,225,75,this.fade.main); break
            case 1: layer.stroke(75,225,150,this.fade.main); break
            case 2: layer.stroke(150,225,75,this.fade.main); break
            case 3: layer.stroke(75,225,225,this.fade.main); break
            case 4: layer.stroke(75,75,225,this.fade.main); break
            case 5: layer.stroke(225,225,75,this.fade.main); break
        }
        layer.strokeWeight(5)
        layer.rect(0,0,this.width-5,this.height-5,10)
        if(this.customerMult!=1){
            layer.stroke(225,75,75,this.fade.main)
            layer.strokeWeight(2)
            layer.rect(45,80,50,20,5)
            layer.strokeWeight(1.5)
            layer.ellipse(49.75,80,6)
            layer.ellipse(63.25,80,6)
            layer.ellipse(56.5,80,12.5)
        }
        layer.fill(0,this.fade.main)
        layer.noStroke()
        layer.textSize(20)
        layer.text(this.name,0,-60,145)
        layer.textSize(12)
        layer.text(this.desc,0,20,145)
        if(this.customerMult!=1){
            layer.textSize(8)
            layer.text(this.customerMult<1?`-${round((1-this.customerMult)*100)}%`:`+${round((this.customerMult-1)*100)}%`,34,80)
        }
        layer.pop()
    }
    update(){
        super.update()
    }
}