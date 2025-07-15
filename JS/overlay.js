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
            break
            case 1:
                this.dishes=[]
                this.page=0
            break
        }
    }
    activate(args){
        this.timer.active=0
        switch(this.type){
            case 0:
                this.cards=[]
                this.support=[]
                this.anim=[]
                let result=this.parent.operation.cardManager.getOptions(args[0],[3])
                for(let a=0,la=result.length;a<la;a++){
                    this.cards.push(new card(this.layer,this.parent.operation.cardManager,even(a,la)*200,20,result[a]))
                    this.support.push([])
                    this.anim.push(0)
                }
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
                layer.fill(200,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('Choose Card',0,-120)
                for(let a=0,la=this.cards.length;a<la;a++){
                    this.cards[a].display()
                    layer.fill(200,this.fade.main)
                    layer.stroke(150+this.anim[a]*50,150+this.anim[a]*100,150+this.anim[a]*100,this.fade.main)
                    layer.strokeWeight(5)
                    layer.rect(this.cards[a].position.x,this.cards[a].position.y+130,155,35,10)
                    layer.fill(120,this.fade.main)
                    layer.noStroke()
                    layer.ellipse(this.cards[a].position.x-60,this.cards[a].position.y+130,22)
                    displaySymbol(layer,this.cards[a].position.x-60,this.cards[a].position.y+130,0,[-180,-90,0,90][a],0.9,[0,0,0],this.fade.main)
                    for(let b=0,lb=this.support[a].length;b<lb;b++){
                        layer.fill(...this.parent.operation.entityManager.entities.players[this.support[a][b]].color.skin.body,this.fade.main)
                        layer.ellipse(this.cards[a].position.x-36+b*21,this.cards[a].position.y+130,16)
                    }
                }
            break
            case 1:
                layer.fill(200,this.fade.main)
                layer.stroke(0,this.fade.main)
                layer.strokeWeight(2)
                layer.textSize(60)
                layer.text('Recipe Book',0,-120)
                for(let a=0,la=this.dishes.length;a<la;a++){
                    this.dishes[a].display()
                }
                layer.fill(200,this.fade.main)
                layer.stroke(150,this.fade.main)
                layer.strokeWeight(5)
                layer.rect(0,150,35,35,10)
                layer.rect(-130,20,35,35,10)
                layer.rect(130,20,35,35,10)
                displaySymbol(layer,-130,20,0,-180,1,[0,0,0],this.fade.main)
                displaySymbol(layer,130,20,0,0,1,[0,0,0],this.fade.main)
                displaySymbol(layer,0,150,1,0,1.5,[0,0,0],this.fade.main)
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
                            this.parent.operation.cardManager.addCard(this.cards[a].type)
                        }
                        for(let b=0,lb=this.parent.operation.player.length;b<lb;b++){
                            if(inputs.keys[b+(dev.altControl&&lb==1?1:0)].tap[a]&&this.timer.active>15){
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
            break
            case 1:
                for(let a=0,la=this.dishes.length;a<la;a++){
                    this.dishes[a].update()
                    this.dishes[a].fade.trigger=this.page==a
                }
            break
        }
        if(!this.active&&this.fade.main<=0){
            this.remove=true
        }
    }
    onClick(mouse){
        switch(this.type){
            case 0:
                for(let a=0,la=this.cards.length;a<la;a++){
                    if(inPointBox(mouse,{position:{x:this.cards[a].position.x+this.layer.width/2,y:this.cards[a].position.y+this.layer.height/2},width:this.cards[a].width,height:this.cards[a].height})){
                        this.active=false
                        this.parent.operation.cardManager.addCard(this.cards[a].type)
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
        }
    }
}