class cardManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[]
        this.initial()
    }
    save(){
        let composite={
            active:this.active,
            listing:this.listing,
        }
        return composite
    }
    load(composite){
        this.active=composite.active
        this.listing=composite.listing
    }
    initial(){
        this.listing={
            full:[[],[],[],[],[],[],[]],
            available:[[],[],[],[],[],[],[]],
            possible:[[],[],[],[],[],[],[]],
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
        this.listing.possible=[[],[],[],[],[],[],[]]
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                let valid=true
                for(let c=0,lc=types.card[this.listing.available[a][b]].prereq.length;c<lc;c++){
                    if(!this.active.includes(findName(types.card[this.listing.available[a][b]].prereq[c],types.card))){
                        valid=false
                        c=lc
                    }
                }
                if(valid){
                    for(let c=0,lc=types.card[this.listing.available[a][b]].mutex.length;c<lc;c++){
                        if(this.active.includes(findName(types.card[this.listing.available[a][b]].mutex[c],types.card))){
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
    outListing(){
        this.convertedListing()
        let result=``
        for(let a=0,la=this.listing.possible.length;a<la;a++){
            result+=(a>0?`\n`:``)+[`Main`,`Variant`,`Starter`,`Side`,`Dessert`,`Customer`,`Franchise`][a]+` (${this.listing.possible[a].length}): `
            for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                result+=(b>0?`, `:``)+types.card[this.listing.possible[a][b]].name
            }
        }
        print(result)
    }
    getOptions(type,args){
        let result=[]
        let temp
        switch(type){
            case 0:
                temp=this.listing.possible[0].slice()
                for(let a=0,la=args[0]+(this.hasCard('Blank Card')?1:0);a<la;a++){
                    let index=floor(random(0,temp.length))
                    result.push(temp[index])
                    temp.splice(index,1)
                }
            break
            case 1:
                let set=[1,1,1]
                if(this.hasCard('Blank Card')){
                    set[floor(random(0,set.length))]++
                }
                let possible=this.listing.possible[5].slice()
                for(let a=0,la=set[0];a<la;a++){
                    if(possible.length>0){
                        let index=floor(random(0,possible.length))
                        result.push(possible[index])
                        possible.splice(index,1)
                    }
                }
                possible=[]
                for(let a=0,la=2;a<la;a++){
                    for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                        for(let c=0,lc=1+a*7;c<lc;c++){
                            possible.push(this.listing.possible[a][b])
                        }
                    }
                }
                for(let a=0,la=set[1];a<la;a++){
                    if(possible.length>0){
                        let index=floor(random(0,possible.length))
                        result.push(possible[index])
                        for(let b=0,lb=possible.length;b<lb;b++){
                            if(possible[b]==result){
                                possible.splice(b,1)
                                b--
                                lb--
                            }
                        }
                    }
                }
                possible=[]
                for(let a=this.operation.dishManager.active[0].length<=0?4:2,la=5;a<la;a++){
                    for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                        possible.push(this.listing.possible[a][b])
                    }
                }
                for(let a=0,la=set[2];a<la;a++){
                    if(possible.length>0){
                        let index=floor(random(0,possible.length))
                        result.push(possible[index])
                        possible.splice(index,1)
                    }
                }
            break
            case 2:
                temp=this.active.slice()
                for(let a=0,la=temp.length;a<la;a++){
                    if(types.card[temp[a]].prereq!=undefined){
                        for(let b=0,lb=types.card[temp[a]].prereq.length;b<lb;b++){
                            if(!args[1].includes(types.card[temp[a]].prereq[b])){
                                b=lb
                                temp.splice(a,1)
                                a--
                                la--
                            }
                        }
                    }
                }
                for(let a=0,la=args[0]+(this.hasCard('Blank Card')?1:0);a<la;a++){
                    if(temp.length>0){
                        let index=floor(random(0,temp.length))
                        result.push(temp[index])
                        temp.splice(index,1)
                    }
                }
            break
            case 3:
                temp=this.listing.possible[6].slice()
                for(let a=0,la=args[0]+(this.hasCard('Blank Card')?1:0);a<la;a++){
                    if(temp.length>0){
                        let index=floor(random(0,temp.length))
                        result.push(temp[index])
                        temp.splice(index,1)
                    }
                }
            break
        }
        return result
    }
    addCard(card){
        this.active.push(card)
        let customerMult=types.card[card].customerMult
        if(customerMult.length==2){
            customerMult=customerMult[this.operation.dayManager.day==0?1:0]
        }
        this.operation.entityManager.customer.internal*=customerMult
        if(types.card[card].list!=5&&types.card[card].list!=6){
            this.operation.entityManager.sendPackages(types.card[card].wall)
            for(let a=0,la=types.card[card].dish.length;a<la;a++){
                this.operation.dishManager.addDish(findName(types.card[card].dish[a],types.dish))
            }
            for(let a=0,la=types.card[card].wall.length;a<la;a++){
                this.operation.blueprintManager.addEnabled(types.card[card].wall[a])
            }
        }
        this.removeFromList(card)
        this.convertedListing()
        switch(types.card[card].name){
            case 'Individuals':
                this.operation.entityManager.customer.groupSizeMax--
            break
            case 'Large Groups':
                this.operation.entityManager.customer.groupSizeMin++
                this.operation.entityManager.customer.groupSizeMax+=2
            break
            case 'Flexible Groups':
                this.operation.entityManager.customer.groupSizeMin--
                this.operation.entityManager.customer.groupSizeMax++
            break
            case 'Savings':
                this.operation.dayManager.addCurrency(50)
            break
            case 'Bootstrapping':
                this.operation.entityManager.sendPackages(this.operation.blueprintManager.generateSet([[1,2],[1,2]]))
            break
        }
        this.operation.entityManager.calcCustomer()
    }
    removeCard(card){
        if(this.active.includes(card)){
            this.active.splice(this.active.indexOf(card),1)
        }
    }
    removeFirst(){
        if(this.active.length>0){
            let temp=this.active[0]
            this.active.splice(0,1)
            return temp
        }
    }
    hasCard(name){
        return this.active.includes(findName(name,types.card))
    }
}