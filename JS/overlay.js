class overlay extends located{
    constructor(layer,parent,x,y,type,args){
        super(layer,x,y,{main:0,trigger:false,speed:5})
        this.parent=parent
        this.type=type
        this.args=args
        this.active=false
        this.remove=false
        this.initial()
    }
    initial(){
        switch(this.type){
            case 0:
                this.cards=[]
                this.support=[]
                this.anim=[]
            break
        }
    }
    activate(args){
        switch(this.type){
            case 0:
                this.cards=[]
                let result=this.parent.operation.cardManager.getOptions(args[0],[3])
                for(let a=0,la=result.length;a<la;a++){
                    this.cards.push(new card(this.layer,this.parent.operation.cardManager,even(a,la)*200,20,result[a]))
                    this.support.push([])
                    this.anim.push(0)
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
        }
        layer.pop()
    }
    update(first){
        this.fade.trigger=first&&this.active
        super.update()
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
                            if(inputs.keys[b].tap[a]){
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
        }
    }
}