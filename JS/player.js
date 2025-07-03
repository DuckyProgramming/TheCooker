class player extends partisan{
    constructor(layer,parent,x,y,id,cosmetic){
        super(layer,x,y,{main:1,trigger:true,speed:5})
        this.parent=parent
        this.id=id
        this.cosmetic=cosmetic
        this.active=true
        this.setupGraphics()
        this.setupValues()
    }
    setupValues(){
        this.size=1
        this.speed=0.6
        this.radius=12.5
        this.timer.dizzy=0
        this.timer.dizzySafe=0
        this.timer.interact=0
        this.infoAnim={dizzy:0}
        this.controlDirection={x:0,y:0}
        this.animSet.hold=0
        this.item=-1
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
                {fade:1,display:true,anim:{theta:54,phi:90},length:this.type==0?5:12,points:{set:{x:1.5,y:-12.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}},
                {fade:1,display:true,anim:{theta:54,phi:-90},length:this.type==0?5:12,points:{set:{x:1.5,y:-12.5,z:0},start:{x:0,y:0,z:0},end:{x:0,y:0,z:0}}}
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
                    this.item.held=true
                    this.item.display()
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
                                    break
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
        }
    }
    update(){
        super.update()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        let inputKeys=inputs.keys[this.id]
        this.direction.main=spinControl(this.direction.main)
        this.direction.goal=spinControl(this.direction.goal)
        this.direction.main=spinDirection(this.direction.main,this.direction.goal,10)
        this.velocity.x*=0.8
        this.velocity.y*=0.8
        this.controlDirection={x:0,y:0}
        if(this.timer.dizzy<=0){
            if(inputKeys.main[0]&&!inputKeys.main[1]&&this.active){
                this.velocity.x-=this.speed
                this.controlDirection.x--
            }else if(inputKeys.main[1]&&!inputKeys.main[0]&&this.active){
                this.velocity.x+=this.speed
                this.controlDirection.x++
            }else if(abs(this.velocity.x)>2&&(inputKeys.main[2]&&!inputKeys.main[3]||inputKeys.main[3]&&!inputKeys.main[2])){
                this.controlDirection.x+=this.velocity.x>0?1:-1
            }
            if(inputKeys.main[2]&&!inputKeys.main[3]&&this.active){
                this.velocity.y-=this.speed
                this.controlDirection.y--
            }else if(inputKeys.main[3]&&!inputKeys.main[2]&&this.active){
                this.velocity.y+=this.speed
                this.controlDirection.y++
            }else if(abs(this.velocity.y)>2&&(inputKeys.main[0]&&!inputKeys.main[1]||inputKeys.main[1]&&!inputKeys.main[0])){
                this.controlDirection.y+=this.velocity.y>0?1:-1
            }
            let process=false
            let interact=false
            let attack=false
            if(this.timer.interact>0){
                this.timer.interact--
            }else if(inputKeys.main[4]){
                for(let a=0,la=this.parent.entities.walls.length;a<la;a++){
                    let result=this.collide(2,this.parent.entities.walls[a],this.parent)
                    if(result){
                        process=true
                    }
                }
            }
            if(inputKeys.tap[4]&&!process){
                for(let a=0,la=this.parent.entities.walls.length;a<la;a++){
                    if(this.collide(1,this.parent.entities.walls[a],this.parent)){
                        process=true
                        interact=true
                    }
                }
                if(!interact){
                    attack=true
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
        this.mainAnim()
        if(this.timer.dizzy>0){
            this.timer.dizzy--
        }
        if(this.timer.dizzySafe>0){
            this.timer.dizzySafe--
        }
        this.infoAnim.dizzy=smoothAnim(this.infoAnim.dizzy,this.timer.dizzy>0,0,1,5)
        this.animSet.hold=smoothAnim(this.animSet.hold,this.item!=-1,0,1,5)
        if(this.item!=-1){
            this.item.update()
        }
    }
    collide(type,obj){
        switch(type){
            case 0:
                if(distPos(this,obj)<this.radius+obj.radius&&this.active&&obj.active){
                    let dir=dirPos(this,obj)
                    let magnitude=[max(0.01,magVec(this.velocity)),max(0.01,magVec(obj.velocity))]
                    obj.velocity.x=magnitude[0]*lsin(dir)
                    obj.velocity.y=magnitude[0]*lcos(dir)
                    this.velocity.x=-magnitude[1]*lsin(dir)
                    this.velocity.y=-magnitude[1]*lcos(dir)
                    if(this.id==-1){
                        this.moving=[0,0]
                    }
                    if(obj.id==-1){
                        obj.moving=[0,0]
                    }
                    switch(this.distinct){
                        case 17:
                            if(this.size>2&&obj.size<=2){
                                obj.active=false
                                obj.fade.trigger=false
                            }
                            if(obj.size>2&&this.size<=2){
                                this.active=false
                                this.fade.trigger=false
                            }
                        break
                    }
                }
            break
            case 1:
                if(this.active){
                    let hand={position:{x:this.position.x+lsin(this.direction.main)*40,y:this.position.y+lcos(this.direction.main)*40},radius:1}
                    if(inCircleBox(hand,obj)){
                        if(obj.type==21&&this.item==-1){
                            this.item=new projectile(this.layer,0,0,16,{variant:1})
                            return true
                        }else if(obj.type==22&&this.item==-1){
                            this.item=new projectile(this.layer,0,0,16,{variant:2})
                            return true
                        }else if(obj.type==22&&this.item!=-1&&this.item.variant==3){
                            this.item.setupValues({variant:4})
                            return true
                        }else if(obj.projectile!=-1&&obj.projectile!=undefined&&this.item==-1){
                            this.item=obj.projectile
                            obj.projectile=-1
                            return true
                        }else if(obj.projectile==-1&&this.item!=-1){
                            obj.projectile=this.item
                            this.item=-1
                            return true
                        }else if(obj.projectile!=-1&&obj.projectile!=undefined&&this.item!=-1){
                            if(
                                obj.projectile.variant==2&&this.item.variant==3||
                                obj.projectile.variant==3&&this.item.variant==2
                            ){
                                this.item=-1
                                obj.projectile.setupValues({variant:4})
                                return true
                            }else if(
                                obj.projectile.variant==0&&this.item.variant==5||
                                obj.projectile.variant==5&&this.item.variant==0
                            ){
                                this.item=-1
                                obj.projectile.setupValues({variant:7})
                                return true
                            }
                        }
                    }
                }
            break
            case 2:
                if(this.active){
                    let hand={position:{x:this.position.x+lsin(this.direction.main)*40,y:this.position.y+lcos(this.direction.main)*40},radius:1}
                    if(inCircleBox(hand,obj)){
                        if(obj.type==24&&obj.projectile!=-1&&obj.projectile.variant==1){
                            obj.projectile.process.main++
                            if(obj.projectile.process.main>=obj.projectile.process.goal){
                                return true
                            }else{
                                return false
                            }
                        }else if(obj.type==23&&obj.projectile!=-1&&obj.projectile.variant==8){
                            obj.projectile.process.main++
                            if(obj.projectile.process.main>=obj.projectile.process.goal){
                                return true
                            }else{
                                return false
                            }
                        }
                    }
                }
                return [false,0]
        }
    }
}