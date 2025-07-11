class dishManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[[],[],[],[],[]]
        this.obj=[[],[],[],[],[]]
    }
    addDish(dish){
        this.active[types.dish[dish].type].push(dish)
        this.updateObj()
    }
    updateObj(){
        this.obj=[[],[],[],[],[]]
        for(let a=0,la=this.active.length;a<la;a++){
            for(let b=0,lb=this.active[a].length;b<lb;b++){
                for(let c=0,lc=types.dish[this.active[a][b]].obj.length;c<lc;c++){
                    let obj=types.dish[this.active[a][b]].obj[c]
                    if(obj.length==2){
                        this.obj[a].push(obj)
                    }else{
                        for(let d=0,ld=this.obj[a].length;d<ld;d++){
                            if(this.obj[a][d][0]==obj[0]){
                                this.obj[a].push([obj[1],obj[2]])
                                d=ld
                            }
                        }
                    }
                }
            }
        }
    }
}