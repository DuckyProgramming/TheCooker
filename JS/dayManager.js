class dayManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.day=0
        this.phase=0
        ////
        this.currency={main:100}
        ////
        this.time={main:0,end:5400}
        this.anim={phase:[0,0]}
        this.spawns=[]
    }
    addCurrency(amount){
        this.currency.main+=amount
    }
    loseCurrency(amount){
        this.currency.main-=amount
    }
    hasCurrency(amount){
        return this.currency.main>=amount
    }
    beginDay(){
        this.phase=1
        this.operation.entityManager.clearWalls(['Crate','Blueprint','Option'])
        this.spawners=[]
        for(let a=0,la=this.operation.entityManager.customer.group;a<la;a++){
            this.spawners.push([this.time.end*(a+random(0,0.5))/la,floor(random(this.operation.entityManager.customer.groupSizeMin,this.operation.entityManager.customer.groupSizeMax+1))])
        }
    }
    endDay(){
        this.phase=0
        this.operation.entityManager.resetWalls()
        this.operation.entityManager.spawnBlueprints(5)
    }
    display(scene){
        switch(scene){
            case 'main':
                this.layer.fill(200)
                this.layer.stroke(0)
                this.layer.strokeWeight(0.6)
                this.layer.textSize(18)
                this.layer.textAlign(LEFT,CENTER)
                this.layer.text(`Day ${this.day+1}`,6,16)
                this.layer.textSize(15)
                this.layer.text(this.currency.main,24,38)
                if(this.anim.phase[0]>0){
                    this.layer.fill(200,this.anim.phase[0])
                    this.layer.stroke(0,this.anim.phase[0])
                    this.layer.text('Preparation',6,58)
                    this.layer.textSize(12)
                    this.layer.text(`Groups Expected: ${this.operation.entityManager.customer.group}`,6,76)
                    this.layer.text(`Group Size: ${this.operation.entityManager.customer.groupSizeMin}-${this.operation.entityManager.customer.groupSizeMax}`,6,92)
                }
                this.layer.noFill()
                this.layer.strokeWeight(1.35)
                this.layer.ellipse(13,36.5,12)
                this.layer.ellipse(13,36.5,8)
                this.layer.stroke(200)
                this.layer.strokeWeight(0.9)
                this.layer.ellipse(13,36.5,12)
                this.layer.ellipse(13,36.5,8)
                this.layer.textAlign(CENTER,CENTER)
                if(this.anim.phase[1]>0){
                    this.layer.noStroke()
                    this.layer.fill(80,this.anim.phase[1])
                    this.layer.rect(this.layer.width/2,12,304,12,4.5)
                    this.layer.fill(240,160,80,this.anim.phase[1])
                    this.layer.rect(this.layer.width/2-150*(1-this.time.main/this.time.end),12,300*this.time.main/this.time.end,8,3)
                }
            break
        }
    }
    update(scene){
        switch(scene){
            case 'main':
                for(let a=0,la=this.anim.phase.length;a<la;a++){
                    this.anim.phase[a]=smoothAnim(this.anim.phase[a],this.phase==a,0,1,5)
                }
                switch(this.phase){
                    case 1:
                        this.time.main++
                        if(this.spawners.length>0&&this.time.main>=this.spawners[0][0]){
                            this.operation.entityManager.sendCustomers(this.spawners[0][1])
                            this.spawners.splice(0,1)
                        }
                        if(this.time.main>=this.time.end&&this.operation.entityManager.entities.players.length<=this.operation.player.length){
                            this.endDay()
                        }
                    break
                }
            break
        }
    }
}