class dish extends located{
    constructor(layer,parent,x,y,type){
        super(layer,x,y,{main:0,trigger:true,speed:10})
        this.parent=parent
        this.type=type
        this.name=types.dish[this.type].name
        this.list=types.dish[this.type].list
        this.value=types.dish[this.type].value
        this.desc=types.dish[this.type].desc
        this.width=200
        this.height=200
        this.size=1
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.scale(this.size)
        layer.fill(225,this.fade.main)
        switch(this.list){
            case 0: layer.stroke(75,225,75,this.fade.main); break
            case 1: layer.stroke(150,225,75,this.fade.main); break
            case 2: layer.stroke(75,225,225,this.fade.main); break
            case 3: layer.stroke(75,75,225,this.fade.main); break
            case 4: layer.stroke(225,225,75,this.fade.main); break
        }
        layer.strokeWeight(5)
        layer.rect(0,0,this.width-5,this.height-5,10)
        if(this.value!='0'){
            layer.stroke(75,75,75,this.fade.main)
            layer.strokeWeight(2)
            layer.rect(74,80,32,20,5)
            layer.strokeWeight(1.25)
            layer.ellipse(80,80,11.25)
            layer.ellipse(80,80,7.5)
        }
        layer.fill(0,this.fade.main)
        layer.noStroke()
        layer.textSize(20)
        layer.text(this.name,0,-60,185)
        layer.textSize(12)
        layer.text(this.desc,0,20,185)
        if(this.value!='0'){
            layer.textSize(8)
            layer.text(this.value,67,80)
        }
        layer.pop()
    }
    update(){
        super.update()
    }
}