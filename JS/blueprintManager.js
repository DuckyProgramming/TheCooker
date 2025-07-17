class blueprintManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[]
        this.initial()
    }
    initial(){
        this.listing={
            full:[[],[],[],[]],
            available:[[],[],[],[]],
            possible:[[],[],[],[]],
        }
        for(let a=0,la=types.wall.length;a<la;a++){
            if(types.wall[a].rarity>=0){
                this.listing.full[types.wall[a].rarity].push(a)
                this.listing.available[types.wall[a].rarity].push(a)
            }
        }
        this.enabled=[]
        this.trigger={heat:false}
        this.convertedListing()
    }
    generateSet(set){
        this.priorListing()
        let result=[]
        for(let a=0,la=set.length;a<la;a++){
            let total=[]
            for(let b=0,lb=set[a].length;b<lb;b++){
                for(let c=0,lc=this.listing.possible[set[a][b]].length;c<lc;c++){
                    total.push(this.listing.possible[set[a][b]][c])
                }
            }
            result.push(types.wall[randin(total)].name)
        }
        return result
    }
    addEnabled(wall){
        let type=findName(wall,types.wall)
        if(!this.enabled.includes(type)){
            this.enabled.push(type)
            if(types.wall[type].spec.includes(0)){
                this.trigger.heat=true
            }
        }
    }
    removeFromList(blueprint){
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                if(this.listing.available[a][b]==blueprint){
                    this.listing.available[a].splice(b,1)
                    b--
                    lb--
                }
            }
        }
    }
    priorListing(){
        this.listing.possible=[[],[],[],[]]
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                if(!types.wall[this.listing.available[a][b]].spec.includes(1)){
                    this.listing.possible[a].push(this.listing.available[a][b])
                }
            }
        }
    }
    convertedListing(){
        this.listing.possible=[[],[],[],[]]
        for(let a=0,la=this.listing.available.length;a<la;a++){
            for(let b=0,lb=this.listing.available[a].length;b<lb;b++){
                let valid=true
                for(let c=0,lc=types.wall[this.listing.available[a][b]].prereq.length;c<lc;c++){
                    switch(types.wall[this.listing.available[a][b]].prereq[c]){
                        case 0:
                            if(!this.enabled.includes(this.listing.available[a][b])){
                                valid=false
                            }
                        break
                        case 1:
                            if(!this.trigger.heat){
                                valid=false
                            }
                        break
                    }
                }
                if(valid){
                    this.listing.possible[a].push(this.listing.available[a][b])
                }
            }
        }
    }
    outListing(){
        let result=``
        for(let a=0,la=this.listing.possible.length;a<la;a++){
            result+=(a>0?`\n`:``)+[`Common`,`Uncommon`,`Rare`,`Conditional`][a]+` (${this.listing.possible[a].length}): `
            for(let b=0,lb=this.listing.possible[a].length;b<lb;b++){
                result+=(b>0?`, `:``)+types.wall[this.listing.possible[a][b]].name
            }
        }
        print(result)
    }
    getOptions(type,args){
        this.convertedListing()
        let result=[]
        switch(type){
            case 0:
                for(let a=0,la=this.listing.possible[3].length;a<la;a++){
                    this.listing.possible[this.operation.entityManager.hasWall(this.listing.possible[3][a])?1:0].push(this.listing.possible[3][a])
                }
                let set=[]
                for(let a=0,la=min(3,floor((args[0]+1)/3)+floor(random(0,2.25)));a<la;a++){
                    set.push(1+floor(random(0,1.25)))
                }
                for(let a=0,la=args[1]-set.length;a<la;a++){
                    set.push(0)
                }
                let clumps=[]
                for(let a=0,la=this.listing.possible.length;a<la;a++){
                    clumps.push(this.listing.possible[a].slice())
                }
                for(let a=0,la=set.length;a<la;a++){
                    if(clumps[set[a]].length<=0){
                        set[a]++
                    }
                    if(clumps[set[a]].length>0&&set[a]<=2){
                        let index=floor(random(0,clumps[set[a]].length))
                        result.push(clumps[set[a]][index])
                        clumps[set[a]].splice(index,1)
                    }
                }
            break
            case 1:
                result.push(randin(this.listing.possible[args[0]]))
            break
        }
        return result
    }
    getCardOptions(type,args){
        let result=[]
        switch(type){
            case 0:
                let possible=[]
                for(let a=0,la=types.wall.length;a<la;a++){
                    if(types.wall[a].rarity==args[1]&&!types.wall[a].prereq.includes(0)){
                        possible.push(a)
                    }
                }
                for(let a=0,la=args[0];a<la;a++){
                    let index=floor(random(0,possible.length))
                    result.push(possible[index])
                    possible.splice(index,1)
                }
            break
        }
        return result
    }
}