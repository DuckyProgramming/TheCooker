class wall extends partisan{
    constructor(layer,parent,index,x,y,gridPos,width,height,type){
        super(layer,index,x,y,{main:0,trigger:true,speed:5})
        this.parent=parent
        this.gridPos=gridPos
        this.width=width
        this.height=height
        this.type=type
        this.index=this.parent.index.wall
        this.parent.index.wall++
        this.colliders={main:[[parent.entities.players,0]]}
        this.redundant=[false,false,false,false]
        this.removeMark=false
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
        this.spec=types.wall[this.type].spec
        this.edit=types.wall[this.type].edit
        this.level=types.wall[this.type].level
        this.direction={main:0,goal:0}
        this.base={width:this.width,height:this.height}
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
            case 'Crate':
                this.contain=0
                this.animSet={contain:0}
            break
            case 'Blueprint': case 'Option':
                this.colliders.main=[]
                this.contain=0
                this.animSet={contain:0}
            break
            case 'Blueprint Cabinet':
                this.contain=-1
            break
            case 'Counter': case 'Freezer':
                this.speed=[1,1]
            break
            case 'Cutting Board':
                this.speed=[3,1]
            break
            case 'Rolling Board':
                this.speed=[1,3]
            break
            case 'Levitating Counter':
                this.speed=[1,1]
                this.colliders.main=[]
            break
            case 'Starter Plates': case 'Plates': case 'Large Plates':
            case 'Dish Rack':
            case 'Starter Trash Bin': case 'Trash Bin': case 'Large Trash Bin': case 'Compost Bin':
            case 'Stack Station': case 'Silo':
                this.animSet={num:0}
            break
            case 'Starter Hob':
            case 'Starter Sink':
                this.speed=0.75
            break
            case 'Hob': case 'Safe Hob': case 'Override Hob':
            case 'Sink': case 'Soaking Sink':
                this.speed=1
            break
            case 'Fast Hob':
                this.speed=1.5
            break
            case 'Power Sink':
                this.speed=2
            break
            case 'Wash Basin':
                this.speed=0.375
                this.animSet={num:0}
            break
            case 'Dining Table':
                this.occupied=false
                this.occupants=[]
                this.operation={phase:0,timer:0,timerCap:0}
                this.orderPhase=0
                this.animSet={num:0,phase:[0,0,0,0,0,0]}
                this.patience={main:0,base:0}
            break
            case 'Frozen Prep Station':
                this.items=0
            break
        }
        this.reset()
    }
    reset(){
        if(this.name!='Blueprint Cabinet'&&this.name!='Freezer'&&this.name!='Frozen Prep Station'){
            this.item=-1
        }
        switch(this.name){
            case 'Blueprint': case 'Option':
                this.item=new item(this.layer,0,-11,findName('Purchase Proxy',types.item))
            break
            case 'Starter Plates':
                this.plates=4
                this.base.plates=4
                this.item=this.generateItem('Plate')
            break
            case 'Plates':
                this.plates=8
                this.base.plates=8
                this.item=this.generateItem('Plate')
            break
            case 'Large Plates':
                this.plates=12
                this.base.plates=12
                this.item=this.generateItem('Plate')
            break
            case 'Dish Rack':
                this.plates=0
                this.base.plates=4
            break
            case 'Starter Trash Bin':
                this.trash=0
                this.base.trash=3
            break
            case 'Trash Bin': case 'Compost Bin':
                this.trash=0
                this.base.trash=5
            break
            case 'Large Trash Bin':
                this.trash=0
                this.base.trash=10
            break
            case 'Dining Table':
                this.plates=0
            break
            case 'Wash Basin':
                this.plates=0
                this.base.plates=4
                this.washed=false
            break
            case 'Prep Station':
                this.items=0
                this.base.items=4
            break
            case 'Frozen Prep Station':
                this.base.items=4
            break
            case 'Stack Station':
                this.items=[]
                this.base.items=4
            break
            case 'Silo':
                this.items=0
                this.base.items=10
            break
        }
    }
    combiner(){
        return !this.mover
    }
    ladder(step,other){
        switch(step){
            case 0:
                this.redundant=[false,false,false,false]
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
    generateItem(name){
        return name==''?-1:new item(this.layer,0,0,findName(name,types.item))
    }
    generateItemType(type){
        return new item(this.layer,0,0,type)
    }
    copySelfItem(){
        let result=new item(this.layer,0,0,this.item.type)
        result.portions=this.item.portions
        return result
    }
    occupy(occupier){
        this.occupants=[]
        this.operation.phase=0
        this.occupied=true
        let current=occupier
        this.occupants.push(current)
        while(current.follower!=-1){
            current=current.follower
            this.occupants.push(current)
        }
        this.orderPhase=0
        if(this.orderPhase==0&&this.parent.operation.dishManager.obj[1].length==0){
            this.orderPhase=1
        }
        if(this.orderPhase==1&&this.parent.operation.dishManager.obj[0].length==0){
            this.orderPhase=2
        }
        if(this.orderPhase==2&&this.parent.operation.dishManager.obj[3].length==0){
            this.orderPhase=3
        }
        let turn=random(0,360)
        for(let a=0,la=this.occupants.length;a<la;a++){
            this.occupants[a].follow=this
            this.occupants[a].mode=2
            this.occupants[a].speed*=(1-a/la*0.5)
            this.occupants[a].angle=la==1?-1:turn+a/la*360
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
    rotate(){
        this.direction.goal+=90
        let hold=this.height
        this.height=this.width
        this.width=hold
    }
    getItemProcessVisible(){
        return this.item==-1?false:this.item.processVisible
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
                layer.rotate(this.direction.main)
                layer.noStroke()
                switch(this.name){
                    case '':
                        layer.fill(100,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                    break
                    case 'Sidewalk':
                        layer.fill(130,120,110,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,5)
                    break
                    case 'Floor':
                        layer.fill(160,150,140,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,5)
                    break
                    case 'Kitchen Floor':
                        layer.fill(165,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,5)
                        layer.fill(150,150,180,this.fade.main)
                        for(let a=0,la=round(this.base.width/this.parent.tileset[0]*4);a<la;a++){
                            for(let b=0,lb=round(this.base.height/this.parent.tileset[1]*4);b<lb;b++){
                                if((a+b)%2==0){
                                    layer.rect(this.base.width*(-0.5+(a+0.5)/la),this.base.height*(-0.5+(b+0.5)/lb),this.parent.tileset[0]*0.25,this.parent.tileset[1]*0.25)
                                }
                            }
                        }
                    break
                    case 'High Wall':
                        layer.fill(100,90,90,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,3)
                    break
                    case 'Wall':
                        layer.fill(120,70,60,this.fade.main)
                        layer.stroke(120,70,60,this.fade.main)
                        layer.strokeWeight(4)
                        layer.strokeJoin(ROUND)
                        layer.beginShape()
                        layer.vertex(-this.base.width/2,-this.base.height/2+4)
                        layer.vertex(-this.base.width/2+4,-this.base.height/2)
                        layer.vertex(this.base.width/2-4,-this.base.height/2)
                        layer.vertex(this.base.width/2,-this.base.height/2+4)
                        layer.vertex(this.base.width/2,this.base.height/2-4)
                        layer.vertex(this.base.width/2-4,this.base.height/2)
                        layer.vertex(-this.base.width/2+4,this.base.height/2)
                        layer.vertex(-this.base.width/2,this.base.height/2-4)
                        layer.endShape(CLOSE)
                        layer.strokeJoin(MITER)
                    break
                    case 'Trash Can':
                        for(let a=0,la=4;a<la;a++){
                            layer.fill(140+a*10,this.fade.main)
                            layer.ellipse(0,0,this.radius*(2-a*0.3))
                        }
                        layer.fill(120,this.fade.main)
                        layer.rect(0,0,this.radius*0.75,this.radius*0.15,2)
                    break
                    case 'Crate':
                        layer.fill(180,120,60,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                        layer.fill(190,135,80,this.fade.main)
                        layer.rect(0,0,this.base.width*0.8,this.base.height*0.8)
                        layer.fill(160,100,40,this.fade.main)
                        layer.quad(-this.base.width*0.4,this.base.height*0.1,-this.base.width*0.4,this.base.height*0.25,this.base.width*0.4,-this.base.height*0.1,this.base.width*0.4,-this.base.height*0.25)
                    break
                    case 'Blueprint':
                        layer.fill(42,89,163,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                        layer.noFill()
                        layer.stroke(92,127,182,this.fade.main)
                        layer.strokeWeight(1)
                        for(let a=0,la=4;a<la;a++){
                            layer.line((this.base.width-3)*(-0.5+(a+1)/(la+1)),-this.base.height/2+1.5,(this.base.width-3)*(-0.5+(a+1)/(la+1)),this.base.height/2-1.5)
                            layer.line(-this.base.width/2+1.5,(this.base.height-3)*(-0.5+(a+1)/(la+1)),this.base.width/2-1.5,(this.base.height-3)*(-0.5+(a+1)/(la+1)))
                        }
                        layer.stroke(240,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(240,this.fade.main)
                        layer.noStroke()
                        layer.textSize(7.5)
                        layer.text(types.wall[this.contain].name,0,0,this.base.width)
                    break
                    case 'Option':
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,6)
                        layer.stroke(240,this.fade.main)
                        layer.strokeWeight(1)
                        layer.line(-this.base.width/2+1.5,-this.base.height/2+6,-this.base.width/2+1.5,this.base.height/2-6)
                        layer.line(this.base.width/2-1.5,-this.base.height/2+6,this.base.width/2-1.5,this.base.height/2-6)
                        layer.line(-this.base.width/2+6,-this.base.height/2+1.5,this.base.width/2-6,-this.base.height/2+1.5)
                        layer.line(-this.base.width/2+6,this.base.height/2-1.5,this.base.width/2-6,this.base.height/2-1.5)
                        layer.fill(0,this.fade.main)
                        layer.noStroke()
                        layer.textSize(7.5)
                        layer.text(['Begin','Reroll'][this.contain],0,0,this.base.width)
                    break
                    case 'Blueprint Cabinet':
                        layer.fill(180,this.fade.main)
                        layer.rect(0,3,this.base.width-6,this.base.height-6,2)
                        layer.fill(60,140,80,this.fade.main)
                        layer.rect(0,-3,this.base.width,this.base.height-6,4)
                        layer.fill(50,120,70,this.fade.main)
                        layer.rect(0,-3,this.base.width-6,this.base.height-12,4)
                        if(this.contain>=0){
                            layer.fill(42,89,163,this.fade.main)
                            layer.rect(0,this.base.height/2-3,this.base.width-12,1.5)
                        }
                    break
                    case 'Counter':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                    break
                    case 'Freezer':
                        layer.fill(180,220,240,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                        layer.fill(160,200,220,this.fade.main)
                        layer.rect(0,0,this.base.width-6,this.base.height-6)
                    break
                    case 'Cutting Board':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,36,28,8)
                        layer.fill(240,this.fade.main)
                        layer.triangle(-14,10,-6,10,-10,-18)
                        layer.fill(80,this.fade.main)
                        layer.rect(-10,12.5,3,5)
                    break
                    case 'Rolling Board':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,36,28,8)
                        layer.fill(170,170,130,this.fade.main)
                        layer.rect(-10,0,6,24,3)
                        layer.ellipse(-10,-14,3,8)
                        layer.ellipse(-10,14,3,8)
                    break
                    case 'Levitating Counter':
                        layer.strokeWeight(2)
                        layer.noFill()
                        layer.stroke(140,95,80,this.fade.main*0.5)
                        layer.quad(-this.base.width*0.3,0,0,-this.base.height*0.3,this.base.width*0.3,0,0,this.base.height*0.3)
                        layer.stroke(180,125,100,this.fade.main*0.5)
                        layer.quad(-this.base.width*0.2,0,0,-this.base.height*0.2,this.base.width*0.2,0,0,this.base.height*0.2)
                    break
                    case 'Prep Station':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(60,180,240,this.fade.main)
                        layer.rect(-10,-10,17,17,4)
                        layer.rect(-10,10,17,17,4)
                        layer.rect(10,-10,17,17,4)
                        layer.rect(10,10,17,17,4)
                        layer.fill(40,140,180,this.fade.main)
                        layer.rect(-10,-10,14,14,3)
                        layer.rect(-10,10,14,14,3)
                        layer.rect(10,-10,14,14,3)
                        layer.rect(10,10,14,14,3)
                        if(this.item!=-1){
                            layer.push()
                            layer.scale(0.5)
                            layer.translate(-20,-20)
                            this.item.display(0)
                            if(this.items>=2){
                                layer.translate(40,0)
                                this.item.display(0)
                                if(this.items>=3){
                                    layer.translate(-40,40)
                                    this.item.display(0)
                                    if(this.items>=4){
                                        layer.translate(40,0)
                                        this.item.display(0)
                                    }
                                }
                            }
                            layer.pop()
                        }
                    break
                    case 'Frozen Prep Station':
                        layer.fill(180,220,240,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                        layer.fill(160,200,220,this.fade.main)
                        layer.rect(0,0,this.base.width-6,this.base.height-6)
                        layer.fill(80,200,240,this.fade.main)
                        layer.rect(-10,-10,17,17,4)
                        layer.rect(-10,10,17,17,4)
                        layer.rect(10,-10,17,17,4)
                        layer.rect(10,10,17,17,4)
                        layer.fill(60,170,220,this.fade.main)
                        layer.rect(-10,-10,14,14,3)
                        layer.rect(-10,10,14,14,3)
                        layer.rect(10,-10,14,14,3)
                        layer.rect(10,10,14,14,3)
                        if(this.item!=-1){
                            layer.push()
                            layer.scale(0.5)
                            layer.translate(-20,-20)
                            this.item.display(0)
                            if(this.items>=2){
                                layer.translate(40,0)
                                this.item.display(0)
                                if(this.items>=3){
                                    layer.translate(-40,40)
                                    this.item.display(0)
                                    if(this.items>=4){
                                        layer.translate(40,0)
                                        this.item.display(0)
                                    }
                                }
                            }
                            layer.pop()
                        }
                    break
                    case 'Stack Station':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(60,180,240,this.fade.main)
                        layer.rect(0,0,31,31,7)
                        layer.fill(40,140,180,this.fade.main)
                        layer.rect(0,0,28,28,6)
                        layer.fill(60,180,240,this.fade.main)
                        layer.rect(0,0,17,17,4)
                        layer.fill(40,140,180,this.fade.main)
                        layer.rect(0,0,14,14,3)
                        for(let a=0,la=this.items.length;a<la;a++){
                            this.items[a].display(0)
                        }
                    break
                    case 'Silo':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(120,this.fade.main)
                        layer.ellipse(0,0,36)
                        layer.fill(80,this.fade.main)
                        layer.ellipse(0,0,30)
                        layer.fill(120,this.fade.main)
                        layer.rect(0,0,30,3)
                        for(let a=0,la=8;a<la;a++){
                            layer.rotate(45)
                            layer.rect(14,0,2,3)
                        }
                    break
                    case 'Dining Table':
                        layer.fill(160,90,60,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,5)
                        layer.fill(130,70,45,this.fade.main)
                        for(let a=0,la=5;a<la;a++){
                            layer.rect(0,this.base.height*(-0.5+(a+1)/(la+1)),this.base.width,2)
                        }
                    break
                    case 'Starter Sink':
                        layer.fill(200,this.fade.main)
                        layer.rotate(-3)
                        layer.rect(0,0,this.base.width,this.base.height,12)
                        layer.rotate(3)
                        layer.fill(180,220,220,this.fade.main)
                        layer.rect(0,0,32,24,6)
                        layer.fill(180,200,200,this.fade.main)
                        layer.arc(0,2,12,12,-10,200)
                        layer.ellipse(0,2,9)
                    break
                    case 'Sink':
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,12)
                        layer.fill(180,220,220,this.fade.main)
                        layer.rect(0,0,32,24,6)
                        layer.fill(180,200,200,this.fade.main)
                        layer.ellipse(0,2,12)
                    break
                    case 'Soaking Sink':
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,12)
                        layer.fill(180,220,220,this.fade.main)
                        layer.rect(0,0,32,24,6)
                        layer.fill(180,200,200,this.fade.main)
                        layer.ellipse(0,2,12)
                        layer.fill(160,200,200,this.fade.main)
                        layer.rect(-15,0,2,4)
                        layer.rect(-15,-6,2,4)
                        layer.rect(-15,6,2,4)
                        layer.rect(15,0,2,4)
                        layer.rect(15,-6,2,4)
                        layer.rect(15,6,2,4)
                    break
                    case 'Wash Basin':
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,12)
                        layer.fill(180,220,220,this.fade.main)
                        layer.rect(0,0,40,32,8)
                        layer.fill(180,200,200,this.fade.main)
                        layer.ellipse(0,2,12)
                    break
                    case 'Power Sink':
                        layer.fill(200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,12)
                        layer.fill(180,220,220,this.fade.main)
                        layer.rect(0,0,32,24,6)
                        layer.fill(180,200,200,this.fade.main)
                        layer.ellipse(0,3,12)
                    break
                    case 'Starter Plates':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.stroke(175,this.fade.main)
                        layer.strokeWeight(2)
                        layer.line(0,-16,0,-12)
                        layer.line(0,-16,-13.5,-8)
                        layer.line(-13.5,-8,-13.5,8)
                        layer.line(0,-16,13.5,-8)
                        layer.line(13.5,-8,13.5,8)
                        layer.line(-13.5,8,-10,6)
                        layer.line(13.5,8,10,6)
                    break
                    case 'Plates':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.stroke(175,this.fade.main)
                        layer.strokeWeight(2)
                        layer.line(0,-16,0,-12)
                        layer.line(0,-16,-13.5,-8)
                        layer.line(-13.5,-8,-13.5,8)
                        layer.line(0,-16,13.5,-8)
                        layer.line(13.5,-8,13.5,8)
                        layer.line(-13.5,-8,-10,-6)
                        layer.line(13.5,-8,10,-6)
                        layer.line(-13.5,8,-10,6)
                        layer.line(13.5,8,10,6)
                    break
                    case 'Large Plates':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.stroke(175,this.fade.main)
                        layer.strokeWeight(2)
                        layer.line(0,-16,0,-12)
                        layer.line(0,-16,-13.5,-8)
                        layer.line(-13.5,-8,-13.5,8)
                        layer.line(0,-16,13.5,-8)
                        layer.line(13.5,-8,13.5,8)
                        layer.line(-13.5,-8,-10,-6)
                        layer.line(13.5,-8,10,-6)
                        layer.line(-13.5,8,-10,6)
                        layer.line(13.5,8,10,6)
                        layer.line(-10,10,-13.5,8)
                        layer.line(10,10,13.5,8)
                    break
                    case 'Dish Rack':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.stroke(175,this.fade.main)
                        layer.strokeWeight(2)
                        layer.line(0,-8,0,8)
                        layer.line(-13.5,-8,-13.5,8)
                        layer.line(13.5,-8,13.5,8)
                        layer.line(-10,-10,-13.5,-8)
                        layer.line(10,-10,13.5,-8)
                        layer.line(-10,10,-13.5,8)
                        layer.line(10,10,13.5,8)
                        layer.line(-3.5,-10,0,-8)
                        layer.line(3.5,-10,0,-8)
                        layer.line(-3.5,10,0,8)
                        layer.line(3.5,10,0,8)
                    break
                    case 'Starter Trash Bin':
                        layer.fill(40,80,40,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,2)
                        if(this.trash>=this.base.trash){
                            layer.fill(80,75,70,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                        }else{
                            layer.fill(30,40,30,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                            if(this.trash>0){
                                layer.fill(80,75,70,this.fade.main)
                                layer.rect(0,0,this.base.width-12,this.base.height-12,6)
                            }
                        }
                    break
                    case 'Trash Bin':
                        layer.fill(40,80,40,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,2)
                        if(this.trash>=this.base.trash){
                            layer.fill(80,75,70,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                        }else{
                            layer.fill(30,40,30,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                            if(this.trash>0){
                                layer.fill(80,75,70,this.fade.main)
                                layer.rect(0,0,this.base.width-15,this.base.height-15,6)
                            }
                        }
                    break
                    case 'Large Trash Bin':
                        layer.fill(20,60,20,this.fade.main)
                        layer.rect(0,0,this.base.width+4,this.base.height-8,4)
                        layer.rect(0,0,this.base.width-8,this.base.height+4,4)
                        layer.fill(40,80,40,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,2)
                        if(this.trash>=this.base.trash){
                            layer.fill(80,75,70,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                        }else{
                            layer.fill(30,40,30,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                            if(this.trash>0){
                                layer.fill(80,75,70,this.fade.main)
                                layer.rect(0,0,this.base.width-15,this.base.height-15,6)
                            }
                        }
                    break
                    case 'Compost Bin':
                        layer.fill(160,100,40,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3,3)
                        layer.fill(40,80,40,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height,2)
                        if(this.trash>=this.base.trash){
                            layer.fill(80,75,70,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                        }else{
                            layer.fill(30,40,30,this.fade.main)
                            layer.rect(0,0,this.base.width-5,this.base.height-5,2)
                            if(this.trash>0){
                                layer.fill(80,75,70,this.fade.main)
                                layer.rect(0,0,this.base.width-15,this.base.height-15,6)
                            }
                        }
                    break
                    case 'Starter Hob':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(180,this.fade.main)
                        layer.rect(0,0,32,32,10)
                        layer.noFill()
                        layer.stroke(40,this.fade.main)
                        layer.strokeWeight(2)
                        layer.ellipse(0,0,22)
                        layer.arc(0,0,12,12,-120,15)
                        layer.arc(0,0,12,12,60,195)
                        layer.line(-6,0,-11,0)
                        layer.line(0,-6,0,-11)
                        layer.line(6,0,11,0)
                        layer.line(0,6,0,11)
                        layer.line(-8,-8,-10,-10)
                        layer.line(-8,8,-10.5,10.5)
                        layer.line(8,-8,10.25,-10.25)
                        layer.line(8,8,9.5,9.5)
                    break
                    case 'Hob':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(180,this.fade.main)
                        layer.rect(0,0,32,32,10)
                        layer.noFill()
                        layer.stroke(40,this.fade.main)
                        layer.strokeWeight(2)
                        layer.ellipse(0,0,22)
                        layer.ellipse(0,0,12)
                        layer.line(-6,0,-11,0)
                        layer.line(0,-6,0,-11)
                        layer.line(6,0,11,0)
                        layer.line(0,6,0,11)
                        layer.line(-8,-8,-10.5,-10.5)
                        layer.line(-8,8,-10.5,10.5)
                        layer.line(8,-8,10.5,-10.5)
                        layer.line(8,8,10.5,10.5)
                    break
                    case 'Safe Hob':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(180,this.fade.main)
                        layer.rect(0,0,32,32,10)
                        layer.noFill()
                        layer.stroke(40,this.fade.main)
                        layer.strokeWeight(2)
                        layer.ellipse(0,0,22)
                        layer.ellipse(0,0,12)
                        layer.line(-8,-8,-10.5,-10.5)
                        layer.line(-8,8,-10.5,10.5)
                        layer.line(8,-8,10.5,-10.5)
                        layer.line(8,8,10.5,10.5)
                        layer.stroke(80,this.fade.main)
                        layer.strokeWeight(4)
                        for(let a=0,la=8;a<la;a++){
                            layer.point(8.5*lsin(a/la*360),8.5*lcos(a/la*360))
                        }
                        layer.stroke(60,240,60,this.fade.main)
                        layer.strokeWeight(2.5)
                        for(let a=0,la=8;a<la;a++){
                            layer.point(8.5*lsin(a/la*360),8.5*lcos(a/la*360))
                        }
                    break
                    case 'Fast Hob':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(180,this.fade.main)
                        layer.rect(0,0,32,32,10)
                        layer.noFill()
                        layer.strokeWeight(2)
                        layer.stroke(240,60,60,this.fade.main)
                        layer.line(-11,0,-13,0)
                        layer.line(11,0,13,0)
                        layer.line(0,-11,0,-13)
                        layer.line(0,11,0,13)
                        layer.ellipse(0,0,2)
                        layer.stroke(40,this.fade.main)
                        layer.ellipse(0,0,22)
                        layer.ellipse(0,0,12)
                        layer.line(-6,0,-11,0)
                        layer.line(0,-6,0,-11)
                        layer.line(6,0,11,0)
                        layer.line(0,6,0,11)
                        layer.line(-8,-8,-10.5,-10.5)
                        layer.line(-8,8,-10.5,10.5)
                        layer.line(8,-8,10.5,-10.5)
                        layer.line(8,8,10.5,10.5)
                    break
                    case 'Override Hob':
                        layer.fill(140,95,80,this.fade.main)
                        layer.rect(0,0,this.base.width+3,this.base.height+3)
                        layer.fill(180,125,100,this.fade.main)
                        layer.rect(0,0,this.base.width-3,this.base.height-3)
                        layer.fill(180,this.fade.main)
                        layer.rect(0,0,32,32,10)
                        layer.noFill()
                        layer.stroke(40,this.fade.main)
                        layer.strokeWeight(2)
                        layer.ellipse(0,0,22)
                        layer.ellipse(0,0,12)
                        layer.line(-6,0,-11,0)
                        layer.line(0,-6,0,-11)
                        layer.line(6,0,11,0)
                        layer.line(0,6,0,11)
                        layer.line(-8,-8,-10.5,-10.5)
                        layer.line(-8,8,-10.5,10.5)
                        layer.line(8,-8,10.5,-10.5)
                        layer.line(8,8,10.5,10.5)
                        layer.stroke(240,200,40,this.fade.main)
                        layer.strokeWeight(2.5)
                        layer.line(-16,-6,-16,6)
                        layer.line(16,-6,16,6)
                        layer.line(-6,-16,6,-16)
                        layer.line(-6,16,6,16)
                        layer.stroke(240,80,40,this.fade.main)
                        layer.line(-16,-1,-16,1)
                        layer.line(16,-1,16,1)
                        layer.line(-1,-16,1,-16)
                        layer.line(-1,16,1,16)
                    break
                    case 'Fish':
                        layer.fill(50,150,200,this.fade.main)
                        layer.rect(0,0,this.base.width,this.base.height)
                        layer.fill(25,75,100,this.fade.main)
                        layer.rect(0,0,this.base.width-6,this.base.height-6)
                        layer.fill(125,225,250,this.fade.main)
                        layer.ellipse(0,0,this.base.width-15,this.base.height-15)
                        layer.fill(100,125,200,this.fade.main)
                        layer.arc(7,0,12,12,15,345)
                        layer.triangle(7,-6,7,6,-11,0)
                        layer.quad(-5,0,-14,-5,-11,0,-14,5)
                        layer.fill(25,50,100,this.fade.main)
                        layer.ellipse(9,-3,3)
                    break
                }
                if(this.name!='Prep Station'&&this.name!='Frozen Prep Station'&&this.item!=-1){
                    this.item.display(0)
                }
                layer.pop()
            break
            case 1:
                layer.push()
                layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
                layer.noStroke()
                switch(this.name){
                    case 'Crate':
                        if(this.animSet.contain>0){
                            layer.fill(225,this.fade.main*this.animSet.contain)
                            layer.rect(0,-24,4*types.wall[this.contain].name.length+16,12,4)
                            layer.fill(0,this.fade.main*this.animSet.contain)
                            layer.textSize(10)
                            layer.text(types.wall[this.contain].name,0,-24)
                        }
                    break
                    case 'Blueprint':
                        if(this.animSet.contain>0){
                            let len=numLength(types.wall[this.contain].cost)
                            layer.fill(225,this.fade.main*this.animSet.contain)
                            layer.rect(0,-27,4*len+24,12,4)
                            layer.fill(0,this.fade.main*this.animSet.contain)
                            layer.textSize(10)
                            layer.text(types.wall[this.contain].cost,-4,-27)
                            layer.stroke(0,this.fade.main*this.animSet.contain)
                            layer.strokeWeight(1)
                            layer.noFill()
                            layer.ellipse(2*len+6,-27,9)
                            layer.ellipse(2*len+6,-27,6)
                        }
                        if(this.item!=1){
                            this.item.displayProcess(8)
                        }
                    break
                    case 'Option':
                        if(this.animSet.contain>0){
                            switch(this.contain){
                                case 1:
                                    let len=numLength(this.parent.reroll.cost)
                                    layer.fill(225,this.fade.main*this.animSet.contain)
                                    layer.rect(0,-27,4*len+24,12,4)
                                    layer.fill(0,this.fade.main*this.animSet.contain)
                                    layer.textSize(10)
                                    layer.text(this.parent.reroll.cost,-4,-27)
                                    layer.stroke(0,this.fade.main*this.animSet.contain)
                                    layer.strokeWeight(1)   
                                    layer.noFill()
                                    layer.ellipse(2*len+6,-27,9)
                                    layer.ellipse(2*len+6,-27,6)
                                break
                            }
                        }
                        if(this.item!=-1){
                            this.item.displayProcess(8)
                        }
                    break
                    case 'Stack Station':
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.items.length+1,-16,-16)
                    break
                    case 'Silo':
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.items,-16,-16)
                    break
                    case 'Starter Plates': case 'Plates': case 'Large Plates': case 'Dish Rack':
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.plates,-16,-16)
                    break
                    case 'Starter Trash Bin': case 'Trash Bin': case 'Large Trash Bin': case 'Compost Bin':
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.trash,-16,-16)
                    break
                    case 'Starter Sink':
                        layer.fill(220,this.fade.main)
                        layer.rect(0,-12,4,9,3)
                    break
                    case 'Sink': case 'Soaking Sink':
                        layer.fill(220,this.fade.main)
                        layer.rect(0,-12,5,10,3)
                    break
                    case 'Wash Basin':
                        layer.fill(220,this.fade.main)
                        layer.rect(0,-15,5,10,3)
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.plates,-16,-16)
                    break
                    case 'Power Sink':
                        layer.fill(220,this.fade.main)
                        layer.rect(0,-11,9,12,3)
                    break
                    case 'Dining Table':
                        layer.fill(225,this.fade.main*this.animSet.num)
                        layer.rect(-16,-16,12,12,4)
                        layer.fill(0,this.fade.main*this.animSet.num)
                        layer.textSize(10)
                        layer.text(this.plates,-16,-16)
                        if(this.animSet.phase[2]>0||this.animSet.phase[3]>0||this.animSet.phase[4]>0){
                            layer.fill(40,this.fade.main*max(max(this.animSet.phase[2],this.animSet.phase[3]),this.animSet.phase[4]))
                            layer.rect(0,-8,36,8,3)
                            layer.fill(20,240,20,this.fade.main*max(max(this.animSet.phase[2],this.animSet.phase[3]),this.animSet.phase[4]))
                            layer.rect(-16.5*(1-this.patience.main/this.patience.base),-8,33*this.patience.main/this.patience.base,5,2)
                        }
                    break
                }
                if(this.item!=-1){
                    this.item.display(1)
                }
                layer.pop()
            break
        }
    }
    update(){
        super.update()
        this.velocity.x=0
        this.velocity.y=0
        let visible
        switch(this.name){
            case 'Crate':
                visible=false
                for(let a=0,la=this.parent.entities.players.length;a<la;a++){
                    if(dist(this.position.x,this.position.y,this.parent.entities.players[a].position.x,this.parent.entities.players[a].position.y)<80){
                        visible=true
                    }
                }
                this.animSet.contain=smoothAnim(this.animSet.contain,visible,0,1,5)
            break
            case 'Blueprint': case 'Option':
                visible=false
                for(let a=0,la=this.parent.entities.players.length;a<la;a++){
                    if(dist(this.position.x,this.position.y,this.parent.entities.players[a].position.x,this.parent.entities.players[a].position.y)<80){
                        visible=true
                    }
                }
                this.animSet.contain=smoothAnim(this.animSet.contain,visible&&!this.getItemProcessVisible(),0,1,5)
            break
            case 'Stack Station':
                for(let a=0,la=this.items.length;a<la;a++){
                    this.items[a].parent=this
                    this.items[a].parentClass=1
                    this.items[a].update()
                }
                this.animSet.num=smoothAnim(this.animSet.num,this.item!=-1,0,1,5)
            break
            case 'Silo':
                this.animSet.num=smoothAnim(this.animSet.num,this.items>0,0,1,5)
            break
            case 'Starter Plates': case 'Plates': case 'Large Plates': case 'Dish Rack':
            case 'Wash Basin':
                this.animSet.num=smoothAnim(this.animSet.num,this.plates>0,0,1,5)
            break
            case 'Starter Trash Bin': case 'Trash Bin': case 'Large Trash Bin': case 'Compost Bin':
                this.animSet.num=smoothAnim(this.animSet.num,this.trash>0,0,1,5)
            break
            case 'Starter Hob': case 'Hob': case 'Fast Hob': case 'Override Hob':
                if(this.item!=-1){
                    let result=this.item.generalProcess([1,9],this.speed)
                    for(let a=0,la=result.length;a<la;a++){
                        switch(result[a].type){
                            case 1: case 9:
                                this.item=this.generateItem(result[a].result)
                            break
                        }
                    }
                }
            break
            case 'Safe Hob':
                if(this.item!=-1){
                    let result=this.item.generalProcess([1],this.speed)
                    for(let a=0,la=result.length;a<la;a++){
                        switch(result[a].type){
                            case 1:
                                this.item=this.generateItem(result[a].result)
                            break
                        }
                    }
                }
            break
            case 'Soaking Sink':
                if(this.item!=-1){
                    let result=this.item.generalProcess([4],0.25)
                    for(let a=0,la=result.length;a<la;a++){
                        switch(result[a].type){
                            case 4:
                                this.item=this.generateItem(result[a].result)
                            break
                        }
                    }
                }
            break
            case 'Dining Table':
                this.animSet.num=smoothAnim(this.animSet.num,this.plates>0,0,1,5)
                for(let a=0,la=this.animSet.phase.length;a<la;a++){
                    this.animSet.phase[a]=smoothAnim(this.animSet.phase[a],this.operation.phase==a&&this.occupied,0,1,5)
                }
                if(this.occupied){
                    let valid
                    switch(this.operation.phase){
                        case 0:
                            valid=true
                            for(let a=0,la=this.occupants.length;a<la;a++){
                                if(distPos(this,this.occupants[a])>45){
                                    valid=false
                                }
                            }
                            if(valid){
                                this.operation.phase=1
                                this.operation.timer=0
                            }
                        break
                        case 1:
                            this.operation.timer++
                            if(this.operation.timer>120){
                                this.operation.phase=2
                                this.patience.main=3600
                                this.patience.base=3600
                            }
                        break
                        case 2:
                            if(this.patience.main>0){
                                this.patience.main--
                            }else{
                                this.occupied=false
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    this.occupants[a].fade.trigger=false
                                }
                                this.operation.phase=0
                                this.parent.operation.dayManager.failed(this.occupants.length)
                            }
                        break
                        case 3:
                            for(let a=0,la=this.occupants.length;a<la;a++){
                                if(this.occupants[a].item!=-1||this.occupants[a].side!=-1){
                                    this.operation.phase=4
                                    this.operation.timer=0
                                    this.operation.timerCap=0
                                    this.patience.main=900
                                    this.patience.base=900
                                    a=la
                                }
                            }
                            if(this.patience.main>0){
                                this.patience.main--
                            }else{
                                this.occupied=false
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    this.occupants[a].fade.trigger=false
                                }
                                this.operation.phase=0
                                this.parent.operation.dayManager.failed(this.occupants.length)
                            }
                        break
                        case 4:
                            valid=true
                            for(let a=0,la=this.occupants.length;a<la;a++){
                                if(this.occupants[a].order.length>0){
                                    valid=false
                                }
                            }
                            if(valid){
                                this.operation.phase=5
                                this.operation.timer=0
                                this.operation.timerCap=0
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    if(this.occupants[a].item!=-1){
                                        for(let b=0,lb=this.occupants[a].item.process.length;b<lb;b++){
                                            if(this.occupants[a].item.process[b].type==7){
                                                this.operation.timerCap=max(this.operation.timerCap,this.occupants[a].item.process[b].timer)
                                            }
                                        }
                                    }
                                    if(this.occupants[a].side!=-1){
                                        for(let b=0,lb=this.occupants[a].item.process.length;b<lb;b++){
                                            if(this.occupants[a].item.process[b].type==7){
                                                this.operation.timerCap=max(this.operation.timerCap,this.occupants[a].item.process[b].timer)
                                            }
                                        }
                                    }
                                }
                            }
                            if(this.patience.main>0){
                                this.patience.main--
                            }else{
                                this.occupied=false
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    this.occupants[a].fade.trigger=false
                                }
                                this.operation.phase=0
                                this.parent.operation.dayManager.failed(this.occupants.length)
                            }
                        break
                        case 5:
                            this.operation.timer++
                            if(this.operation.timer>this.operation.timerCap){
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    if(this.occupants[a].item!=-1){
                                        for(let b=0,lb=this.occupants[a].item.process.length;b<lb;b++){
                                            switch(this.occupants[a].item.process[b].result){
                                                case 'Dirty Plate':
                                                    if(this.item==-1){
                                                        this.item=this.generateItem('Dirty Plate')
                                                    }
                                                    this.plates++
                                                break
                                            }
                                        }
                                        this.occupants[a].item=-1
                                    }
                                    if(this.occupants[a].side!=-1){
                                        for(let b=0,lb=this.occupants[a].item.process.length;b<lb;b++){
                                            switch(this.occupants[a].item.process[b].result){
                                                case 'Dirty Plate':
                                                    if(this.item==-1){
                                                        this.item=this.generateItem('Dirty Plate')
                                                    }
                                                    this.plates++
                                                break
                                            }
                                        }
                                        this.occupants[a].side=-1
                                    }
                                }
                                this.orderPhase++
                                if(this.orderPhase==0&&this.parent.operation.dishManager.obj[1].length==0){
                                    this.orderPhase=1
                                }
                                if(this.orderPhase==1&&this.parent.operation.dishManager.obj[0].length==0){
                                    this.orderPhase=2
                                }
                                if(this.orderPhase==2&&this.parent.operation.dishManager.obj[3].length==0){
                                    this.orderPhase=3
                                }
                                if(this.orderPhase>=3){
                                    this.occupied=false
                                    for(let a=0,la=this.occupants.length;a<la;a++){
                                        this.occupants[a].fade.trigger=false
                                    }
                                    this.operation.phase=0
                                }else{
                                    this.operation.phase=1
                                }
                            }
                        break
                    }
                }
            break
        }
        this.direction.main=spinControl(this.direction.main)
        this.direction.goal=spinControl(this.direction.goal)
        this.direction.main=spinDirection(this.direction.main,this.direction.goal,15)
        if(this.item!=-1){
            this.item.parent=this
            this.item.parentClass=1
            this.item.update()
        }
        for(let a=0,la=this.colliders.main.length;a<la;a++){
            for(let b=0,lb=this.colliders.main[a][0].length;b<lb;b++){
                this.collide(this.colliders.main[a][1],this.colliders.main[a][0][b])
            }
        }
        if(this.removeMark){
            this.fade.trigger=false
            if(this.fade.main<=0){
                this.remove=true
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
    grabEffect(player){
        if(!this.removeMark){
            switch(this.parent.operation.dayManager.phase){
                case 0:
                    switch(this.name){
                        case 'Crate':
                            if(player.item==-1){
                                let send=this.generateItem('Crate')
                                send.contain=this.contain
                                player.item=send
                                this.parent.emptySpot(this)
                                this.remove=true
                                return true
                            }
                        break
                        case 'Blueprint':
                            if(player.item==-1){
                                let send=this.generateItem('Blueprint')
                                send.contain=this.contain
                                player.item=send
                                this.parent.emptySpot(this)
                                this.remove=true
                                return true
                            }
                        break
                        case 'Blueprint Cabinet':
                            if(player.item!=-1&&player.item.name=='Blueprint'&&this.contain==-1){
                                this.contain=player.item.contain
                                player.item=-1
                            }else if(player.item==-1&&this.contain!=-1){
                                let send=this.generateItem('Blueprint')
                                send.contain=this.contain
                                player.item=send
                                this.contain=-1
                            }
                        break
                        default:
                            if(this.edit&&player.item==-1){
                                let send=this.generateItem('Crate')
                                send.contain=this.type
                                player.item=send
                                this.parent.emptySpot(this)
                                this.remove=true
                                return true
                            }
                        break
                    }
                break
                case 1:
                    switch(this.name){
                        case 'Starter Plates': case 'Plates': case 'Large Plates':
                            if(player.item!=-1&&player.item.name=='Plate'&&this.plates<this.base.plates){
                                if(this.plates==0){
                                    this.item=this.generateItem('Plate')
                                }
                                this.plates++
                                player.item=-1
                                return true
                            }else if(this.plates>0){
                                let temp=this.generateItem('Plate')
                                if(player.item==-1){
                                    player.item=temp
                                    this.plates--
                                }else{
                                    if(player.item.attemptCombine(temp)){
                                        this.plates--
                                    }
                                }
                                if(this.plates==0){
                                    this.item=-1
                                }
                                return true
                            }
                        break
                        case 'Dish Rack':
                            if(player.item!=-1&&player.item.name=='Dirty Plate'&&this.plates<this.base.plates){
                                if(this.plates==0){
                                    this.item=this.generateItem('Dirty Plate')
                                }
                                this.plates++
                                player.item=-1
                                return true
                            }else if(this.plates>0){
                                let temp=this.generateItem('Dirty Plate')
                                if(player.item==-1){
                                    player.item=temp
                                    this.plates--
                                }else{
                                    if(player.item.attemptCombine(temp)){
                                        this.plates--
                                    }
                                }
                                if(this.plates==0){
                                    this.item=-1
                                }
                                return true
                            }
                        break
                        case 'Counter': case 'Freezer': case 'Cutting Board': case 'Rolling Board': case 'Levitating Counter':
                        case 'Starter Hob': case 'Hob': case 'Safe Hob': case 'Fast Hob': case 'Override Hob':
                            if(player.item!=-1){
                                if(this.item!=-1){
                                    if(this.item.attemptCombine(player.item)){
                                        player.item=-1
                                        return true
                                    }
                                }else if(this.item==-1){
                                    this.item=player.item
                                    player.item=-1
                                    return true
                                }
                            }else if(player.item==-1){
                                if(this.item!=-1){
                                    player.item=this.item
                                    this.item=-1
                                    return true
                                }
                            }
                        break
                        case 'Prep Station': case 'Frozen Prep Station': case 'Silo':
                            if(player.item!=-1){
                                if(this.item!=-1){
                                    if(player.item.attemptCombine(this.item)){
                                        this.items--
                                        if(this.items==0){
                                            this.item=-1
                                        }
                                        return true
                                    }else if(player.item.type==this.item.type&&this.items<this.base.items){
                                        player.item=-1
                                        this.items++
                                        return true
                                    }
                                }else if(this.item==-1&&player.item.component){
                                    this.item=player.item
                                    player.item=-1
                                    this.items=1
                                    return true
                                }
                            }else if(player.item==-1){
                                if(this.item!=-1){
                                    this.items--
                                    if(this.items==0){
                                        player.item=this.item
                                        this.item=-1
                                    }else{
                                        player.item=this.copySelfItem()
                                    }
                                    return true
                                }
                            }
                        break
                        case 'Stack Station':
                            if(player.item!=-1){
                                if(this.item!=-1){
                                    if(this.item.attemptCombine(player.item)){
                                        player.item=-1
                                        return true
                                    }else if(this.items.length<this.base.items-1){
                                        this.items.push(this.item)
                                        this.item=player.item
                                        player.item=-1
                                        return true
                                    }
                                }else if(this.item==-1){
                                    this.item=player.item
                                    player.item=-1
                                    return true
                                }
                            }else if(player.item==-1){
                                if(this.item!=-1){
                                    player.item=this.item
                                    this.item=last(this.items)
                                    this.items.splice(this.items.length-1,1)
                                    return true
                                }
                            }
                        break
                        case 'Starter Sink': case 'Sink':  case 'Soaking Sink': case 'Power Sink':
                            if(player.item!=-1){
                                if(!player.item.checkUtility('Water')){
                                    if(this.item!=-1){
                                        if(this.item.attemptCombine(player.item)){
                                            player.item=-1
                                            return true
                                        }
                                    }else if(this.item==-1){
                                        this.item=player.item
                                        player.item=-1
                                        return true
                                    }
                                }
                            }else if(player.item==-1){
                                if(this.item!=-1){
                                    player.item=this.item
                                    this.item=-1
                                    return true
                                }
                            }
                        break
                        case 'Wash Basin':
                            if(player.item!=-1){
                                if(this.item!=-1){
                                    if(player.item.attemptCombine(this.item)){
                                        if(this.plates>1){
                                            this.plates--
                                        }else{
                                            this.item=-1
                                            this.plates=0
                                        }
                                        return true
                                    }else if(player.item.name==this.item.name&&this.item.name=='Dirty Plate'&&this.plates<this.base.plates){
                                        player.item=-1
                                        this.plates++
                                        return true
                                    }
                                }else if(this.item==-1){
                                    this.item=player.item
                                    player.item=-1
                                    if(this.item.name=='Dirty Plate'){
                                        this.plates=1
                                        this.washed=true
                                    }
                                    return true
                                }
                            }else{
                                if(this.plates>1){
                                    let temp=this.generateItemType(this.item.type)
                                    if(player.item==-1){
                                        player.item=temp
                                        this.plates--
                                    }else{
                                        if(player.item.attemptCombine(temp)){
                                            this.plates--
                                        }
                                    }
                                    return true
                                }else if(this.item!=-1){
                                    player.item=this.item
                                    this.item=-1
                                    this.plates=0
                                    return true
                                }
                            }
                        break
                        case 'Starter Trash Bin': case 'Trash Bin': case 'Large Trash Bin':
                            if(player.item!=-1&&this.trash<this.base.trash&&player.item.trashable){
                                if(!player.item.checkUtility('Trash')){
                                    player.item=-1
                                }
                                this.trash++
                                return true
                            }else if(player.item==-1&&this.trash>0){
                                player.item=this.generateItem('Trash Bag')
                                this.trash=0
                            }
                        break
                        case 'Compost Bin':
                            if(player.item!=-1&&this.trash<this.base.trash&&player.item.trashable){
                                if(!player.item.checkUtility('Trash')){
                                    player.item=-1
                                }
                                this.trash++
                                return true
                            }else if(player.item==-1&&this.trash>0){
                                player.item=this.generateItem('Compost Bag')
                                this.trash=0
                            }
                        break
                        case 'Trash Can':
                            if(player.item!=-1){
                                if(!player.item.checkUtility('Trash')){
                                    player.item=-1
                                }
                                return true
                            }
                        break
                        case 'Dining Table':
                            if(player.item!=-1){
                                if(this.operation.phase!=5){
                                    if(this.item!=-1){
                                        if(this.item.attemptCombine(player.item)){
                                            player.item=-1
                                            return true
                                        }
                                    }else if(this.item==-1){
                                        this.item=player.item
                                        player.item=-1
                                        return true
                                    }
                                }
                            }else if(player.item==-1){
                                if(this.item!=-1){
                                    player.item=this.item
                                    if(this.item.name=='Dirty Plate'){
                                        this.plates--
                                        if(this.plates>0){
                                            this.item=this.generateItem('Dirty Plate')
                                        }else{
                                            this.item=-1
                                        }
                                    }else{
                                        this.item=-1
                                    }
                                    return true
                                }else if(player.follower!=-1&&!this.occupied){
                                    this.occupy(player.follower)
                                    player.follower=-1
                                }
                            }
                        break
                    }
                    if(this.spec.includes(1)){
                        let temp=this.generateItem(types.wall[this.type].provide)
                        if(player.item==-1){
                            player.item=temp
                            return true
                        }else{
                            if(player.item.attemptCombine(temp)){
                                return true
                            }else if(player.item.type==temp.type){
                                player.item=-1
                                return true
                            }
                        }
                    }
                break
            }
        }
        return false
    }
    processEffect(player){
        if(!this.removeMark){
            switch(this.parent.operation.dayManager.phase){
                case 0:
                    switch(this.name){
                        case 'Blueprint':
                            if(this.item!=-1){
                                if(this.parent.operation.dayManager.hasCurrency(types.wall[this.contain].cost)){
                                    let result=this.item.generalProcess([8],1)
                                    for(let a=0,la=result.length;a<la;a++){
                                        switch(result[a].type){
                                            case 8:
                                                let send=this.generateItem('Crate')
                                                send.contain=this.contain
                                                player.item=send
                                                this.parent.emptySpot(this)
                                                this.remove=true
                                                this.parent.operation.dayManager.loseCurrency(types.wall[this.contain].cost)
                                            break
                                        }
                                    }
                                    return true
                                }
                            }
                        break
                        case 'Option':
                            if(this.item!=-1){
                                if(this.parent.operation.dayManager.hasCurrency([0,this.parent.reroll.cost][this.contain])){
                                    let result=this.item.generalProcess([8],1)
                                    for(let a=0,la=result.length;a<la;a++){
                                        switch(result[a].type){
                                            case 8:
                                                switch(this.contain){
                                                    case 0:
                                                        this.parent.operation.dayManager.beginDay()
                                                    break
                                                    case 1:
                                                        this.parent.operation.dayManager.loseCurrency(this.parent.reroll.cost)
                                                        this.parent.reroll.cost+=10
                                                        this.parent.rerollBlueprints()
                                                    break
                                                }
                                            break
                                        }
                                    }
                                    return true
                                }
                            }
                        break
                    }
                break
                case 1:
                    switch(this.name){
                        case 'Starter Sink': case 'Sink': case 'Soaking Sink': case 'Wash Basin': case 'Power Sink':
                            if(this.item!=-1){
                                this.item.moved=false
                                let result=this.item.generalProcess([4],this.speed)
                                for(let a=0,la=result.length;a<la;a++){
                                    switch(result[a].type){
                                        case 4:
                                            this.item=this.generateItem(result[a].result)
                                        break
                                    }
                                }
                                if(this.item.moved){
                                    return true
                                }
                            }
                        break
                        case 'Counter': case 'Freezer': case 'Cutting Board': case 'Rolling Board': case 'Levitating Counter':
                            if(this.item!=-1){
                                this.item.moved=false
                                let result=this.item.generalProcess([2],this.speed[0])
                                for(let a=0,la=result.length;a<la;a++){
                                    switch(result[a].type){
                                        case 2:
                                            this.item=this.generateItem(result[a].result)
                                        break
                                    }
                                }
                                result=this.item.generalProcess([3],this.speed[1])
                                for(let a=0,la=result.length;a<la;a++){
                                    switch(result[a].type){
                                        case 2:
                                            this.item=this.generateItem(result[a].result)
                                        break
                                    }
                                }
                                if(this.item.moved){
                                    return true
                                }
                            }
                        break
                        case 'Override Hob':
                            if(this.item!=-1){
                                this.item.moved=false
                                let result=this.item.generalProcess([1,9],this.speed)
                                for(let a=0,la=result.length;a<la;a++){
                                    switch(result[a].type){
                                        case 1: case 9:
                                            this.item=this.generateItem(result[a].result)
                                        break
                                    }
                                }
                                if(this.item.moved){
                                    return true
                                }
                            }
                        break
                    }
                break
            }
        }
        return false
    }
    interactEffect(player){
        if(!this.removeMark){
            switch(this.parent.operation.dayManager.phase){
                case 0:
                    switch(this.name){
                        default:
                            if(this.edit&&player.item==-1){
                                this.rotate()
                            }
                        break
                    }
                break
                case 1:
                    switch(this.name){
                        case 'Starter Sink': case 'Sink': case 'Soaking Sink': case 'Wash Basin': case 'Power Sink':
                            if(player.item!=-1){
                                player.item.checkUtility('Water')
                            }
                        break
                        case 'Starter Trash Bin': case 'Trash Bin': case 'Large Trash Bin': case 'Trash Can': case 'Compost Bin':
                            if(player.item!=-1&&this.trash<this.base.trash){
                                if(player.item.checkUtility('Trash')){
                                    this.trash++
                                }
                            }
                        break
                        case 'Dining Table':
                            if(!this.occupied){
                                if(this.item==-1&&player.follower!=-1&&!this.occupied){
                                    this.occupy(player.follower)
                                    player.follower=-1
                                }
                            }else if(this.operation.phase==2){
                                this.operation.phase=3
                                this.patience.main=5400
                                this.patience.base=5400
                                let chosen=floor(random(0,this.occupants.length))
                                for(let a=0,la=this.occupants.length;a<la;a++){
                                    this.occupants[a].makeOrder(this.orderPhase,this.parent.operation.dishManager.obj,a==chosen)
                                }
                            }
                        break
                    }
                break
            }
        }
        return false
    }
    collide(type,obj){
        switch(type){
            case 0:
                switch(this.name){
                    case 'Trash Can':
                        if(distPos(this,obj)<this.radius+obj.radius){
                            let dir=dirPos(this,obj)
                            let over=this.radius+obj.radius-distPos(this,obj)
                            obj.position.x+=over*lsin(dir)
                            obj.position.y+=over*lcos(dir)
                        }
                    break
                    default:
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
            break
        }
    }
}