class dishManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[[],[],[],[],[]]
        this.obj=[[],[],[],[],[]]
    }
    addDish(dish){
        this.active[types.dish[dish].type].push(dish)
        for(let a=0,la=types.dish[dish].obj.length;a<la;a++){
            this.obj[types.dish[dish].type].push(types.dish[dish].obj[a])
        }
    }
}