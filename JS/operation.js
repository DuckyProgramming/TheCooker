class operation{
    constructor(layer){
        this.layer=layer
        this.scene=''
        this.player=[{color:1},/*{color:2},{color:3}*/]
        this.initialManagers()
    }
    transition(scene,args){
        switch(scene){
            case 'main':
                this.entityManager.generateLevel(args[0],0)
                //this.overlayManager.activate(0,[0])
                this.cardManager.addCard(43)
                ////
                //this.entityManager.spawnBlueprints(5)
                this.entityManager.spawnOptions(1)
                ////
            break
        }
        this.transitionManager.begin(scene)
    }
    initialManagers(){
        this.transitionManager=new transitionManager(this.layer,this)
        this.dishManager=new dishManager(this.layer,this)
        this.cardManager=new cardManager(this.layer,this)
        this.blueprintManager=new blueprintManager(this.layer,this)
        this.entityManager=new entityManager(this.layer,this)
        this.dayManager=new dayManager(this.layer,this)
        this.overlayManager=new overlayManager(this.layer,this)
    }
    display(){
        switch(this.scene){
            case 'main':
                this.layer.background(40)
                this.entityManager.display(this.scene)
                this.dayManager.display(this.scene)
            break
        }
        this.overlayManager.display(this.scene)
        this.transitionManager.display(this.scene)
    }
    update(){
        switch(this.scene){
            case 'main':
                this.entityManager.update(this.scene)
                this.dayManager.update(this.scene)
            break
        }
        this.overlayManager.update(this.scene)
        this.transitionManager.update(this.scene)
    }
    onClick(mouse){
        this.overlayManager.onClick(this.scene,mouse)
    }
}