class dayManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.day=0
        this.phase=0
        ////
        this.currency={main:100}
        ////
        this.time={main:0,end:7200}
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
        ////
        //not yet impelemented
        ////
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
                if(this.phase==0){
                    this.layer.text('Preparation',6,58)
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
            break
        }
    }
    update(scene){
        switch(scene){
            case 'main':
                switch(this.phase){
                    case 1:
                        this.time.main++
                        if(this.time.main>=this.time.end){
                        }
                    break
                }
            break
        }
    }
}