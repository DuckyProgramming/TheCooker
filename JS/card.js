class card extends located{
    constructor(layer,parent,x,y,type){
        super(layer,x,y,{main:0,trigger:true,speed:10})
        this.parent=parent
        this.type=type
        this.width=160
        this.height=200
        this.size=1
        this.initial()
    }
    save(){
        let composite={
            position:this.position,
            type:this.type,
        }
        return composite
    }
    load(composite){
        this.position=composite.position
        this.type=composite.type
        this.initial()
    }
    initial(){
        this.name=types.card[this.type].name
        this.list=types.card[this.type].list
        if(this.list>=0&&this.list<=4){
            this.rate=types.card[this.type].rate
        }
        this.customerMult=types.card[this.type].customerMult
        if(this.customerMult.length==2){
            this.customerMult=this.customerMult[this.parent.operation.dayManager.day==0?1:0]
        }
        this.desc=types.card[this.type].desc
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.scale(this.size)
        layer.fill(225,this.fade.main)
        switch(this.list){
            case 0: layer.stroke(75,225,75,this.fade.main); break
            case 1: layer.stroke(75,225,150,this.fade.main); break
            case 2: layer.stroke(150,225,75,this.fade.main); break
            case 3: layer.stroke(75,225,225,this.fade.main); break
            case 4: layer.stroke(75,75,225,this.fade.main); break
            case 5: layer.stroke(150,75,225,this.fade.main); break
            case 6: layer.stroke(225,225,75,this.fade.main); break
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
        if(this.list>=0&&this.list<=4){
            layer.stroke(75,75,75,this.fade.main)
            layer.strokeWeight(2)
            layer.rect(-54,80,32,20,5)
            layer.strokeWeight(1.25)
            layer.ellipse(-60,80,11.25)
            layer.ellipse(-60,80,7.5)
        }
        layer.fill(0,this.fade.main)
        layer.noStroke()
        layer.textSize(20)
        layer.text(this.name,0,-60,145)
        layer.textSize(8)
        if(this.customerMult!=1){
            layer.text(this.customerMult<1?`-${round((1-this.customerMult)*100)}%`:`+${round((this.customerMult-1)*100)}%`,34,80)
        }
        if(this.list>=0&&this.list<=4){
            layer.text(this.rate[1],-47,80)
            layer.text('Difficulty:',-52,63)
            layer.textSize(12)
            layer.text(this.desc,0,5,145)
            for(let a=0,la=3;a<la;a++){
                if(a==this.rate[0]){
                    layer.stroke(0,this.fade.main)
                    layer.strokeWeight(0.5)
                    layer.noFill()
                }
                if(a>=this.rate[0]){
                    regStar(layer,a*12-28,62,5,[2,5.5],[2,5.5],0)
                }else{
                    regStar(layer,a*12-28,62,5,[2.5,6],[2.5,6],0)
                }
            }
        }else{
            layer.textSize(12)
            layer.text(this.desc,0,20,145)
        }
        layer.pop()
    }
    update(){
        super.update()
    }
}