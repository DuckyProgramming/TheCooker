class cardManager{
    constructor(layer,operation){
        this.layer=layer
        this.operation=operation
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
}