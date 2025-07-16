class dishManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[[],[],[],[],[],[]]
        this.obj=[[],[],[],[],[],[]]
        this.disabled=[[],[],[],[],[],[]]
    }
    addDish(dish){
        this.active[types.dish[dish].list].push(dish)
        for(let a=0,la=types.dish[dish].obj.length;a<la;a++){
            switch(types.dish[dish].obj[a].length){
                case 2:
                    this.obj[types.dish[dish].list].push(types.dish[dish].obj[a])
                break
                case 3:
                    this.disabled[types.dish[dish].list].push(types.dish[dish].obj[a])
                break
            }
        }
        this.operation.overlayManager.overlays[1].execute(0,[dish])
        this.operation.overlayManager.activate(1,[0])
        this.updateObj()
    }
    updateObj(){
        for(let a=0,la=this.disabled.length;a<la;a++){
            for(let b=0,lb=this.disabled[a].length;b<lb;b++){
                for(let c=0,lc=this.obj[a].length;c<lc;c++){
                    if(this.obj[a][c][0]==this.disabled[a][b][0]){
                        this.obj[a].push([this.disabled[a][b][1],this.disabled[a][b][2]])
                        this.disabled[a].splice(b,1)
                        b--
                        lb--
                        c=lc
                    }
                }
            }
        }
    }
}