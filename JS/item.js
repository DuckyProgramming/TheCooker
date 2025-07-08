class item extends located{
    constructor(layer,x,y,type){
        super(layer,x,y,{main:1,trigger:true,speed:15})
        this.type=type
        this.initialValues()
    }
    initialValues(){
        this.direction=0
        this.size=1
        this.parent=-1
        this.parentClass=-1
        /*
        0-player
        1-wall
        */
        this.moved=false
        this.process=[]
        for(let a=0,la=types.item[this.type].process.length;a<la;a++){
            switch(types.item[this.type].process[a][0]){
                case 0:
                    this.process.push({type:types.item[this.type].process[a][0],other:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 1: case 2: case 3: case 4: case 9:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,goal:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 5:
                    this.process.push({type:types.item[this.type].process[a][0],utility:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 7:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,timer:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],display:0,anim:0})
                break
                case 8:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,goal:types.item[this.type].process[a][1],active:false,display:0,anim:0})
                break
            }
        }
        this.processVisible=false
        this.name=types.item[this.type].name
        switch(this.name){
            case 'Crate': case 'Blueprint':
                this.contain=0
                this.width=25
                this.height=25
            break
        }
    }
    generalProcess(types,speed){
        let result=[]
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.moved=true
                this.process[a].main+=speed
                this.process[a].active=true
                this.process[a].display=15
                if(this.process[a].main>=this.process[a].goal){
                    this.process[a].main=this.process[a].goal
                    result.push(this.process[a])
                }
            }
        }
        return result
    }
    checkUtility(type){
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==5&&this.proces[a].utility==type){
                this.type=findName(obj.process[a].result,types.item)
                this.initialValues()
                a=la
            }
        }
    }
    attemptCombine(obj){
        let complete=false
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==0&&this.process[a].other==obj.name){
                this.type=findName(this.process[a].result,types.item)
                this.initialValues()
                a=la
                complete=true
            }
        }
        if(!complete){
            for(let a=0,la=obj.process.length;a<la;a++){
                if(obj.process[a].type==0&&obj.process[a].other==this.name){
                    this.type=findName(obj.process[a].result,types.item)
                    this.initialValues()
                    a=la
                    complete=true
                }
            }
        }
        return complete
    }
    display(level,layer=this.layer){
        switch(level){
            case 0:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                layer.rotate(this.direction)
                layer.scale(this.size)
                //sprint(this.size)
                layer.noStroke()
                switch(this.name){
                    case 'Crate':
                        layer.fill(180,120,60,this.fade.main)
                        layer.rect(0,0,this.width,this.height)
                        layer.fill(190,135,80,this.fade.main)
                        layer.rect(0,0,this.width*0.8,this.height*0.8)
                        layer.fill(160,100,40,this.fade.main)
                        layer.quad(-this.width*0.4,this.height*0.1,-this.width*0.4,this.height*0.25,this.width*0.4,-this.height*0.1,this.width*0.4,-this.height*0.25)
                    break
                    case 'Blueprint':
                        layer.fill(42,89,163,this.fade.main)
                        layer.rect(0,0,this.width,this.height)
                        layer.noFill()
                        layer.stroke(92,127,182,this.fade.main)
                        layer.strokeWeight(1)
                        for(let a=0,la=4;a<la;a++){
                            layer.line((this.width-3)*(-0.5+(a+1)/(la+1)),-this.height/2+1.5,(this.width-3)*(-0.5+(a+1)/(la+1)),this.height/2-1.5)
                            layer.line(-this.width/2+1.5,(this.height-3)*(-0.5+(a+1)/(la+1)),this.width/2-1.5,(this.height-3)*(-0.5+(a+1)/(la+1)))
                        }
                        layer.stroke(240,this.fade.main)
                        layer.rect(0,0,this.width-3,this.height-3)
                    break
                    case 'Trash Bag':
                        layer.fill(40,this.fade.main)
                        layer.ellipse(0,0,30)
                        layer.triangle(0,12,-3,18,3,18)
                    break
                    case 'Plate':
                        layer.fill(220,this.fade.main)
                        layer.ellipse(0,0,24)
                        layer.fill(200,this.fade.main)
                        layer.ellipse(0,0,20)
                    break
                    case 'Dirty Plate':
                        layer.fill(220,this.fade.main)
                        layer.ellipse(0,0,24)
                        layer.fill(200,this.fade.main)
                        layer.ellipse(0,0,20)
                        layer.fill(100,75,80,this.fade.main)
                        layer.ellipse(-4,0,5)
                        layer.ellipse(1,-4,3.5)
                        layer.ellipse(3.5,2,4)
                    break
                    case 'Burnt':
                        layer.fill(40,this.fade.main)
                        regPoly(layer,0,0,10,9,9,0)
                        layer.fill(20,this.fade.main)
                        regPoly(layer,0,0,10,6,6,0)
                    break
                    case 'Raw Fish':
                        layer.fill(100,125,200,this.fade.main)
                        layer.arc(7,0,12,12,15,345)
                        layer.triangle(7,-6,7,6,-11,0)
                        layer.quad(-5,0,-14,-5,-11,0,-14,5)
                        layer.fill(25,50,100,this.fade.main)
                        layer.ellipse(9,-3,3)
                    break
                    case 'Fish':
                        layer.fill(50,75,125,this.fade.main)
                        layer.arc(7,0,12,12,15,345)
                        layer.triangle(7,-6,7,6,-11,0)
                        layer.quad(-5,0,-14,-5,-11,0,-14,5)
                        layer.fill(0,25,50,this.fade.main)
                        layer.ellipse(9,-3,3)
                    break
                    case 'Plated Fish':
                        layer.fill(220,this.fade.main)
                        layer.ellipse(0,0,24)
                        layer.fill(200,this.fade.main)
                        layer.ellipse(0,0,20)
                        layer.fill(50,75,125,this.fade.main)
                        layer.arc(7,0,12,12,15,345)
                        layer.triangle(7,-6,7,6,-11,0)
                        layer.quad(-5,0,-14,-5,-11,0,-14,5)
                        layer.fill(0,25,50,this.fade.main)
                        layer.ellipse(9,-3,3)
                    break
                    case 'Meat':
                        layer.fill(240,220,200,this.fade.main)
                        layer.ellipse(0,-3,18,18)
                        layer.ellipse(0,6,14,16)
                        layer.fill(240,80,40,this.fade.main)
                        layer.ellipse(0,-3,12,12)
                        layer.ellipse(0,6,8,10)
                        layer.fill(240,220,200,this.fade.main)
                        layer.ellipse(0,-3,4,4)
                    break
                }
                /*switch(this.type){
                    case 1:
                        layer.fill(220,220,160,this.fade.main)
                        layer.ellipse(0,0,12)
                    break
                    case 2:
                        layer.stroke(180,100,80,this.fade.main)
                        layer.strokeWeight(1)
                        layer.line(-3,-1,0,-4)
                        layer.line(3,-1,0,-4)
                        layer.noStroke()
                        layer.fill(200,0,80,this.fade.main)
                        layer.ellipse(-3.5,1,6)
                        layer.ellipse(3.5,1,6)
                        layer.fill(240,80,120,this.fade.main)
                        layer.ellipse(-3.5,1,4)
                        layer.ellipse(3.5,1,4)
                    break
                    case 3:
                        layer.fill(220,220,160,this.fade.main)
                        layer.ellipse(0,0,16)
                        layer.fill(200,180,120,this.fade.main)
                        layer.ellipse(0,0,13)
                        layer.stroke(220,220,160,this.fade.main)
                        layer.strokeWeight(1.5)
                        layer.line(0,-7.25,0,7.25)
                        layer.line(-7.25,0,7.25,0)
                        layer.line(-3.25,-6,-3.25,6)
                        layer.line(3.25,-6,3.25,6)
                        layer.line(-6,-3.25,6,-3.25)
                        layer.line(-6,3.25,6,3.25)
                    break
                    case 4:
                        layer.fill(220,220,160,this.fade.main)
                        layer.ellipse(0,0,16)
                        layer.fill(200,180,120,this.fade.main)
                        layer.ellipse(0,0,13)
                        layer.stroke(180,100,80,this.fade.main)
                        layer.strokeWeight(1)
                        layer.line(-3,-1,0,-4)
                        layer.line(3,-1,0,-4)
                        layer.noStroke()
                        layer.fill(200,0,80,this.fade.main)
                        layer.ellipse(-3.5,1,6)
                        layer.ellipse(3.5,1,6)
                        layer.fill(240,80,120,this.fade.main)
                        layer.ellipse(-3.5,1,4)
                        layer.ellipse(3.5,1,4)
                        layer.stroke(220,220,160,this.fade.main)
                        layer.strokeWeight(1.5)
                        layer.line(0,-7.25,0,7.25)
                        layer.line(-7.25,0,7.25,0)
                        layer.line(-3.25,-6,-3.25,6)
                        layer.line(3.25,-6,3.25,6)
                        layer.line(-6,-3.25,6,-3.25)
                        layer.line(-6,3.25,6,3.25)
                    break
                    case 5:
                        layer.fill(200,180,120,this.fade.main)
                        layer.ellipse(0,0,16)
                        layer.fill(160,0,60,this.fade.main)
                        layer.ellipse(0,0,13)
                        layer.stroke(200,180,120,this.fade.main)
                        layer.strokeWeight(1.5)
                        layer.line(0,-7.25,0,7.25)
                        layer.line(-7.25,0,7.25,0)
                        layer.line(-3.25,-6,-3.25,6)
                        layer.line(3.25,-6,3.25,6)
                        layer.line(-6,-3.25,6,-3.25)
                        layer.line(-6,3.25,6,3.25)
                    break
                    case 6:
                        layer.fill(30,this.fade.main)
                        layer.ellipse(0,0,16)
                        layer.fill(0,this.fade.main)
                        layer.ellipse(0,0,13)
                        layer.stroke(30,this.fade.main)
                        layer.strokeWeight(1.5)
                        layer.line(0,-7.25,0,7.25)
                        layer.line(-7.25,0,7.25,0)
                        layer.line(-3.25,-6,-3.25,6)
                        layer.line(3.25,-6,3.25,6)
                        layer.line(-6,-3.25,6,-3.25)
                        layer.line(-6,3.25,6,3.25)
                    break
                    case 7:
                        layer.fill(220,this.fade.main)
                        layer.ellipse(0,0,24)
                        layer.fill(200,this.fade.main)
                        layer.ellipse(0,0,20)
                        layer.fill(200,180,120,this.fade.main)
                        layer.ellipse(0,0,16)
                        layer.fill(160,0,60,this.fade.main)
                        layer.ellipse(0,0,13)
                        layer.stroke(200,180,120,this.fade.main)
                        layer.strokeWeight(1.5)
                        layer.line(0,-7.25,0,7.25)
                        layer.line(-7.25,0,7.25,0)
                        layer.line(-3.25,-6,-3.25,6)
                        layer.line(3.25,-6,3.25,6)
                        layer.line(-6,-3.25,6,-3.25)
                        layer.line(-6,3.25,6,3.25)
                    break
                }*/
               layer.pop()
            break
            case 1:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                layer.noStroke()
                for(let a=0,la=this.process.length;a<la;a++){
                    if(this.process[a].anim>0){
                        this.processVisible=true
                        layer.noStroke()
                        layer.fill(40,this.fade.main*this.process[a].anim)
                        layer.rect(0,-16,36,8,3)
                        switch(this.process[a].type){
                            case 9:
                                layer.fill(240,20,20,this.fade.main*this.process[a].anim)
                                layer.rect(-16.5*(1-this.process[a].main/this.process[a].goal),-16,33*this.process[a].main/this.process[a].goal,5,2)
                            break
                            default:
                                layer.fill(20,240,20,this.fade.main*this.process[a].anim)
                                layer.rect(-16.5*(1-this.process[a].main/this.process[a].goal),-16,33*this.process[a].main/this.process[a].goal,5,2)
                            break
                        }
                    }
                }
                layer.pop()
            break
        }
    }
    displayProcess(type){
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==type){
                this.process[a].display=true
            }
        }
    }
    update(){
        super.update()
        for(let a=0,la=this.process.length;a<la;a++){
            this.process[a].anim=smoothAnim(this.process[a].anim,this.process[a].display>0&&this.process[a].main>0,0,1,10)
            if(this.process[a].display>0){
                this.process[a].display--
            }
            if(this.process[a].active){
                this.process[a].active=false
            }else if(this.parent==-1||!this.parent.removeMark){
                if(this.process[a].type==8&&this.process[a].main>0){
                    this.process[a].main-=2
                }
            }
        }
        this.processVisible=false
    }
}