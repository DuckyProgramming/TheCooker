class partisan extends entity{
    constructor(layer,x,y,fade){
        super(layer,x,y,fade)
        this.previous={
            position:{x:this.position.x,y:this.position.y}
        }
        this.base={
            position:{x:this.position.x,y:this.position.y}
        }
        this.offset={
            position:{x:0,y:0}
        }
        this.velocity={x:0,y:0}
    }
    update(){
        super.update()
        this.previous.position.x=this.position.x
        this.previous.position.y=this.position.y
    }
}