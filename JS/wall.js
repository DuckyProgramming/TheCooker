class wall extends partisan{
    constructor(layer,parent,x,y,width,height,type){
        super(layer,x,y,{main:1,trigger:true,speed:5})
        this.parent=parent
        this.width=width
        this.height=height
        this.type=type
        this.index=this.parent.index.wall
        this.parent.index.wall++
        this.colliders={main:[[parent.entities.players,0]]}
        this.redundant=[false,false,false,false]
        this.initialValues()
    }
    initialValues(){
        this.mover=false
        //NOT whos
        this.name=types.wall[this.type].name
        if(this.width<0){
            this.width=types.wall[this.type].width
            this.height=types.wall[this.type].height
        }
        this.item=-1
    }
    combiner(){
        return !this.mover
    }
    ladder(step,other){
        switch(step){
            case 0:
                //checks redundant
                if(this.combiner()){
                    for(let a=0,la=other.length;a<la;a++){
                        if(other[a].combiner()){
                            if(near(this.position.x,other[a].position.x)&&near(this.position.y+this.height/2,other[a].position.y-other[a].height/2)){
                                this.redundant[0]=true
                            }
                            if(near(this.position.x,other[a].position.x)&&near(this.position.y-this.height/2,other[a].position.y+other[a].height/2)){
                                this.redundant[1]=true
                            }
                            if(near(this.position.x+this.width/2,other[a].position.x-other[a].width/2)&&near(this.position.y,other[a].position.y)){
                                this.redundant[2]=true
                            }
                            if(near(this.position.x-this.width/2,other[a].position.x+other[a].width/2)&&near(this.position.y,other[a].position.y)){
                                this.redundant[3]=true
                            }
                        }
                    }
                }
            break
        }
    }
    display(level,layer=this.layer){
        switch(level){
            case -1:
                layer.push()
                layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
                layer.noFill()
                layer.stroke(0,255,100,this.fade.main)
                layer.strokeWeight(4)
                if(!this.redundant[0]){
                    layer.line(-this.width/2+2,this.height/2-2,this.width/2-2,this.height/2-2)
                }
                if(!this.redundant[1]){
                    layer.line(-this.width/2+2,-this.height/2+2,this.width/2-2,-this.height/2+2)
                }
                if(!this.redundant[2]){
                    layer.line(this.width/2-2,-this.height/2+2,this.width/2-2,this.height/2-2)
                }
                if(!this.redundant[3]){
                    layer.line(-this.width/2+2,-this.height/2+2,-this.width/2+2,this.height/2-2)
                }
                layer.pop()
            break
            case 0:
                layer.push()
                layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
                layer.noStroke()
                switch(this.name){
                    case '':
                        layer.fill(100,this.fade.main)
                        layer.rect(0,0,this.width,this.height)
                    break
                    case 'Counter':
                        layer.fill(120,75,60,this.fade.main)
                        layer.rect(0,0,this.width+3,this.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.width-3,this.height-3)
                    break
                }
                if(this.item!=-1){
                    this.item.display()
                }
                layer.pop()
            break
        }
    }
    move(x,y){
        this.velocity.x=x
        this.velocity.y=y
        this.position.x+=x
        this.position.y+=y
        this.bounder.position.x+=x
        this.bounder.position.y+=y
        for(let a=0,la=this.boundary.length;a<la;a++){
            for(let b=0,lb=this.boundary[a].length;b<lb;b++){
                for(let c=0,lc=this.boundary[a][b].length;c<lc;c++){
                    this.boundary[a][b][c].x+=x
                    this.boundary[a][b][c].y+=y
                }
            }
        }
    }
    update(){
        super.update()
        this.velocity.x=0
        this.velocity.y=0
        for(let a=0,la=this.colliders.main.length;a<la;a++){
            for(let b=0,lb=this.colliders.main[a][0].length;b<lb;b++){
                this.collide(this.colliders.main[a][1],this.colliders.main[a][0][b])
            }
        }
    }
    collide(type,obj){
        switch(type){
            case 0:
                if(inCircleBox(obj,this)){
                    switch(this.type){
                        default:
                            let basis={x:constrain(obj.position.x,this.position.x-this.width/2-(this.redundant[3]?obj.radius:0),this.position.x+this.width/2+(this.redundant[2]?obj.radius:0)),y:constrain(obj.position.y,this.position.y-this.height/2-(this.redundant[1]?obj.radius:0),this.position.y+this.height/2+(this.redundant[0]?obj.radius:0))}
                            let dir=dirPos({position:basis},obj)
                            obj.position.x=basis.x+lsin(dir)*obj.radius
                            obj.position.y=basis.y+lcos(dir)*obj.radius
                        break
                    }
                }
            break
        }
    }
}