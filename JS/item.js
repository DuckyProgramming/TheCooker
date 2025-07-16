class item extends located{
    constructor(layer,manager,x,y,type){
        super(layer,x,y,{main:1,trigger:true,speed:15})
        this.manager=manager
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
        try{
            this.name=types.item[this.type].name
        }catch(error){
            throw error
        }
        this.holdDist=types.item[this.type].holdDist
        this.holdDir=types.item[this.type].holdDir
        this.component=types.item[this.type].component
        this.trashable=types.item[this.type].trashable
        this.process=[]
        for(let a=0,la=types.item[this.type].process.length;a<la;a++){
            switch(types.item[this.type].process[a][0]){
                case 0:
                    this.process.push({type:types.item[this.type].process[a][0],other:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 1: case 2: case 3: case 4: case 9: case 10:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,goal:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 5:
                    this.process.push({type:types.item[this.type].process[a][0],utility:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 6:
                    this.portions=types.item[this.type].portions
                    this.process.push({type:types.item[this.type].process[a][0],main:0,goal:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],leave:types.item[this.type].process[a][3],active:false,display:0,anim:0})
                break
                case 7:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,timer:types.item[this.type].process[a][1],result:types.item[this.type].process[a][2],active:false,display:0,anim:0})
                break
                case 8:
                    this.process.push({type:types.item[this.type].process[a][0],main:0,goal:types.item[this.type].process[a][1],active:false,display:0,anim:0})
                break
            }
        }
        for(let a=0,la=this.process.length;a<la;a++){
            this.process[a].mult=(this.manager.operation.cardManager.hasCard('Slow Worker')&&this.process[a].type!=8?0.8:1)*(this.manager.operation.cardManager.hasCard('Reckless')&&this.process[a].type==9?2:1)
        }
        this.processVisible=false
        switch(this.name){
            case 'Crate':
                this.contain=0
            break
            case 'Blueprint':
                this.contain=0
                this.cost=0
            break
        }
    }
    generalProcess(types,speed){
        let result=[]
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.moved=true
                this.process[a].main+=speed*this.process[a].mult
                this.process[a].active=true
                this.process[a].display=15
                if(this.process[a].main>=this.process[a].goal){
                    this.process[a].main=this.process[a].type==6?0:this.process[a].goal
                    result.push(this.process[a])
                }
            }
        }
        return result
    }
    generalProcessConstant(types,speed){
        let result=[]
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.moved=true
                this.process[a].main+=speed*this.process[a].mult*this.process[a].goal
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
    resetProcess(types){
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.process[a].main=0
            }
        }
    }
    checkUtility(type){
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==5&&this.process[a].utility==type){
                this.type=findName(this.process[a].result,types.item)
                this.initialValues()
                return true
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
        let col
        switch(level){
            case 0:
                displayItem(this.layer,this.position.x,this.position.y,this.name,this.portions,this.direction,this.size,this.fade.main)
            break
            case 1:
                layer.push()
                layer.translate(this.position.x,this.position.y)
                layer.noStroke()
                switch(this.name){
                    case 'Bolognese Sauce Pot': case 'White Sauce Pot': case 'Ramen Soup Pot': case 'Meat Soup Pot': case 'Tomato Soup Pot': case 'Broccoli Cheese Soup Pot': case 'Miso Soup Pot': case 'Broccoli Pot': case 'Mashed Potato Pot': case 'Macaroni and Cheese Pot':
                    case 'Scrambled Eggs Pot': case 'Rice Pudding Pot': case 'Wine Jus Pot': case 'Chili Pot':
                        layer.fill(225,this.fade.main)
                        layer.rect(-8,-8,12,12,4)
                        layer.fill(0,this.fade.main)
                        layer.textSize(10)
                        layer.text(this.portions,-8,-8)
                    break
                }
                for(let a=0,la=this.process.length;a<la;a++){
                    if(this.process[a].anim>0){
                        this.processVisible=true
                        layer.noStroke()
                        layer.fill(40,this.fade.main*this.process[a].anim)
                        layer.rect(0,-16,36,8,3)
                        if(this.manager.operation.cardManager.hasCard('Blurry Sight')&&this.process[a].type!=8){
                            switch(this.process[a].type){
                                case 9:
                                    layer.fill(240,20,20,this.fade.main*this.process[a].anim)
                                    layer.rect(0,-17.7,33,2,1.6)
                                    layer.rect(0,-14.3,33,2,1.6)
                                break
                                default:
                                    layer.fill(20,240,20,this.fade.main*this.process[a].anim)
                                    layer.rect(0,-17.7,33,2,1.6)
                                    layer.rect(0,-14.3,33,2,1.6)
                                break
                            }
                        }else{
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
                }
                layer.pop()
            break
            case 2:
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
                                layer.rect(0,-17.7,33,2,1.6)
                                layer.rect(0,-14.3,33,2,1.6)
                            break
                            default:
                                layer.fill(20,240,20,this.fade.main*this.process[a].anim)
                                layer.rect(0,-17.7,33,2,1.6)
                                layer.rect(0,-14.3,33,2,1.6)
                            break
                        }
                    }
                }
                layer.pop()
            break
        }
    }
    displayProcess(types){
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.process[a].display=15
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