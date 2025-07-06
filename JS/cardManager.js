class cardManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[]
        this.initial()
    }
    initial(){
        this.listing={
            full:[[],[],[],[],[],[]],
            available:[[],[],[],[],[],[]],
            possible:[[],[],[],[],[],[]],
        }
        for(let a=0,la=types.card.length;a<la;a++){
            if(types.card[a].list>=0){
                this.listing.full[types.card[a].list].push(a)
                this.listing.available[types.card[a].list].push(a)
            }
        }
        this.convertedListing()
    }
    removeFromList(card){
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                if(this.listing.available[a][b]==card){
                    this.listing.available[a].splice(b,1)
                    b--
                    lb--
                }
            }
        }
    }
    convertedListing(){
        this.listing.possible=[[],[],[],[],[],[]]
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                let valid=true
                for(let c=0,lc=types.card[this.listing.available[a][b]].prereq.length;c<lc;c++){
                    if(!this.active.includes(types.card[this.listing.available[a][b]].prereq[c])){
                        valid=false
                        c=lc
                    }
                }
                if(valid){
                    for(let c=0,lc=types.card[this.listing.available[a][b]].mutex.length;c<lc;c++){
                        if(this.active.includes(types.card[this.listing.available[a][b]].mutex[c])){
                            valid=false
                            c=lc
                        }
                    }
                }
                if(valid){
                    this.listing.possible[a].push(this.listing.available[a][b])
                }
            }
        }
    }
    getOptions(type,args){
        let result=[]
        switch(type){
            case 0:
                let temp=this.listing.possible[0].slice()
                for(let a=0,la=args[0];a<la;a++){
                    let index=floor(random(0,temp.length))
                    result.push(temp[index])
                    temp.splice(index,1)
                }
            break
            case 1:
                if(this.listing.possible[5].length>0){
                    result.push(this.listing.possible[5][floor(random(0,this.listing.possible.length))])
                }
                let possible=[]
                for(let a=0,la=2;a<la;a++){
                    for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                        for(let c=0,lc=1+a*2;c<lc;c++){
                            possible.push(this.listing.possible[a][b])
                        }
                    }
                }
                if(possible.length>0){
                    result.push(possible[floor(random(0,possible.length))])
                }
                possible=[]
                for(let a=this.operation.dishManager.active[0].length<=0?4:2,la=5;a<la;a++){
                    for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                        possible.push(this.listing.possible[a][b])
                    }
                }
                if(possible.length>0){
                    result.push(possible[floor(random(0,possible.length))])
                }
            break
        }
        return result
    }
    addCard(card){
        this.active.push(card)
        this.operation.entityManager.sendPackages(types.card[card].wall)
        this.operation.entityManager.customer.internal*=types.card[card].customerMult
        this.operation.entityManager.calcCustomer()
        for(let a=0,la=types.card[card].dish.length;a<la;a++){
            this.operation.dishManager.addDish(findName(types.card[card].dish[a],types.dish))
        }
        this.removeFromList(card)
        this.convertedListing()
    }
}