class dishManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.active=[[],[],[],[],[]]
    }
    addDish(dish){
        this.active[types.dish[dish].type].push(dish)
    }
}