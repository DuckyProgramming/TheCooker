class particle extends located{
    constructor(layer,x,y,type,control){
        switch(type){
            default:
                super(layer,x,y,{main:0,trigger:true,speed:15})
            break
        }
        this.type=type
        this.control=control
        this.setupValues(control)
    }
    save(){
        let composite={
            position:this.position,
            fade:this.fade,
            type:this.type,
            control:this.control,
            direction:this.direction,
            size:this.size
        }
        switch(this.type){
            case 0:
                composite.timer={hold:this.timer.hold}
                composite.value=this.value
            break
        }
        return composite
    }
    load(composite){
        this.position=composite.position
        this.fade=composite.fade
        this.type=composite.type
        this.control=composite.control
        this.direction=composite.direction
        this.size=composite.size
        switch(this.type){
            case 0:
                this.timer.hold=composite.timer.hold
                this.value=composite.valuee
            break
        }
    }
    setupValues(control){
        this.direction=0
        this.size=1
        switch(this.type){
            case 0:
                this.timer.hold=0
                this.value=control.value
            break
        }
    }
    display(level,layer=this.layer){
        switch(level){
            case 0:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                layer.rotate(this.direction)
                layer.scale(this.size)
                switch(this.type){
                    case 0:
                        layer.fill(180,this.fade.main)
                        layer.stroke(0,this.fade.main)
                        layer.strokeWeight(0.6)
                        layer.textAlign(LEFT,CENTER)
                        layer.textSize(15)
                        layer.text(`${this.value>0?`+`:``}${this.value}`,-3,1.5)
                        layer.noFill()
                        layer.strokeWeight(1.35)
                        layer.ellipse(-12,0,12)
                        layer.ellipse(-12,0,8)
                        layer.stroke(200,this.fade.main)
                        layer.strokeWeight(0.9)
                        layer.ellipse(-12,0,12)
                        layer.ellipse(-12,0,8)
                        layer.textAlign(CENTER,CENTER)
                    break
                }
                layer.pop()
            break
        }
    }
    update(){
        super.update()
        switch(this.type){
            case 0:
                if(this.fade.main>=1){
                    if(this.timer.hold<30){
                        this.timer.hold++
                    }else{
                        this.fade.trigger=false
                    }
                }else if(this.fade<=0&&!this.fade.trigger){
                    this.remove=true
                }
            break
        }
    }
}