class dayManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.day=0
        this.phase=0
        this.currency={main:0}
        this.time={main:0,end:9000}
        this.patience={anim:0,main:0,base:5400,restore:0,fail:false,active:false}
        this.anim={phase:[0,0]}
        this.fail={num:0}
        this.spawners=[]
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
    generateSpawners(shift,mult){
        if(this.operation.cardManager.hasCard('Herd Mentality')){
            let ticker=0
            let bump=0
            for(let a=0,la=this.operation.entityManager.customer.group*mult;a<la;a++){
                bump++
                this.spawners.push([ticker,floor(random(this.operation.entityManager.customer.groupSizeMin,this.operation.entityManager.customer.groupSizeMax+1))])
                if(floor(random(0,5))<bump&&a<la-1){
                    bump=0
                    ticker++
                }
            }
            for(let a=0,la=this.spawners.length;a<la;a++){
                this.spawners[a][0]=this.time.end*((this.spawners[a][0]+random(0.2,0.3))/(ticker+0.5)+shift)
            }
        }else{
            for(let a=0,la=this.operation.entityManager.customer.group*mult;a<la;a++){
                this.spawners.push([this.time.end*((a+random(0,0.5))/(la-0.5)+shift),floor(random(this.operation.entityManager.customer.groupSizeMin,this.operation.entityManager.customer.groupSizeMax+1))])
            }
        }
    }
    beginDay(){
        this.phase=1
        this.time.main=this.operation.cardManager.hasCard('Prep Time')?-900:0
        this.patience.main=this.patience.base
        this.patience.fail=false
        this.operation.entityManager.clearWalls(['Crate','Blueprint','Option'])
        this.operation.entityManager.clearOuterWalls()
        this.operation.entityManager.beginDay()
        this.fail.num=0
        this.spawners=[]
        this.generateSpawners(0,1)
        if(this.operation.cardManager.hasCard('Open Late')){
            this.generateSpawners(1,0.5)
        }
        let rush=[
            this.operation.cardManager.hasCard('Morning Rush'),
            this.operation.cardManager.hasCard('Lunch Rush'),
            this.operation.cardManager.hasCard('Dinner Rush')
        ]
        let rushNum=((rush[0]?1:0)+(rush[1]?1:0)+(rush[2]?1:0))
        let rushers=ceil(this.operation.entityManager.customer.group*rushNum*0.15)
        let rushGroup=[]
        for(let a=0,la=rushNum-1;a<la;a++){
            let move=round(rushers/(la+1-a)+random(-0.5,0.5))
            rushGroup.push(move)
            rushers-=move
        }
        rushGroup.push(rushers)
        let ticker=0
        for(let a=0,la=3;a<la;a++){
            if(rush[a]){
                for(let b=0,lb=rushGroup[ticker];b<lb;b++){
                    let spot=this.time.end*(0.2+0.35*a+random(-0.02,0.02))
                    let placed=false
                    for(let c=0,lc=this.spawners.length-1;c<lc;c++){
                        if(this.spawners[c][0]>spot){
                            this.spawners.splice(c,0,[spot,floor(random(this.operation.entityManager.customer.groupSizeMin,this.operation.entityManager.customer.groupSizeMax+1))])
                            c=lc
                            placed=true
                        }
                    }
                    if(!placed){
                        this.spawners.push([spot,floor(random(this.operation.entityManager.customer.groupSizeMin,this.operation.entityManager.customer.groupSizeMax+1))])
                    }
                }
                ticker++
            }
        }
    }
    beginPractice(){
        this.phase=2
        this.operation.entityManager.tempClearWalls(['Crate','Blueprint','Option'])
        this.operation.entityManager.tempClearOuterWalls()
        this.operation.entityManager.spawnOptions(1,3)
    }
    endPractice(){
        this.phase=0
        this.operation.entityManager.clearWalls(['Option'])
        this.operation.entityManager.returnTempWalls()
        this.operation.entityManager.clearPlayerItem()
        this.operation.entityManager.resetWalls()
    }
    endDay(){
        this.phase=0
        this.day++
        if(this.day%3==1){
            this.operation.overlayManager.activate(0,[1])
        }
        this.operation.entityManager.customer.internal*=(1.125-min(this.day,15)*0.005)
        this.operation.entityManager.calcCustomer()
        this.operation.entityManager.clearCustomer()
        this.operation.entityManager.clearPlayerItem()
        this.operation.entityManager.resetWalls()
        this.operation.entityManager.endDay()
        this.operation.entityManager.spawnBlueprints(5+(this.operation.cardManager.hasCard('Catalogue')?1:0),0)
    }
    fakeDay(){
        this.beginDay()
        this.addCurrency(1000)
        this.endDay()
    }
    payout(value,x,y){
        this.addCurrency(value)
        this.operation.entityManager.entities.particles.push(new particle(this.layer,x,y,0,{value:value}))
    }
    failed(num,x,y){
        this.fail.num++
        let value=5*this.fail.num*num
        this.loseCurrency(value)
        this.operation.entityManager.entities.particles.push(new particle(this.layer,x,y,0,{value:-value}))
        if(this.currency.main<=0){
            this.operation.transition('end',[this.day>=16?1:0])
        }
    }
    booking(x,y){
        if(this.spawners.length>0){
            this.payout(ceil((this.spawners[0][0]-this.time.main)/6000*(1+this.operation.player.length)*(6+this.day)),x,y)
            this.time.main=this.spawners[0][0]
        }
    }
    display(scene){
        switch(scene){
            case 'main':
                let rush=[
                    this.operation.cardManager.hasCard('Morning Rush'),
                    this.operation.cardManager.hasCard('Lunch Rush'),
                    this.operation.cardManager.hasCard('Dinner Rush')
                ]
                this.layer.fill(200)
                this.layer.stroke(0)
                this.layer.strokeWeight(0.6)
                this.layer.textSize(18)
                this.layer.textAlign(LEFT,CENTER)
                this.layer.text(`Day ${this.day+1}`,6,16)
                this.layer.textSize(15)
                this.layer.text(this.currency.main,24,38)
                if(this.anim.phase[0]>0){
                    let buff=((rush[0]?1:0)+(rush[1]?1:0)+(rush[2]?1:0))*0.15
                    this.layer.fill(200,this.anim.phase[0])
                    this.layer.stroke(0,this.anim.phase[0])
                    this.layer.text('Preparation',6,58)
                    this.layer.textSize(12)
                    this.layer.text(`Groups Expected: ${this.operation.entityManager.customer.group}${buff>0?`+${ceil(this.operation.entityManager.customer.group*buff)}`:``}`,6,76)
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
                this.layer.strokeWeight(2)
                this.layer.quad(this.layer.width-6,21,this.layer.width-21,6,this.layer.width-36,21,this.layer.width-21,36)
                this.layer.line(this.layer.width-18,19,this.layer.width-14,19)
                this.layer.line(this.layer.width-18,23,this.layer.width-14,23)
                this.layer.line(this.layer.width-22,17,this.layer.width-22,25)
                this.layer.line(this.layer.width-26,17,this.layer.width-26,25)
                this.layer.textAlign(CENTER,CENTER)
                if(this.anim.phase[1]>0){
                    this.layer.noStroke()
                    this.layer.fill(80,this.anim.phase[1])
                    this.layer.rect(this.layer.width/2,12,304,12,4.5)
                    if(this.time.main>0){
                        this.layer.fill(240,160,80,this.anim.phase[1])
                        this.layer.rect(this.layer.width/2-150*(1-min(1,this.time.main/this.time.end)),12,300*min(1,this.time.main/this.time.end),8,3)
                    }
                    if(this.patience.anim>0){
                        this.layer.fill(80,this.anim.phase[1]*this.patience.anim)
                        this.layer.rect(this.layer.width/2,28,154,10,3)
                        let part=this.patience.main/this.patience.base
                        this.layer.fill(constrain(460-part*440,20,240),constrain(20+part*440,20,240),20,this.anim.phase[1]*this.patience.anim)
                        this.layer.rect(this.layer.width/2-75*(1-part),28,150*part,6,2)
                    }
                    this.layer.fill(240,this.anim.phase[1])
                    if(rush[0]){
                        this.layer.ellipse(this.layer.width/2-150+300*0.2,12,10)
                    }
                    if(rush[1]){
                        this.layer.ellipse(this.layer.width/2-150+300*0.55,12,10)
                    }
                    if(rush[2]){
                        this.layer.ellipse(this.layer.width/2-150+300*0.9,12,10)
                    }
                }
            break
        }
    }
    update(scene){
        super.update()
        switch(scene){
            case 'main':
                if(this.timer.main%60==0){
                    this.patience.active=this.operation.entityManager.queuing()&&this.phase==1
                }
                if(this.patience.restore>0){
                    this.patience.restore--
                    this.patience.main=min(this.patience.main+10,this.patience.base)
                }
                for(let a=0,la=this.anim.phase.length;a<la;a++){
                    this.anim.phase[a]=smoothAnim(this.anim.phase[a],this.phase==a,0,1,5)
                }
                this.patience.anim=smoothAnim(this.patience.anim,this.patience.active,0,1,5)
                switch(this.phase){
                    case 1:
                        if(this.spawners.length>0&&this.time.main>=this.spawners[0][0]){
                            this.operation.entityManager.sendCustomers(this.spawners[0][1])
                            this.spawners.splice(0,1)
                        }
                        this.time.main++
                        if(this.time.main>=this.time.end&&this.operation.entityManager.entities.players.length<=this.operation.player.length){
                            this.endDay()
                        }
                        if(this.patience.active){
                            if(this.patience.main>0){
                                this.patience.main-=(this.operation.cardManager.hasCard('High Expectations')?1.25:1)*(this.operation.cardManager.hasCard('Exclusive')?0.5:1)
                            }else if(!this.patience.fail){
                                this.patience.fail=true
                                this.operation.entityManager.queueFail()
                            }
                        }else{
                            this.patience.main=this.patience.base
                        }
                    break
                }
            break
        }
    }
    onClick(scene,mouse){
        switch(scene){
            case 'main':
                if(distPos(mouse,{position:{x:this.layer.width-21,y:21}})<30){
                    this.operation.overlayManager.activate(1,[-1])
                }
            break
        }
    }
}