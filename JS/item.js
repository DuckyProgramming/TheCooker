class item extends located{
    constructor(layer,manager,x,y,type){
        super(layer,x,y,{main:1,trigger:true,speed:15})
        this.manager=manager
        this.type=type
        this.initialValues()
    }
    save(){
        let composite={
            type:this.type,
            process:this.process,
        }
        return composite
    }
    load(composite){
        this.type=composite.type
        this.initialValues()
        this.process=composite.process
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
        this.name=types.item[this.type].name
        this.holdDist=types.item[this.type].holdDist
        this.holdDir=types.item[this.type].holdDir
        this.component=types.item[this.type].component
        this.trashable=types.item[this.type].trashable
        this.process=[]
        let set=[0,12,11,5,7,1,10,9,2,3,4,6,8]
        for(let a=0,la=set.length;a<la;a++){
            for(let b=0,lb=types.item[this.type].process.length;b<lb;b++){
                if(types.item[this.type].process[b][0]==set[a]){
                    switch(set[a]){
                        case 0: case 12:
                            this.process.push({type:types.item[this.type].process[b][0],other:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],active:false,display:0,anim:0})
                        break
                        case 1: case 2: case 3: case 4: case 9: case 10:
                            this.process.push({type:types.item[this.type].process[b][0],main:0,goal:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],active:false,display:0,anim:0})
                        break
                        case 5:
                            this.process.push({type:types.item[this.type].process[b][0],utility:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],active:false,display:0,anim:0})
                        break
                        case 6:
                            this.portions=types.item[this.type].portions
                            this.base={portions:types.item[this.type].portions}
                            this.replace=types.item[this.type].replace
                            this.process.push({type:types.item[this.type].process[b][0],main:0,goal:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],leave:types.item[this.type].process[b][3],active:false,display:0,anim:0})
                        break
                        case 7:
                            this.process.push({type:types.item[this.type].process[b][0],main:0,timer:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],active:false,display:0,anim:0})
                        break
                        case 8:
                            this.process.push({type:types.item[this.type].process[b][0],main:0,goal:types.item[this.type].process[b][1],active:false,display:0,anim:0})
                        break
                        case 11:
                            this.process.push({type:types.item[this.type].process[b][0],other:types.item[this.type].process[b][1],result:types.item[this.type].process[b][2],baseResult:types.item[this.type].process[b][3],active:false,display:0,anim:0})
                        break
                    }
                }
            }
        }
        for(let a=0,la=this.process.length;a<la;a++){
            this.process[a].mult=(this.manager.operation.cardManager.hasCard('Slow Worker')&&this.process[a].type!=8?0.8:1)*(this.manager.operation.cardManager.hasCard('Reckless')&&this.process[a].type==9?2:1)
        }
        this.processVisible=false
        this.processGood=0
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
                if(this.process[a].type==1||this.process[a].type==2||this.process[a].type==3){
                    this.processGood=15
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
                if(this.process[a].type==1||this.process[a].type==2||this.process[a].type==3){
                    this.processGood=15
                }
            }
        }
        return result
    }
    generalProcessBar(types,speed){
        let result=[]
        for(let a=0,la=this.process.length;a<la;a++){
            if(types.includes(this.process[a].type)){
                this.moved=true
                this.process[a].main=max(this.process[a].main,speed*this.process[a].goal)
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
    checkCombine(obj){
        for(let a=0,la=this.process.length;a<la;a++){
            if((this.process[a].type==0||this.process[a].type==12)&&this.process[a].other==obj.name){
                return true
            }else if(this.process[a].type==6&&this.process[a].result==obj.name&&this.replace&&this.portions<this.base.portions){
                return true
            }
        }
        for(let a=0,la=obj.process.length;a<la;a++){
            if((obj.process[a].type==0||obj.process[a].type==12)&&obj.process[a].other==this.name){
                return true
            }else if(obj.process[a].type==6&&obj.process[a].result==this.name&&obj.replace&&obj.portions<obj.base.portions){
                return true
            }
        }
        return false
    }
    attemptCombine(obj){
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==0&&this.process[a].other==obj.name){
                this.type=findName(this.process[a].result,types.item)
                this.initialValues()
                return true
            }else if(this.process[a].type==6&&this.process[a].result==obj.name&&this.replace&&this.portions<this.base.portions){
                this.portions++
                return true
            }else if(this.process[a].type==12&&this.process[a].other==obj.name){
                this.type=findName(this.process[a].result,types.item)
                this.initialValues()
                this.portions=1
                return true
            }
        }
        for(let a=0,la=obj.process.length;a<la;a++){
            if(obj.process[a].type==0&&obj.process[a].other==this.name){
                this.type=findName(obj.process[a].result,types.item)
                this.initialValues()
                return true
            }else if(obj.process[a].type==6&&obj.process[a].result==this.name&&obj.replace&&obj.portions<obj.base.portions){
                this.type=obj.type
                this.initialValues()
                this.portions=obj.portions+1
                return true
            }else if(obj.process[a].type==12&&obj.process[a].other==this.name){
                this.type=findName(obj.process[a].result,types.item)
                this.initialValues()
                this.portions=1
                return true
            }
        }
        return false
    }
    attemptDoubleCombine(obj){
        for(let a=0,la=this.process.length;a<la;a++){
            if(this.process[a].type==11&&this.process[a].other==obj.name){
                this.type=findName(this.process[a].result,types.item)
                let baseResult=this.process[a].baseResult
                this.initialValues()
                return [true,baseResult]
            }
        }
        for(let a=0,la=obj.process.length;a<la;a++){
            if(obj.process[a].type==11&&obj.process[a].other==this.name){
                this.type=findName(obj.process[a].baseResult,types.item)
                let result=obj.process[a].result
                this.initialValues()
                return [true,result]
            }
        }
        return [false,0]
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
                    case 'Scrambled Eggs Pot': case 'Rice Pudding Pot': case 'Wine Jus Pot': case 'Chili Pot': case 'Chopped Broccoli Pot': case 'Buffalo Sauce Pot': case 'French Onion Soup Pot': case 'Chicken Noodle Soup Pot':
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
        if(this.processGood>0){
            this.processGood--
        }
    }
}