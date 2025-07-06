class dayManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.phase=0
        this.time={main:0,end:7200}
    }
    display(scene){
        switch(scene){
            case 'main':
            break
        }
    }
    update(scene){
        switch(scene){
            case 'main':
                switch(this.phase){
                    case 1:
                        this.time.main++
                        if(this.time.main>=this.time.end){
                        }
                    break
                }
            break
        }
    }
}