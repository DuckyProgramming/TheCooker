class overlayManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.overlays=[]
        this.active=[]
        for(let a=0,la=6;a<la;a++){
            this.overlays.push(new overlay(this.layer,this,this.layer.width/2,this.layer.height/2,a,[]))
        }
        /*
        0-card choice
        1-view recipe
        2-main menu
        3-end screen
        4-choose franchise from menu
        5-controls rebind
        */
    }
    save(){
        let composite={
            overlays:[],
            active:this.active,
        }
        this.overlays.forEach(overlay=>composite.overlays.push(overlay.save()))
        return composite
    }
    load(composite){
        for(let a=0,la=composite.overlays.length;a<la;a++){
            this.overlays[a].load(composite.overlays[a])
        }
        this.active=composite.active
    }
    anyActive(){
        return this.active.length>0
    }
    activate(overlay,args){
        if(overlay<this.overlays.length&&!this.overlays[overlay].active){
            this.overlays[overlay].active=true
            this.overlays[overlay].activate(args)
            this.overlays[overlay].remove=false
            this.active.push(overlay)
        }
    }
    closeAll(){
        for(let a=0,la=this.active.length;a<la;a++){
            this.overlays[this.active[a]].active=false
        }
    }
    reset(){
        this.overlays.forEach((overlay)=>{overlay.reset()})
    }
    display(scene){
        switch(scene){
            default:
                for(let a=0,la=this.active.length;a<la;a++){
                    this.overlays[this.active[a]].display()
                }
            break
        }
    }
    update(scene){
        super.update()
        switch(scene){
            default:
                for(let a=0,la=this.active.length;a<la;a++){
                    this.overlays[this.active[a]].update(a==0)
                    if(this.overlays[this.active[a]].remove){
                        this.active.splice(a,1)
                        a--
                        la--
                    }
                }
            break
        }
    }
    onClick(scene,mouse){
        switch(scene){
            default:
                for(let a=0,la=this.active.length;a<la;a++){
                    this.overlays[this.active[a]].onClick(mouse)
                }
            break
        }
    }
}