class layout extends located{
    constructor(layer,parent,x,y,type){
        super(layer,x,y,{main:0,trigger:true,speed:10})
        this.parent=parent
        this.type=type
        this.floor=types.level[this.type].floor
        this.inside=types.level[this.type].inside
        this.map=types.level[this.type].map
        this.width=200
        this.height=200
        this.size=1
        this.initial()
    }
    initial(){
        this.image=createGraphics(160,160)
        setupLayer(this.image)
        this.image.translate(80,80)
        this.image.scale(min(30/(this.map[0].length-1),30/(this.map.length-1)))
        this.image.translate(-(this.map[0].length-1+this.inside[0]*2-this.inside[2]*2)/2*5,-(this.map.length-1+this.inside[1]*2-this.inside[3]*2)/2*5)
        this.image.fill(160,150,140)
        for(let a=0,la=this.floor[0].length;a<la;a++){
            this.image.rect(
                2.5*(this.map[0].length-1)+this.floor[0][a][0]*5,
                2.5*(this.map.length-1)+this.floor[0][a][1]*5,
                5*(this.map[0].length-1)+2-(abs(this.floor[0][a][0])+this.floor[0][a][2])*10,
                5*(this.map.length-1)+2-(abs(this.floor[0][a][1])+this.floor[0][a][3])*10
            )
        }
        this.image.fill(165)
        for(let a=0,la=this.floor[1].length;a<la;a++){
            this.image.rect(
                2.5*(this.map[0].length-1)+this.floor[1][a][0]*5,
                2.5*(this.map.length-1)+this.floor[1][a][1]*5,
                5*(this.map[0].length-1)-(abs(this.floor[1][a][0])+this.floor[1][a][2])*10,
                5*(this.map.length-1)-(abs(this.floor[1][a][1])+this.floor[1][a][3])*10
            )
        }
        this.image.fill(150,150,180)
        for(let a=0,la=this.floor[1].length;a<la;a++){
            for(let b=0,lb=(this.map[0].length-1)-(abs(this.floor[1][a][0])+this.floor[1][a][2])*2;b<lb;b++){
                for(let c=0,lc=(this.map.length-1)-(abs(this.floor[1][a][1])+this.floor[1][a][3])*2;c<lc;c++){
                    if((b+c)%2==0){
                        this.image.rect(
                            2.5*(this.map[0].length-1)+this.floor[1][a][0]*5+even(b,lb)*5,
                            2.5*(this.map.length-1)+this.floor[1][a][1]*5+even(c,lc)*5,
                            5,5
                        )
                    }
                }
            }
        }
        this.image.fill(120,70,60)
        let shift
        for(let a=0,la=this.map.length;a<la;a++){
            for(let b=0,lb=this.map[a].length;b<lb;b++){
                switch(this.map[a][b]){
                    case '-':
                        shift=[this.map[a-1][b-1]=='|'&&this.map[a+1][b-1]=='|'?1:0,this.map[a-1][b+1]=='|'&&this.map[a+1][b+1]=='|'?1:0]
                        this.image.rect(b*5+shift[0]*0.5-shift[1]*0.5,a*5,13-shift[0]-shift[1],3,1.5)
                    break
                    case 'i':
                        shift=[this.map[a-1][b-1]=='_'&&this.map[a-1][b+1]=='_'?1:0,this.map[a+1][b-1]=='_'&&this.map[a+1][b+1]=='_'?1:0]
                        this.image.rect(b*5,a*5+shift[0]*0.5-shift[1]*0.5,3,13-shift[0]-shift[1],1.5)
                    break
                }
            }
        }
        this.image.fill(100,90,90)
        for(let a=0,la=this.map.length;a<la;a++){
            for(let b=0,lb=this.map[a].length;b<lb;b++){
                switch(this.map[a][b]){
                    case '_':
                        this.image.rect(b*5,a*5,12,2,1)
                    break
                    case '|':
                        this.image.rect(b*5,a*5,2,12,1)
                    break
                }
            }
        }
        setupLayer(this.image)
    }
    display(layer=this.layer){
        layer.push()
        layer.translate(this.position.x,this.position.y)
        layer.scale(this.size)
        layer.fill(225,this.fade.main)
        layer.stroke(150,this.fade.main)
        layer.strokeWeight(5)
        layer.rect(0,0,this.width-5,this.height-5,10)
        layer.tint(255,this.fade.main)
        layer.image(this.image,0,0)
        layer.fill(225,this.fade.main)
        layer.stroke(0,this.fade.main)
        layer.strokeWeight(2)
        layer.textSize(25)
        layer.text(`${(this.map[0].length-1)/2-abs(this.inside[0])-abs(this.inside[2])}x${(this.map.length-1)/2-abs(this.inside[1])-abs(this.inside[3])}`,0,0)
        layer.pop()
    }
    update(){
        super.update()
    }
}