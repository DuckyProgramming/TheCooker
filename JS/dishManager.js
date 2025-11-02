class dishManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[[],[],[],[],[],[]]
        this.obj=[[],[],[],[],[],[]]
        this.disabled=[[],[],[],[],[],[]]
        this.sets=[[],[],[],[],[],[]]
        this.total=0
    }
    save(){
        let composite={
            active:this.active,
            obj:this.obj,
            disabled:this.disabled,
            sets:this.sets,
            total:this.total,
        }
        return composite
    }
    load(composite){
        this.active=composite.active
        this.obj=composite.obj
        this.disabled=composite.disabled
        this.sets=composite.sets
        this.total=composite.total
    }
    addDish(dish){
        if(this.active[types.dish[dish].list].length==0){
            this.total++
            if(this.total==2||this.total==3||this.total==4){
                this.operation.entityManager.customer.internal*=0.9
                this.operation.entityManager.calcCustomer()
            }
        }
        this.active[types.dish[dish].list].push(dish)
        for(let a=0,la=types.dish[dish].obj.length;a<la;a++){
            switch(types.dish[dish].obj[a].length){
                case 2:
                    this.obj[types.dish[dish].list].push([...types.dish[dish].obj[a].slice(),types.dish[dish].group])
                break
                case 3:
                    this.disabled[types.dish[dish].list].push([...types.dish[dish].obj[a].slice(),types.dish[dish].group])
                break
            }
        }
        this.operation.overlayManager.overlays[1].execute(0,[dish])
        this.operation.overlayManager.activate(1,[0])
        this.updateObj()
        this.updateSets()
    }
    getSet(type){
        let display=[]
        for(let a=0,la=this.operation.entityManager.entities.walls.length;a<la;a++){
            for(let b=0,lb=this.operation.entityManager.entities.walls[a].length;b<lb;b++){
                let c=this.operation.entityManager.entities.walls[a][b]
                if(c.name=='Display Stand'&&c.item!=-1){
                    for(let d=0,ld=this.sets[type].length;d<ld;d++){
                        for(let e=0,le=this.sets[type][d].obj.length;e<le;e++){
                            if(this.sets[type][d].obj[e][0]==c.item.name){
                                display.push(this.sets[type][d].obj[e])
                            }
                        }
                    }
                }
            }
        }
        if(display.length>0&&random(0,1)>0.75**display.length){
            return randin(display)
        }
        let index=floor(random(0,this.sets[type].length))
        return randin(this.sets[type][index].obj)
    }
    updateObj(){
        for(let a=0,la=this.disabled.length;a<la;a++){
            for(let b=0,lb=this.disabled[a].length;b<lb;b++){
                for(let c=0,lc=this.obj[a].length;c<lc;c++){
                    if(this.obj[a][c][0]==this.disabled[a][b][0]){
                        this.obj[a].push(this.disabled[a][b].slice(1))
                        this.disabled[a].splice(b,1)
                        b--
                        lb--
                        c=lc
                    }
                }
            }
        }
    }
    updateSets(){
        this.sets=[[],[],[],[],[],[]]
        for(let a=0,la=this.obj.length;a<la;a++){
            for(let b=0,lb=this.obj[a].length;b<lb;b++){
                let valid=true
                for(let c=0,lc=this.sets[a].length;c<lc;c++){
                    if(this.sets[a][c].group==last(this.obj[a][b])){
                        this.sets[a][c].obj.push(this.obj[a][b].slice(0,-1))
                        valid=false
                        c=lc
                    }
                }
                if(valid){
                    this.sets[a].push({group:last(this.obj[a][b]),obj:[this.obj[a][b].slice(0,-1)]})
                }
            }
        }
    }
}