class overlay extends located{
    constructor(layer,parent,x,y,type,args){
        super(layer,x,y,{main:0,trigger:false,speed:10})
        this.parent=parent
        this.type=type
        this.args=args
        this.active=false
        this.remove=false
        this.initial()
    }
    initial(){
        this.timer.active=0
        switch(this.type){
            case 0:
                this.cards=[]
                this.support=[]
                this.anim=[]
                this.franchise=[]
                this.revive=-1
            break
            case 1:
                this.dishes=[]
                this.page=0
            break
            case 2:
                this.players=1
            break
        }
    }
    activate(args){
        this.timer.active=0
        let result
        switch(this.type){
            case 0:
                this.cards=[]
                switch(args[0]){
                    case 2:
                        if(this.franchise.length==0){
                            this.franchise.push(types.card[this.parent.operation.cardManager.removeFirst()].name)
                        }
                    break
                }
                this.support=[]
                this.anim=[]
                switch(args[0]){
                    case 4:
                        result=this.parent.operation.blueprintManager.getCardOptions(0,[3,floor(random(1,2.25))])
                        for(let a=0,la=result.length;a<la;a++){
                            this.cards.push(new appliance(this.layer,this.parent.operation.entityManager,even(a,la)*200,20,result[a]))
                            this.support.push([])
                            this.anim.push(0)
                        }
                    break
                    case 5:
                        let possible=range(0,60)
                        for(let a=0,la=3;a<la;a++){
                            let value=possible.splice(floor(random(0,possible.length)),1)[0]
                            this.cards.push(new layout(this.layer,this.parent.operation.entityManager,even(a,la)*240,20,value))
                            this.support.push([])
                            this.anim.push(0)
                        }
                    break
                    default:
                        result=this.parent.operation.cardManager.getOptions(args[0],[3,this.franchise])
                        for(let a=0,la=result.length;a<la;a++){
                            this.cards.push(new card(this.layer,this.parent.operation.cardManager,even(a,la)*200,20,result[a]))
                            this.support.push([])
                            this.anim.push(0)
                        }
                    break
                }
                this.setupArgs=args
            break
            case 1:
                switch(args[0]){
                    case 0:
                        this.page=this.dishes.length-1
                    break
                }
            break
            case 3:
                this.setupArgs=args
            break
        }
    }
    execute(type,args){
        switch(this.type){
            case 1:
                switch(type){
                    case 0:
                        this.dishes.push(new dish(this.layer,this.parent.operation.dishManager,0,20,args[0]))
                    break
                }
            break
        }
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        switch(this.type){
            case 0:
                layer.fill(225,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                switch(this.setupArgs[0]){
                    case 4:
                        layer.text('Choose Appliance',0,-120)
                    break
                    case 5:
                        layer.text('Choose Layout',0,-120)
                    break
                    default:
                        layer.text('Choose Card',0,-120)
                    break
                }
                for(let a=0,la=this.cards.length;a<la;a++){
                    this.cards[a].display()
                    layer.fill(225,this.fade.main)
                    layer.stroke(150+this.anim[a]*50,150+this.anim[a]*100,150+this.anim[a]*100,this.fade.main)
                    layer.strokeWeight(5)
                    layer.rect(this.cards[a].position.x,this.cards[a].position.y+130,155,35,10)
                    layer.fill(120,this.fade.main)
                    layer.noStroke()
                    layer.ellipse(this.cards[a].position.x-60,this.cards[a].position.y+130,22)
                    displaySymbol(layer,this.cards[a].position.x-60,this.cards[a].position.y+130,0,[-180,-90,0,90][a],0.9,[0,0,0],this.fade.main)
                    for(let b=0,lb=this.support[a].length;b<lb;b++){
                        layer.fill(...types.cosmetic.color[this.parent.operation.player[this.support[a][b]].color].skin.body,this.fade.main)
                        layer.ellipse(this.cards[a].position.x-36+b*21,this.cards[a].position.y+130,16)
                    }
                }
            break
            case 1:
                layer.fill(225,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('Recipe Book',0,-120)
                for(let a=0,la=this.dishes.length;a<la;a++){
                    this.dishes[a].display()
                }
                layer.fill(225,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                layer.rect(0,150,35,35,10)
                layer.rect(-130,20,35,35,10)
                layer.rect(130,20,35,35,10)
                displaySymbol(layer,-130,20,0,-180,1,[0,0,0],this.fade.main)
                displaySymbol(layer,130,20,0,0,1,[0,0,0],this.fade.main)
                displaySymbol(layer,0,150,1,0,1.5,[0,0,0],this.fade.main)
            break
            case 2:
                layer.fill(225,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('The Cooker',0,-60)
                layer.fill(225,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                layer.rect(0,0,200,50,10)
                layer.rect(-130,0,35,35,10)
                layer.rect(130,0,35,35,10)
                layer.rect(0,55,120,35,10)
                layer.rect(0,102.5,120,35,10)
                if(this.parent.operation.franchise.active.length>0){
                    layer.rect(0,150,120,35,10)
                }
                displaySymbol(layer,-130,0,0,-180,1,[0,0,0],this.fade.main)
                displaySymbol(layer,130,0,0,0,1,[0,0,0],this.fade.main)
                layer.noStroke()
                layer.fill(0,this.fade.main)
                layer.textSize(30)
                layer.text(`${this.players} Player${pl(this.players)}`,0,0)
                layer.textSize(20)
                layer.text('Begin',0,55)
                layer.text('Controls',0,102.5)
                if(this.parent.operation.franchise.active.length>0){
                    layer.text('Franchises',0,150)
                }
            break
            case 3:
                layer.fill(225,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('Game Over',0,-55)
                layer.strokeWeight(1.5)
                layer.textSize(20)
                layer.text(['Your resturant went bankrupt','Your restuarant closed, but another may soon take its place'][this.setupArgs[0]],0,0)
                layer.fill(225,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                layer.rect(0,55,120,35,10)
                layer.noStroke()
                layer.fill(0,this.fade.main)
                layer.textSize(20)
                layer.text(['Exit','Franchise'][this.setupArgs[0]],0,55)
            break
            case 4:
                layer.fill(225,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                for(let a=0,la=this.parent.operation.franchise.active.length;a<la;a++){
                    layer.rect(0,even(a,la)*112.5,480,100,10)
                    layer.line(-80,even(a,la)*112.5-50,-80,even(a,la)*112.5+50)
                    layer.line(80,even(a,la)*112.5-50,80,even(a,la)*112.5+50)
                    layer.line(-80,even(a,la)*112.5,240,even(a,la)*112.5)
                }
                layer.noStroke()
                layer.fill(0,this.fade.main)
                layer.textSize(20)
                for(let a=0,la=this.parent.operation.franchise.active.length;a<la;a++){
                    let obj=this.parent.operation.franchise.active[a]
                    layer.text(obj[0],-160,even(a,la)*112.5,145)
                }
                layer.textSize(16)
                for(let a=0,la=this.parent.operation.franchise.active.length;a<la;a++){
                    let obj=this.parent.operation.franchise.active[a]
                    layer.text(obj[1],0,even(a,la)*112.5-25,145)
                    layer.text(obj[2],0,even(a,la)*112.5+25,145)
                    layer.text(obj[3],160,even(a,la)*112.5-25,145)
                    layer.text(obj[4],160,even(a,la)*112.5+25,145)
                }
            break
            case 5:
                let players=this.parent.overlays[2].players
                layer.fill(225,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('Controls',0,-40-players*32.5)
                layer.strokeWeight(1.5)
                layer.textSize(15)
                layer.text('Grab - pick up or put down objects',0,5-players*32.5)
                layer.text('Interact - perform actions on objects',0,25-players*32.5)
                layer.fill(225,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                layer.rect(0,63.75+players*32.5,120,35,10)
                for(let a=0,la=players;a<la;a++){
                    layer.rect(0,40+even(a,la)*65,360,52.5,10)
                    layer.line(-120,13.75+even(a,la)*65,-120,66.25+even(a,la)*65)
                    layer.line(-60,13.75+even(a,la)*65,-60,66.25+even(a,la)*65)
                    layer.line(0,13.75+even(a,la)*65,0,66.25+even(a,la)*65)
                    layer.line(60,13.75+even(a,la)*65,60,66.25+even(a,la)*65)
                    layer.line(120,13.75+even(a,la)*65,120,66.25+even(a,la)*65)
                    layer.rect(-210,40+even(a,la)*65,35,35,10)
                    layer.rect(210,40+even(a,la)*65,35,35,10)
                }
                for(let a=0,la=players;a<la;a++){
                    displaySymbol(layer,-210,40+even(a,la)*65,0,-180,1,[0,0,0],this.fade.main)
                    displaySymbol(layer,210,40+even(a,la)*65,0,0,1,[0,0,0],this.fade.main)
                }
                layer.noStroke()
                layer.fill(0,this.fade.main)
                layer.textSize(10)
                for(let a=0,la=players;a<la;a++){
                    layer.text('Left',-150,25+even(a,la)*65)
                    layer.text('Right',-90,25+even(a,la)*65)
                    layer.text('Up',-30,25+even(a,la)*65)
                    layer.text('Down',30,25+even(a,la)*65)
                    layer.text('Grab',90,25+even(a,la)*65)
                    layer.text('Interact',150,25+even(a,la)*65)
                }
                layer.textSize(20)
                layer.text('Exit',0,63.75+players*32.5)
                for(let a=0,la=players;a<la;a++){
                    layer.textSize(inputs.layout[la-1][a]==0?15:20)
                    layer.text(['','A','J','F'][inputs.layout[la-1][a]],-150,47.5+even(a,la)*65)
                    layer.text(['','D','L','H'][inputs.layout[la-1][a]],-90,47.5+even(a,la)*65)
                    layer.text(['','W','I','T'][inputs.layout[la-1][a]],-30,47.5+even(a,la)*65)
                    layer.text(['','S','K','G'][inputs.layout[la-1][a]],30,47.5+even(a,la)*65)
                    layer.text(['Shift','Q','U','R'][inputs.layout[la-1][a]],90,47.5+even(a,la)*65)
                    layer.text(['End','E','O','Y'][inputs.layout[la-1][a]],150,47.5+even(a,la)*65)
                    if(inputs.layout[la-1][a]==0){
                        displaySymbol(layer,-150,47.5+even(a,la)*65,0,-180,1,[0,0,0],this.fade.main)
                        displaySymbol(layer,-90,47.5+even(a,la)*65,0,0,1,[0,0,0],this.fade.main)
                        displaySymbol(layer,-30,47.5+even(a,la)*65,0,-90,1,[0,0,0],this.fade.main)
                        displaySymbol(layer,30,47.5+even(a,la)*65,0,90,1,[0,0,0],this.fade.main)
                    }
                }
            break
        }
        layer.pop()
    }
    update(first){
        this.fade.trigger=first&&this.active
        super.update()
        this.timer.active++
        switch(this.type){
            case 0:
                for(let a=0,la=this.cards.length;a<la;a++){
                    this.cards[a].update()
                    this.cards[a].fade.trigger=this.fade.trigger
                    this.anim[a]=smoothAnim(this.anim[a],this.support[a].length>=this.parent.operation.player.length,0,1,60)
                    if(this.active){
                        if(this.anim[a]>0){
                            this.active=false
                            this.revive=-1
                            switch(this.setupArgs[0]){
                                case 2:
                                    this.franchise.push(this.cards[a].name)
                                    this.parent.operation.cardManager.removeCard(this.cards[a].type)
                                    this.revive=this.franchise.length>=3?3:2
                                break
                                case 3:
                                    this.franchise.push(this.cards[a].name)
                                    this.revive=4
                                break
                                case 4:
                                    this.franchise.push(this.cards[a].name)
                                    this.parent.operation.updateFranchise(this.franchise)
                                    this.parent.operation.transition('menu',[])
                                break
                                case 5:
                                    this.parent.operation.level=this.cards[a].type
                                    if(this.parent.operation.franchise.current.length==0){
                                        this.parent.operation.transition('main',[])
                                        this.revive=0
                                    }else{
                                        this.parent.operation.transition('main',[])
                                        this.parent.operation.loadFranchise(this.parent.operation.franchise.current)
                                    }
                                break
                                default:
                                    this.parent.operation.cardManager.addCard(this.cards[a].type)
                                break
                            }
                        }
                        for(let b=0,lb=this.parent.operation.player.length;b<lb;b++){
                            if(inputs.keys[inputs.layout[lb-1][b]].tap[a]&&this.timer.active>15){
                                for(let c=0,lc=this.support.length;c<lc;c++){
                                    if(this.support[c].includes(b)){
                                        this.support[c].splice(this.support[c].indexOf(b),1)
                                    }
                                }
                                this.support[[0,2,1,3][a]].push(b)
                            }
                        }
                    }
                }
                if(!this.active&&this.fade.main<=0&&this.revive!=-1){
                    this.active=true
                    this.activate([this.revive])
                    this.revive=-1
                }
            break
            case 1:
                for(let a=0,la=this.dishes.length;a<la;a++){
                    this.dishes[a].update()
                    this.dishes[a].fade.trigger=this.page==a&&this.fade.trigger
                }
                if(this.active){
                    for(let a=0,la=this.parent.operation.player.length;a<la;a++){
                        for(let b=0,lb=inputs.keys[a].tap.length;b<lb;b++){
                            if(inputs.keys[inputs.layout[la-1][a]].tap[b]){
                                switch(b){
                                    case 0:
                                        this.page=(this.page+this.dishes.length-1)%this.dishes.length
                                    break
                                    case 1:
                                        this.page=(this.page+1)%this.dishes.length
                                    break
                                    case 2: case 3:
                                        this.active=false
                                    break
                                }
                            }
                        }
                    }
                }
            break
            case 2:
                if(this.active){
                    for(let a=0,la=4;a<la;a++){
                        for(let b=0,lb=inputs.keys[a].tap.length;b<lb;b++){
                            if(inputs.keys[a].tap[b]){
                                switch(b){
                                    case 0:
                                        this.players=max(1,this.players-1)
                                    break
                                    case 1:
                                        this.players=min(4,this.players+1)
                                    break
                                    case 2:
                                        this.active=false
                                        this.parent.operation.generatePlayers(this.players)
                                        this.parent.activate(0,[5])
                                    break
                                    case 3:
                                        this.active=false
                                        this.parent.operation.generatePlayers(this.players)
                                        if(this.parent.operation.franchise.active.length>0){
                                            this.parent.activate(4,[])
                                        }else{
                                            this.parent.activate(0,[5])
                                        }
                                    break
                                }
                            }
                        }
                    }
                }
            break
            case 3:
                if(this.active){
                    for(let a=0,la=4;a<la;a++){
                        if(inputs.keys[a].tap[2]||inputs.keys[a].tap[3]){
                            this.active=false
                            switch(this.setupArgs[0]){
                                case 0:
                                    this.parent.operation.transition('menu',[])
                                break
                                case 1:
                                    this.parent.activate(0,[2])
                                break
                            }
                        }
                    }
                }
            break
            case 4:
                for(let a=0,la=this.parent.operation.franchise.active.length;a<la;a++){
                    for(let b=0,lb=4;b<lb;b++){
                        if(inputs.keys[a].tap[2]&&a==0||inputs.keys[a].tap[3]&&a==la-1||(inputs.keys[a].tap[0]||inputs.keys[a].tap[1])&&a==(la-1)/2){
                            this.active=false
                            this.parent.activate(0,[5])
                            this.parent.operation.franchise.current=this.parent.operation.franchise.active[a]
                        }
                    }
                }
            break
            case 5:
                if(this.active){
                    for(let a=0,la=4;a<la;a++){
                        if(inputs.keys[a].tap[2]||inputs.keys[a].tap[3]){
                            this.active=false
                            this.parent.activate(2,[])
                        }
                    }
                }
            break
        }
        if(!this.active&&this.fade.main<=0){
            this.remove=true
        }
    }
    onClick(mouse){
        if(this.active){
            switch(this.type){
                case 0:
                    for(let a=0,la=this.cards.length;a<la;a++){
                        if(inPointBox(mouse,{position:{x:this.cards[a].position.x+this.layer.width/2,y:this.cards[a].position.y+this.layer.height/2},width:this.cards[a].width,height:this.cards[a].height})&&this.cards[a].fade.trigger){
                            this.active=false
                            this.revive=-1
                            switch(this.setupArgs[0]){
                                case 2:
                                    this.franchise.push(this.cards[a].name)
                                    this.parent.operation.cardManager.removeCard(this.cards[a].type)
                                    this.revive=this.franchise.length>=3?3:2
                                break
                                case 3:
                                    this.franchise.push(this.cards[a].name)
                                    this.revive=4
                                break
                                case 4:
                                    this.franchise.push(this.cards[a].name)
                                    this.parent.operation.updateFranchise(this.franchise)
                                    this.parent.operation.transition('menu',[])
                                break
                                case 5:
                                    this.parent.operation.level=this.cards[a].type
                                    if(this.parent.operation.franchise.current.length==0){
                                        this.parent.operation.transition('main',[])
                                        this.revive=0
                                    }else{
                                        this.parent.operation.transition('main',[])
                                        this.parent.operation.loadFranchise(this.parent.operation.franchise.current)
                                    }
                                break
                                default:
                                    this.parent.operation.cardManager.addCard(this.cards[a].type)
                                break
                            }
                            a=la
                        }
                    }
                break
                case 1:
                    if(inPointBox(mouse,{position:{x:this.layer.width/2-130,y:this.layer.height/2+20},width:40,height:40})){
                        this.page=(this.page+this.dishes.length-1)%this.dishes.length
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2+130,y:this.layer.height/2+20},width:40,height:40})){
                        this.page=(this.page+1)%this.dishes.length
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+150},width:40,height:40})){
                        this.active=false
                    }
                break
                case 2:
                    if(inPointBox(mouse,{position:{x:this.layer.width/2-130,y:this.layer.height/2},width:40,height:40})){
                        this.players=max(1,this.players-1)
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2+130,y:this.layer.height/2},width:40,height:40})){
                        this.players=min(4,this.players+1)
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+55},width:125,height:40})){
                        this.active=false
                        this.parent.operation.generatePlayers(this.players)
                        this.parent.activate(0,[5])
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+102.5},width:125,height:40})&&this.parent.operation.franchise.active.length>0){
                        this.active=false
                        this.parent.activate(5,[])
                    }
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+150},width:125,height:40})&&this.parent.operation.franchise.active.length>0){
                        this.active=false
                        this.parent.operation.generatePlayers(this.players)
                        this.parent.activate(4,[])
                    }
                break
                case 3:
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+55},width:125,height:40})){
                        this.active=false
                        switch(this.setupArgs[0]){
                            case 0:
                                this.parent.operation.transition('menu',[])
                            break
                            case 1:
                                this.parent.activate(0,[2])
                            break
                        }
                    }
                break
                case 4:
                    for(let a=0,la=this.parent.operation.franchise.active.length;a<la;a++){
                        if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+even(a,la)*112.5},width:485,height:105})){
                            this.active=false
                            this.parent.activate(0,[5])
                            this.parent.operation.franchise.current=this.parent.operation.franchise.active[a]
                        }
                    }
                break
                case 5:
                    let players=this.parent.overlays[2].players
                    if(inPointBox(mouse,{position:{x:this.layer.width/2,y:this.layer.height/2+63.75+players*32.5},width:125,height:40})){
                        this.active=false
                        this.parent.activate(2,[])
                    }
                    for(let a=0,la=players;a<la;a++){
                        if(inPointBox(mouse,{position:{x:this.layer.width/2-210,y:this.layer.height/2+40+even(a,la)*65},width:40,height:40})){
                            inputs.layout[la-1][a]=(inputs.layout[la-1][a]+3)%4
                        }
                        if(inPointBox(mouse,{position:{x:this.layer.width/2+210,y:this.layer.height/2+40+even(a,la)*65},width:40,height:40})){
                            inputs.layout[la-1][a]=(inputs.layout[la-1][a]+1)%4
                        }
                    }
                break
            }
        }
    }
}