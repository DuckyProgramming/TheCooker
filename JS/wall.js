class wall extends partisan{
    constructor(layer,parent,index,x,y,width,height,type){
        super(layer,index,x,y,{main:1,trigger:true,speed:5})
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
        this.edit=types.wall[this.type].edit
        this.item=-1
        switch(this.name){
            case 'Sidewalk': case 'Floor': case 'Kitchen Floor':
                this.colliders.main=[]
            break
            case 'High Wall':
                this.boundary=[
                    [{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}],
                    [{x:this.position.x-this.width/2,y:this.position.y-this.height/2},{x:this.position.x+this.width/2,y:this.position.y-this.height/2}],
                    [{x:this.position.x+this.width/2,y:this.position.y+this.height/2},{x:this.position.x-this.width/2,y:this.position.y+this.height/2}],
                    [{x:this.position.x+this.width/2,y:this.position.y+this.height/2},{x:this.position.x+this.width/2,y:this.position.y-this.height/2}]
                ]
            break
            case 'Trash Can':
                this.radius=(this.width+this.height)/4
            break
        }
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
                    case 'Sidewalk':
                        layer.fill(130,120,110,this.fade.main)
                        layer.rect(0,0,this.width,this.height,5)
                    break
                    case 'Floor':
                        layer.fill(180,160,170,this.fade.main)
                        layer.rect(0,0,this.width,this.height,5)
                    break
                    case 'Kitchen Floor':
                        layer.fill(190,this.fade.main)
                        layer.rect(0,0,this.width,this.height,5)
                        layer.fill(160,160,200,this.fade.main)
                        for(let a=0,la=round(this.width/this.parent.tileset[0]*4);a<la;a++){
                            for(let b=0,lb=round(this.height/this.parent.tileset[1]*4);b<lb;b++){
                                if((a+b)%2==0){
                                    layer.rect(this.width*(-0.5+(a+0.5)/la),this.height*(-0.5+(b+0.5)/lb),this.parent.tileset[0]*0.25,this.parent.tileset[1]*0.25)
                                }
                            }
                        }
                    break
                    case 'High Wall':
                        layer.fill(100,90,90,this.fade.main)
                        layer.rect(0,0,this.width,this.height,3)
                    break
                    case 'Wall':
                        layer.fill(120,70,60,this.fade.main)
                        layer.stroke(120,70,60,this.fade.main)
                        layer.strokeWeight(4)
                        layer.strokeJoin(ROUND)
                        layer.beginShape()
                        layer.vertex(-this.width/2,-this.height/2+4)
                        layer.vertex(-this.width/2+4,-this.height/2)
                        layer.vertex(this.width/2-4,-this.height/2)
                        layer.vertex(this.width/2,-this.height/2+4)
                        layer.vertex(this.width/2,this.height/2-4)
                        layer.vertex(this.width/2-4,this.height/2)
                        layer.vertex(-this.width/2+4,this.height/2)
                        layer.vertex(-this.width/2,this.height/2-4)
                        layer.endShape(CLOSE)
                        layer.strokeJoin(MITER)
                    break
                    case 'Counter':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.width+3,this.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.width-3,this.height-3)
                    break
                    case 'Trash Can':
                        for(let a=0,la=4;a<la;a++){
                            layer.fill(140+a*10,this.fade.main)
                            layer.ellipse(0,0,this.radius*(2-a*0.3))
                        }
                        layer.fill(120,this.fade.main)
                        layer.rect(0,0,this.radius*0.75,this.radius*0.15,2)
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
    checkIn(type,obj){
        switch(type){
            case 0:
                switch(this.name){
                    case 'Trash Can':
                        return distPos(obj,this)<this.radius
                    default:
                        return inPointBox(obj,this)
                }
        }
    }
    collide(type,obj){
        switch(type){
            case 0:
                switch(this.name){
                    case 'Trash Can':
                        if(distPos(this,obj)<this.radius+obj.radius&&obj.active){
                            let dir=dirPos(this,obj)
                            let over=this.radius+obj.radius-distPos(this,obj)
                            obj.position.x+=over*lsin(dir)
                            obj.position.y+=over*lcos(dir)
                        }
                    break
                    default:
                        if(inCircleBox(obj,this)&&obj.active){
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
            break
        }
    }
}