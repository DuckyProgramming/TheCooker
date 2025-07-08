class player extends partisan{
    constructor(layer,parent,index,x,y,id,cosmetic){
        super(layer,index,x,y,{main:0,trigger:true,speed:5})
        this.parent=parent
        this.id=id
        this.cosmetic=cosmetic
        this.active=true
        this.colliders={main:[[parent.entities.players,0]]}
        this.setupGraphics()
        this.setupValues()
    }
    setupValues(){
        this.size=1
        this.radius=12.5
        this.timer.dizzy=0
        this.timer.interact=0
        this.infoAnim={dizzy:0}
        this.controlDirection={x:0,y:0}
        this.animSet.hold=0
        this.item=-1
        this.handLen=0
        this.follower=-1
        this.speed=0.4
        if(this.id==-1){
            this.side=-1
            this.follow=-1
            this.mode=0
            this.order=[]
            this.paying=[]
            this.angle=0
            this.timer.angle=0
        }
    }
    scale(value){
        this.size*=value
        this.radius*=value
    }
    copyColor(color){
        return {eye:{back:color.eye.back},beak:{main:color.beak.main,mouth:color.beak.mouth,nostril:color.beak.nostril},skin:{head:color.skin.head,body:color.skin.body,legs:color.skin.legs,arms:color.skin.arms}}
    }
    setupGraphics(){
        this.direction={main:0,goal:0}
        this.skin={
            body:{fade:1,display:true,level:-9.5},
            head:{fade:1,display:true,level:-19},
            legs:[
                {fade:1,display:true,anim:{theta:24,phi:90},length:5,points:{set:{x:1.5,y:-7.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}},
                {fade:1,display:true,anim:{theta:24,phi:-90},length:5,points:{set:{x:1.5,y:-7.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}}
            ],arms:[
                {fade:1,display:true,anim:{theta:54,phi:90},length:12,points:{set:{x:1.5,y:-12.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}},
                {fade:1,display:true,anim:{theta:54,phi:-90},length:12,points:{set:{x:1.5,y:-12.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}}
            ]
        }
        this.face={
            beak:{
                main:{fade:1,display:true,level:-16.5},
                mouth:{fade:1,display:true,level:-16.5},
                nostril:{fade:1,display:true,level:-17.25}
            },eye:[
                {fade:1,display:true,anim:0,spin:-18,level:-20},
                {fade:1,display:true,anim:0,spin:18,level:-20}
            ]
        }
        this.color=types.cosmetic.color[this.cosmetic.color]
        this.base.color={eye:{back:this.color.eye.back},beak:{main:this.color.beak.main,mouth:this.color.beak.mouth,nostril:this.color.beak.nostril},skin:{head:this.color.skin.head,body:this.color.skin.body,legs:this.color.skin.legs,arms:this.color.skin.arms}}
        this.animSet={
            main:{loop:0,flip:0},
            process:{loop:0,flip:0},
            interact:{loop:0},
            attack:{loop:0},
        }
    }
    calculateParts(){
        for(let a=0,la=2;a<la;a++){
            for(let b=0,lb=2;b<lb;b++){
                let subject=this.skin[['legs','arms'][b]][a]
                subject.points.start.x=subject.points.set.x*lsin(subject.anim.phi+this.direction.main)-subject.points.set.z*lcos(subject.anim.phi+this.direction.main)
                subject.points.start.y=subject.points.set.y
                subject.points.start.z=subject.points.set.x*lcos(subject.anim.phi+this.direction.main)+subject.points.set.z*lsin(subject.anim.phi+this.direction.main)
                subject.points.end.x=subject.points.start.x+lsin(subject.anim.theta)*lsin(subject.anim.phi+this.direction.main)*subject.length
                subject.points.end.y=subject.points.start.y+lcos(subject.anim.theta)*subject.length
                subject.points.end.z=subject.points.start.z+lsin(subject.anim.theta)*lcos(subject.anim.phi+this.direction.main)*subject.length
            }
        }
    }
    runAnim(type,rate){
        switch(type){
            case 0:
                this.animSet.main.loop+=rate
            break
            case 1:
                this.animSet.process.loop+=rate
            break
            case 2:
                this.animSet.interact.loop+=rate
            break
            case 3:
                this.animSet.attack.loop+=rate
            break
        }
    }
    mainAnim(){
        for(let a=0,la=2;a<la;a++){
            this.skin.legs[a].anim.phi=90*(1-a*2)+lsin((this.animSet.main.loop+this.animSet.main.flip*15)*12)*75
            this.skin.arms[a].anim.phi=90*(1-a*2)*(1-this.animSet.hold*0.6)+lsin((this.animSet.main.loop+this.animSet.main.flip*15)*12)*60*(1-this.animSet.hold)+lsin((this.animSet.process.loop+this.animSet.process.flip*15)*12)*48*(1-this.animSet.hold*0.8)+(a==1?abs(lsin(this.animSet.attack.loop*12))*60:0)
        }
    }
    findHandLen(){
        this.hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
        for(let a=0,la=this.parent.entities.walls[0].length;a<la;a++){
            if(this.parent.entities.walls[0][a].name=='High Wall'){
                let obj=this.parent.entities.walls[0][a]
                for(let b=0,lb=obj.boundary.length;b<lb;b++){
                    if(intersect(this.position,this.hand.position,obj.boundary[b][0],obj.boundary[b][1])){
                        let point=intersectKey(this.position,this.hand.position,obj.boundary[b][0],obj.boundary[b][1])
                        if(dist(this.position.x,this.position.y,point.x,point.y)<this.handLen){
                            this.handLen=dist(this.position.x,this.position.y,point.x,point.y)
                            this.hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
                        }
                    }
                }
            }
        }
    }
    cascadeMode(mode){
        this.mode=mode
        if(this.follower!=-1&&this.follower.id==this.id&&this.follower.mode!=mode){
            this.follower.cascadeMode(mode)
        }
        if(this.follow!=-1&&this.follow.id==this.id&&this.follow.mode!=mode){
            this.follow.cascadeMode(mode)
        }
    }
    makeOrder(orderPhase,menu,activate){
        this.order=[]
        this.paying=[]
        let index
        switch(orderPhase){
            case 0:
                if(floor(random(0,menu[1].length+1))!=0||activate){
                    index=floor(random(0,menu[1].length))
                    this.order.push(new item(this.layer,0,0,findName(menu[1][index][0],types.item)))
                    last(this.order).fade.main=0
                    last(this.order).size=0.5
                    this.paying.push(menu[1][index][1])
                }
            break
            case 1:
                index=floor(random(0,menu[0].length))
                this.order.push(new item(this.layer,0,0,findName(menu[0][index][0],types.item)))
                last(this.order).fade.main=0
                last(this.order).size=0.6
                this.paying.push(menu[0][index][1])
                if(floor(random(0,menu[2].length+1))!=0){
                    index=floor(random(0,menu[2].length))
                    this.order.push(new item(this.layer,0,0,findName(menu[2][index][0],types.item)))
                    last(this.order).fade.main=0
                    last(this.order).size=0.6
                    this.paying.push(menu[2][index][1])
                }
            break
            case 2:
                if(floor(random(0,menu[3].length+1))!=0||menu[0].length<=0){
                    index=floor(random(0,menu[3].length))
                    this.order.push(new item(this.layer,0,0,findName(menu[3][index][3],types.item)))
                    last(this.order).fade.main=0
                    last(this.order).size=0.6
                    this.paying.push(menu[3][index][1])
                }
            break
        }
    }
    display(level,layer=this.layer){
        switch(level){
            case -1:
                layer.noFill()
                layer.stroke(0,255,100,this.fade.main)
                layer.strokeWeight(4)
                layer.ellipse(this.position.x,this.position.y,this.radius*2-4)
            break
            case 0:
                layer.push()
                layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
                layer.scale(this.size)
                layer.noStroke()
                this.calculateParts()
                if(this.item!=-1){
                    layer.push()
                    layer.rotate(-this.direction.main)
                    layer.translate(0,20)
                    this.item.display(0)
                    layer.pop()
                }
                if(this.id==-1&&this.side!=-1){
                    layer.push()
                    layer.rotate(-this.direction.main)
                    layer.translate(10,20)
                    this.side.display(0)
                    layer.pop()
                }
                for(let a=0,la=2;a<la;a++){
                    if(this.skin.legs[a].display){
                        layer.fill(...this.color.skin.legs,this.fade.main*this.skin.legs[a].fade)
                        layer.noStroke()
                        layer.ellipse(this.skin.legs[a].points.end.x,this.skin.legs[a].points.end.z,12,12)
                    }
                }
                for(let a=0,la=2;a<la;a++){
                    if(this.skin.arms[a].display){
                        layer.fill(...this.color.skin.arms,this.fade.main*this.skin.arms[a].fade)
                        layer.noStroke()
                        layer.ellipse(this.skin.arms[a].points.end.x,this.skin.arms[a].points.end.z,12,12)
                    }
                }
                layer.rotate(-this.direction.main)
                if(this.face.beak.main.display){
                    layer.fill(this.color.beak.main[0],this.color.beak.main[1],this.color.beak.main[2],this.fade.main*this.face.beak.main.fade)
                    layer.noStroke()
                    layer.ellipse(0,11,14,8)
                }
                if(this.face.beak.nostril.display){
                    layer.noFill()
                    layer.stroke(this.color.beak.nostril[0],this.color.beak.nostril[1],this.color.beak.nostril[2],this.fade.main*this.face.beak.nostril.fade)
                    layer.strokeWeight(0.5)
                    for(let a=0,la=2;a<la;a++){
                        layer.line(-2+a*4,13,-2+a*4,14)
                    }
                }
                if(this.skin.head.display){
                    layer.fill(...this.color.skin.head,this.fade.main*this.skin.head.fade)
                    layer.noStroke()
                    layer.ellipse(0,0,25)
                }
                for(let a=0,la=2;a<la;a++){
                    if(this.face.eye[a].display){
                        layer.stroke(this.color.eye.back[0],this.color.eye.back[1],this.color.eye.back[2],this.fade.main*this.face.eye[a].fade)
                        layer.strokeWeight(2.5-this.face.eye[a].anim*1.5)
                        if(this.face.eye[a].anim==0){
                            layer.point(-4+a*8,7)
                        }else{
                            layer.line(-4+a*8+this.face.eye[a].anim*2,7,-4+a*8-this.face.eye[a].anim*2,7-this.face.eye[a].anim*2)
                            layer.line(-4+a*8+this.face.eye[a].anim*2,7,-4+a*8-this.face.eye[a].anim*2,7+this.face.eye[a].anim*2)
                        }
                        switch(this.type){
                            case 1:
                                switch(this.distinct){
                                    case 2:
                                        layer.strokeWeight(1)
                                        layer.arc(-4+a*8,7,5,5,-165+a*90,-105+a*90)
                                    breaks
                                }
                            break
                        }
                    }
                }
                if(this.infoAnim.dizzy>0){
                    layer.fill(255,this.fade.main*this.infoAnim.dizzy)
                    layer.noStroke()
                    for(let a=0,la=3;a<la;a++){
                        layer.ellipse(12*lsin(this.timer.main*3+a/la*360),-12+4*lcos(this.timer.main*3+a/la*360),3)
                    }
                }
                layer.pop()
            break
            case 1:
                layer.push()
                layer.translate(this.position.x+this.offset.position.x,this.position.y+this.offset.position.y)
                if(this.id==-1){
                    layer.translate(0,-27)
                    for(let a=0,la=this.order.length;a<la;a++){
                        this.order[a].display(0)
                    }
                }
                layer.pop()
            break
        }
    }
    update(){
        super.update()
        this.position.x=constrain(this.position.x,this.parent.edge.outer.x[0]+this.radius,this.parent.edge.outer.x[1]-this.radius)
        this.position.y=constrain(this.position.y,this.parent.edge.outer.y[0]+this.radius,this.parent.edge.outer.y[1]-this.radius)
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        this.direction.main=spinControl(this.direction.main)
        this.direction.goal=spinControl(this.direction.goal)
        this.direction.main=spinDirection(this.direction.main,this.direction.goal,15)
        this.velocity.x*=0.8
        this.velocity.y*=0.8
        this.controlDirection={x:0,y:0}
        if(this.timer.dizzy<=0){
            if(this.id==-1){
                let moving=false
                let interact=false
                switch(this.mode){
                    case 0:
                        if(this.follow==-1){
                            let x=this.parent.getPreviousCustomer(this.index).position.x+50
                            if(dist(this.position.x,this.position.y,x,this.parent.loc.lineup.y)>20){
                                this.direction.goal=dirPos(this,{position:{x:x,y:this.parent.loc.lineup.y}})
                                this.velocity.x+=this.speed*lsin(this.direction.main)*0.5
                                this.velocity.y+=this.speed*lcos(this.direction.main)*0.5
                                moving=true
                            }
                        }else{
                            if(distPos(this,this.follow)>40){
                                this.direction.goal=dirPos(this,this.follow)
                                this.velocity.x+=this.speed*lsin(this.direction.main)*0.5
                                this.velocity.y+=this.speed*lcos(this.direction.main)*0.5
                                moving=true
                            }
                        }
                    break
                    case 1:
                        if(distPos(this,this.follow)>40){
                            this.direction.goal=dirPos(this,this.follow)
                            this.velocity.x+=this.speed*lsin(this.direction.main)
                            this.velocity.y+=this.speed*lcos(this.direction.main)
                            moving=true
                        }else if(distPos(this,this.follow)>120&&this.follow.id>=0){
                            this.follow.follower=-1
                            this.follow=-1
                        }
                    break
                    case 2:
                        let distance=distPos(this,this.follow)
                        let dir=dirPos(this,this.follow)
                        if(distance>50||abs(spinDirection(dir,this.angle,10)-this.angle)>5&&this.timer.angle<60&&this.angle!=-1){
                            if(distance<=50){
                                this.timer.angle++
                            }
                            let loc={position:{
                                x:this.follow.position.x-lsin(dir+10)*40,
                                y:this.follow.position.y-lcos(dir+10)*40
                            }}
                            this.direction.goal=dirPos(this,loc)
                            this.velocity.x+=this.speed*lsin(this.direction.main)
                            this.velocity.y+=this.speed*lcos(this.direction.main)
                            moving=true
                        }else{
                            this.direction.goal=dirPos(this,this.follow)
                        }
                        if(this.follow.item!=-1){
                            for(let a=0,la=this.order.length;a<la;a++){
                                if(this.order[a].type==this.follow.item.type){
                                    if(a==1||this.item!=-1){
                                        this.side=this.follow.item
                                    }else{
                                        this.item=this.follow.item
                                    }
                                    this.follow.item=-1
                                    this.order.splice(a,1)
                                    this.parent.operation.dayManager.currency.main+=this.paying[a]
                                    this.paying.splice(a,1)
                                    interact=true
                                    a=la
                                }
                            }
                        }
                    break
                }
                if(moving||this.animSet.main.loop>0&&this.animSet.main.loop%15!=0){
                    this.runAnim(0,1)
                }
                if(interact||this.animSet.interact.loop>0&&this.animSet.interact.loop%15!=0){
                    this.runAnim(2,1)
                }else{
                    this.animSet.interact.loop=0
                }
                if(this.id==-1){
                    for(let a=0,la=this.order.length;a<la;a++){
                        this.order[a].update()
                    }
                }
                if(!this.fade.trigger&&this.fade<=0){
                    this.remove=true
                }
            }else{
                let inputKeys=inputs.keys[this.id+(dev.altControl?1:0)]
                let moveKey={x:0,y:0}
                if(inputKeys.main[0]&&!inputKeys.main[1]&&this.active){
                    moveKey.x--
                    this.controlDirection.x--
                }else if(inputKeys.main[1]&&!inputKeys.main[0]&&this.active){
                    moveKey.x++
                    this.controlDirection.x++
                }else if(abs(this.velocity.x)>0.4&&(inputKeys.main[2]&&!inputKeys.main[3]||inputKeys.main[3]&&!inputKeys.main[2])){
                    this.controlDirection.x+=this.velocity.x>0?1:-1
                }
                if(inputKeys.main[2]&&!inputKeys.main[3]&&this.active){
                    moveKey.y--
                    this.controlDirection.y--
                }else if(inputKeys.main[3]&&!inputKeys.main[2]&&this.active){
                    moveKey.y++
                    this.controlDirection.y++
                }else if(abs(this.velocity.y)>0.4&&(inputKeys.main[0]&&!inputKeys.main[1]||inputKeys.main[1]&&!inputKeys.main[0])){
                    this.controlDirection.y+=this.velocity.y>0?1:-1
                }
                if(moveKey.x!=0||moveKey.y!=0){
                    let magnitude=magVec(moveKey)
                    this.velocity.x+=this.speed*moveKey.x/magnitude
                    this.velocity.y+=this.speed*moveKey.y/magnitude
                }
                let process=false
                let interact=false
                let attack=false
                if(this.timer.interact>0){
                    this.timer.interact--
                }else{
                    this.handLen=30
                    let handLenChecked=false
                    let hand
                    if(inputKeys.main[5]){
                        hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
                        this.findHandLen()
                        handLenChecked=true
                        if(inputKeys.tap[5]){
                            for(let a=0,la=this.parent.entities.walls.length;a<la;a++){
                                for(let b=0,lb=this.parent.entities.walls[a].length;b<lb;b++){
                                    if(this.collide(4,this.parent.entities.walls[a][b])){
                                        process=true
                                    }
                                }
                            }
                        }
                        for(let a=0,la=this.parent.entities.walls.length;a<la;a++){
                            for(let b=0,lb=this.parent.entities.walls[a].length;b<lb;b++){
                                if(this.collide(3,this.parent.entities.walls[a][b])){
                                    process=true
                                }
                            }
                        }
                    }
                    if(inputKeys.tap[4]&&!process){
                        if(!handLenChecked){
                            this.findHandLen()
                        }
                        for(let a=0,la=this.parent.entities.walls.length;a<la;a++){
                            for(let b=0,lb=this.parent.entities.walls[a].length;b<lb;b++){
                                if(this.collide(2,this.parent.entities.walls[a][b])){
                                    interact=true
                                }
                            }
                        }
                        if(!interact){
                            if(this.item!=-1){
                                switch(this.item.name){
                                    case 'Crate':
                                        this.handLen=40
                                        this.findHandLen()
                                        if(this.parent.spawnGridWall(this.hand,this.item.contain,[])){
                                            this.item=-1
                                        }else if(this.handLen==40){
                                            this.handLen=48
                                            this.findHandLen()
                                            if(this.parent.spawnGridWall(this.hand,this.item.contain,[])){
                                                this.item=-1
                                            }
                                        }
                                    break
                                    case 'Blueprint':
                                        this.handLen=40
                                        this.findHandLen()
                                        if(this.parent.spawnGridWall(this.hand,findName('Blueprint',types.wall),[[0,this.item.contain]])){
                                            this.item=-1
                                        }else if(this.handLen==40){
                                            this.handLen=48
                                            this.findHandLen()
                                            if(this.parent.spawnGridWall(this.hand,findName('Blueprint',types.wall),[[0,this.item.contain]])){
                                                this.item=-1
                                            }
                                        }
                                    break
                                }
                            }else{
                                attack=true
                                this.timer.interact=15
                                for(let a=0,la=this.parent.entities.players.length;a<la;a++){
                                    this.collide(1,this.parent.entities.players[a])
                                }
                            }
                        }
                    }
                }
                if(this.controlDirection.x!=0||this.controlDirection.y!=0){
                    this.direction.goal=atan2(this.controlDirection.x,this.controlDirection.y)
                }
                if(this.controlDirection.x!=0||this.controlDirection.y!=0||this.animSet.main.loop>0&&this.animSet.main.loop%15!=0){
                    this.runAnim(0,1)
                }else{
                    if(this.animSet.main.loop%30>=15){
                        this.animSet.main.flip=1-this.animSet.main.flip
                    }
                    this.animSet.main.loop=0
                }
                if(process||this.animSet.process.loop>0&&this.animSet.process.loop%15!=0){
                    this.runAnim(1,1)
                }else{
                    if(this.animSet.process.loop%30>=15){
                        this.animSet.process.flip=1-this.animSet.process.flip
                    }
                    this.animSet.process.loop=0
                }
                if(interact||this.animSet.interact.loop>0&&this.animSet.interact.loop%15!=0){
                    this.runAnim(2,1)
                }else{
                    this.animSet.interact.loop=0
                }
                if(attack||this.animSet.attack.loop>0&&this.animSet.attack.loop%15!=0){
                    this.runAnim(3,1)
                }else{
                    this.animSet.attack.loop=0
                }
            }
        }
        this.mainAnim()
        if(this.timer.dizzy>0){
            this.timer.dizzy--
        }
        this.infoAnim.dizzy=smoothAnim(this.infoAnim.dizzy,this.timer.dizzy>0,0,1,5)
        this.animSet.hold=smoothAnim(this.animSet.hold,this.item!=-1,0,1,5)
        if(this.item!=-1){
            this.item.parent=this
            this.item.parentClass=0
            this.item.update()
        }
        for(let a=0,la=this.colliders.main.length;a<la;a++){
            for(let b=0,lb=this.colliders.main[a][0].length;b<lb;b++){
                this.collide(this.colliders.main[a][1],this.colliders.main[a][0][b])
            }
        }
    }
    collide(type,obj){
        let hand
        switch(type){
            case 0:
                if(distPos(this,obj)<this.radius+obj.radius&&this.index!=obj.index){
                    let dir=dirPos(this,obj)
                    let magnitude=[max(0.01,magVec(this.velocity)),max(0.01,magVec(obj.velocity))]
                    obj.velocity.x=magnitude[0]*lsin(dir)
                    obj.velocity.y=magnitude[0]*lcos(dir)
                    this.velocity.x=-magnitude[1]*lsin(dir)
                    this.velocity.y=-magnitude[1]*lcos(dir)
                    let over=this.radius+obj.radius-distPos(this,obj)
                    let proportion=magnitude[0]/(magnitude[0]+magnitude[1])
                    obj.position.x+=proportion*over*lsin(dir)
                    obj.position.y+=proportion*over*lcos(dir)
                    this.position.x-=(1-proportion)*over*lsin(dir)
                    this.position.y-=(1-proportion)*over*lcos(dir)
                    if(this.id==-1){
                        this.moving=[0,0]
                    }
                    if(obj.id==-1){
                        obj.moving=[0,0]
                    }
                }
            break
            case 1:
                if(obj.id!=this.id){
                    let hand={position:{x:this.position.x+lsin(this.direction.main)*30,y:this.position.y+lcos(this.direction.main)*30},radius:15}
                    if(distPos(hand,obj)<hand.radius+obj.radius){
                        if(obj.id==-1){
                            if(this.follower!=-1){
                                if(obj.mode==1){
                                    obj.follow=-1
                                    obj.cascadeMode(-1)
                                    this.follower=-1
                                }
                            }else if(obj.mode==0){
                                obj.follow=this
                                obj.cascadeMode(1)
                                this.follower=obj
                            }
                        }else{
                            let dir=dirPos(this,obj)
                            obj.timer.dizzy=60
                            obj.velocity.x=4*lsin(dir)
                            obj.velocity.y=4*lcos(dir)
                        }
                    }
                }
            break
            case 2:
                hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
                if(obj.checkIn(0,hand)){
                    return obj.grabEffect(this)
                }
                return false
            case 3:
                hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
                if(obj.checkIn(0,hand)){
                    return obj.processEffect(this)
                }
                return false
            case 4:
                hand={position:{x:this.position.x+lsin(this.direction.main)*this.handLen,y:this.position.y+lcos(this.direction.main)*this.handLen}}
                if(obj.checkIn(0,hand)){
                    return obj.interactEffect(this)
                }
                return false
        }
    }
}