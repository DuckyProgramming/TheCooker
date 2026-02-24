class operation{
    constructor(layer){
        this.layer=layer
        this.scene=''
        this.level=0
        this.player=[]
        this.franchise={full:[],active:[],current:[]}
        this.initialManagers()
        this.initial()
    }
    /*
    save(){
        let composite={
        }
        return composite
    }
    load(composite){
    }
    */
    save(){
        let composite={
            scene:this.scene,
            level:this.level,
            player:this.player,
            dishManager:this.dishManager.save(),
            cardManager:this.cardManager.save(),
            blueprintManager:this.blueprintManager.save(),
            entityManager:this.entityManager.save(),
            dayManager:this.dayManager.save(),
            overlayManager:this.overlayManager.save(),
        }
        return composite
    }
    saveCol(){
        saveStrings([JSON.stringify(this.save())],'theCookerSaveFile','json')
    }
    load(result){
        let composite=JSON.parse(result)

        this.transitionManager.begin(composite.scene)
        this.level=composite.level
        this.player=composite.player
        this.dishManager.load(composite.dishManager)
        this.cardManager.load(composite.cardManager)
        this.blueprintManager.load(composite.blueprintManager)
        this.entityManager.load(composite.entityManager)
        this.dayManager.load(composite.dayManager)
        this.overlayManager.load(composite.overlayManager)
    }
    loadStp(input){
        let file=input.files[0]
        let reader=new FileReader()
        reader.battle=this
        reader.readAsText(file)
        reader.onload=function(){
            this.battle.load(reader.result);
        }
    }
    loadCol(){
        let input=document.createElement('input')
        input.type='file'
        input.battle=this
        input.click()
        input.addEventListener('change',function(){this.battle.loadStp(this)},false)
    }
    generatePlayers(num){
        this.player=[]
        for(let a=0,la=num;a<la;a++){
            this.player.push({color:a+1})
        }
    }
    transition(scene,args){
        switch(scene){
            case 'main':
                if(dev.test){
                    this.level=dev.first?0:types.level.length-1
                }
                this.entityManager.generatePlayers()
                this.entityManager.generateLevel(types.level[this.level],0)
                this.entityManager.spawnOptions(2,0)
            break
            case 'end':
                this.overlayManager.activate(3,[args[0]])
            break
        }
        this.transitionManager.begin(scene)
    }
    transitionComplete(scene){
        switch(scene){
            case 'menu':
                this.interiorManagers()
                this.overlayManager.activate(2,[])
            break
        }
    }
    initialManagers(){
        this.transitionManager=new transitionManager(this.layer,this)
        this.interiorManagers()
        this.overlayManager=new overlayManager(this.layer,this)
    }
    interiorManagers(){
        this.dishManager=new dishManager(this.layer,this)
        this.cardManager=new cardManager(this.layer,this)
        this.blueprintManager=new blueprintManager(this.layer,this)
        this.entityManager=new entityManager(this.layer,this)
        this.dayManager=new dayManager(this.layer,this)
    }
    initial(){
        this.scene='menu'
        this.overlayManager.activate(2,[])
        let result=getItem('DP_THECOOKER_FRANCHISE')
        this.franchise.full=result==null?[]:JSON.parse(result)
        this.getFranchise()
    }
    updateFranchise(franchise){
        this.franchise.full.push(franchise)
        storeItem('DP_THECOOKER_FRANCHISE',JSON.stringify(this.franchise.full))
        this.getFranchise()
    }
    loadFranchise(franchise){
        for(let a=0,la=4;a<la;a++){ 
            this.cardManager.addCard(findName(franchise[a],types.card))
        }
        this.entityManager.sendPackages([franchise[4]])
    }
    getFranchise(){
        this.franchise.active=[]
        let possible=this.franchise.full.slice()
        for(let a=0,la=3;a<la;a++){
            if(possible.length>0){
                let index=floor(random(0,possible.length))
                this.franchise.active.push(possible[index])
                possible.splice(index,1)
            }
        }
    }
    clearFranchise(){
        this.franchise.full=[]
        this.franchise.active=[]
        storeItem('DP_THECOOKER_FRANCHISE',JSON.stringify(this.franchise.full))
    }
    display(){
        switch(this.scene){
            case 'menu':
                this.layer.image(graphics.menu[0],this.layer.width/2,this.layer.height/2,this.layer.width,this.layer.height)
            break
            case 'end':
                this.layer.image(graphics.menu[1],this.layer.width/2,this.layer.height/2,this.layer.width,this.layer.height)
            break
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
        switch(this.scene){
            case 'main':
                this.dayManager.onClick(this.scene,mouse)
            break
        }
        this.overlayManager.onClick(this.scene,mouse)
    }
    onKey(key){
        switch(this.scene){
            case 'main':
                this.dayManager.onKey(this.scene,key)
            break
        }
    }
}