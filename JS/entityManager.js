class entityManager{
    constructor(layer,operation){
        this.layer=layer
        this.operation=operation
        this.tileset=[48,48,8]
        this.edge={main:{x:0,y:0},outer:{x:[0,0],y:[0,0]}}
        this.constants={gravity:1.25}
        this.entities={walls:[[],[]],players:[]}
        this.run={fore:[],update:[]}
        this.view={
            main:{x:0,y:0,scale:1},
            hold:{x:0,y:0,scale:1},
            target:{x:0,y:0,scale:1},
            anim:0
        }
        this.customer={internal:8,groupSizeMin:1,groupSizeMax:1,group:0}
        this.index={player:0,wall:0}
        this.initial()
    }
    initial(){
        for(let a=0,la=this.operation.player.length;a<la;a++){
            this.entities.players.push(new player(this.layer,this,this.index.player++,0,0,a,this.operation.player[a]))
        }
    }
    generateLevel(level,entry){
        this.entities.walls=[[],[],[]]
        let spent=[]
        for(let a=0,la=level.map.length;a<la;a++){
            spent.push([])
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                spent[a].push(false)
            }
        }
        let layerer=[
            [[],[],[]]
        ]
        this.edge.main.x=(level.map[0].length-1)*this.tileset[0]*0.5
        this.edge.main.y=(level.map.length-1)*this.tileset[1]*0.5
        this.view.main.x=this.edge.main.x*0.5
        this.view.main.y=this.edge.main.y*0.5
        this.edge.outer.x=[-this.tileset[2],this.edge.main.x+this.tileset[2]]
        this.edge.outer.y=[-this.tileset[2],this.edge.main.y+this.tileset[2]]
        this.entities.walls[0].push(new wall(this.layer,this,this.index,this.edge.main.x*0.5,this.edge.main.y*0.5,this.edge.main.x+this.tileset[2],this.edge.main.y+this.tileset[2],findName('Sidewalk',types.wall)))
        for(let a=0,la=level.floor[0].length;a<la;a++){
            this.entities.walls[0].push(new wall(this.layer,this,this.index,this.edge.main.x*0.5+level.floor[0][a][0]*this.tileset[0]*0.5,this.edge.main.y*0.5+level.floor[0][a][1]*this.tileset[1]*0.5,this.edge.main.x+this.tileset[2]-abs(level.floor[0][a][0])*this.tileset[0],this.edge.main.y+this.tileset[2]-abs(level.floor[0][a][1])*this.tileset[1],findName('Floor',types.wall)))
        }
        for(let a=0,la=level.floor[1].length;a<la;a++){
            this.entities.walls[0].push(new wall(this.layer,this,this.index,this.edge.main.x*0.5+level.floor[1][a][0]*this.tileset[0]*0.5,this.edge.main.y*0.5+level.floor[1][a][1]*this.tileset[1]*0.5,this.edge.main.x-abs(level.floor[1][a][0])*this.tileset[0],this.edge.main.y-abs(level.floor[1][a][1])*this.tileset[1],findName('Kitchen Floor',types.wall)))
        }
        for(let a=0,la=level.map.length;a<la;a++){
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                if(!spent[a][b]){
                    spent[a][b]=true
                    let shift
                    switch(level.map[a][b]){
                        case '.':
                            layerer[0][2].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,-1,-1,findName('Counter',types.wall)))
                        break
                        case '_':
                            layerer[0][1].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,this.tileset[0]+this.tileset[2],this.tileset[2],findName('High Wall',types.wall)))
                        break
                        case '|':
                            layerer[0][1].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,this.tileset[2],this.tileset[1]+this.tileset[2],findName('High Wall',types.wall)))
                        break
                        case '-':
                            shift=[0,0]
                            if(level.map[a-1][b-1]=='|'&&level.map[a+1][b-1]=='|'){
                                shift[1]++
                            }
                            if(level.map[a-1][b+1]=='|'&&level.map[a+1][b+1]=='|'){
                                shift[0]++
                            }
                            layerer[0][0].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5-shift[0]*2+shift[1]*2,this.tileset[1]*a*0.5,this.tileset[0]+this.tileset[2]-shift[0]*4-shift[1]*4,this.tileset[2],findName('Wall',types.wall)))
                        break
                        case 'i':
                            shift=[0,0]
                            if(level.map[a-1][b-1]=='_'&&level.map[a-1][b+1]=='_'){
                                shift[1]++
                            }
                            if(level.map[a+1][b-1]=='_'&&level.map[a+1][b+1]=='_'){
                                shift[0]++
                            }
                            layerer[0][0].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5-shift[0]*2+shift[1]*2,this.tileset[2],this.tileset[1]+this.tileset[2]-shift[0]*4-shift[1]*4,findName('Wall',types.wall)))
                        break
                        case 'T':
                            layerer[0][2].push(new wall(this.layer,this,this.index,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,-1,-1,findName('Trash Can',types.wall)))
                        break
                        case '1':
                            if(entry==0){
                                for(let c=0,lc=this.entities.players.length;c<lc;c++){
                                    this.entities.players[c].position.x=this.tileset[0]*(b*0.5+even(c,lc))
                                    this.entities.players[c].position.y=this.tileset[1]*a*0.5
                                }
                            }
                        break
                    }
                }
            }
        }
        let layerset=[
            [2,0,1]
        ]
        for(let a=0,la=layerer.length;a<la;a++){
            for(let b=0,lb=layerset[a].length;b<lb;b++){
                for(let c=0,lc=layerer[a][layerset[a][b]].length;c<lc;c++){
                    this.entities.walls[a].push(layerer[a][layerset[a][b]][c])
                    layerer[a][layerset[a][b]].splice(c,1)
                    c--
                    lc--
                }
            }
        }
        this.run.fore=[[this.entities.walls[0],0],[this.entities.players,0],[this.entities.walls[1],0]]
        if(dev.bound){
            this.run.fore.push([this.entities.walls[0],-1],[this.entities.players,-1],[this.entities.walls[1],-1])
        }
        this.run.update=[this.entities.walls[0],this.entities.players,this.entities.walls[1]]
        for(let a=0,la=8;a<la;a++){
            for(let b=0,lb=this.entities.walls.length;b<lb;b++){
                for(let c=0,lc=this.entities.walls[b].length;c<lc;c++){
                    for(let d=0,ld=this.entities.walls.length;d<ld;d++){
                        this.entities.walls[b][c].ladder(a,this.entities.walls[d])
                    }
                }
            }
            for(let b=0,lb=this.entities.walls.length;b<lb;b++){
                for(let c=0,lc=this.entities.walls[b].length;c<lc;c++){
                    if(this.entities.walls[b][c].remove){
                        this.entities.walls[b].splice(c,1)
                        c--
                        lc--
                    }
                }
            }
        }
    }
    display(scene,args){
        switch(scene){
            case 'main':
                this.layer.push()
                this.layer.translate(-this.view.main.x,-this.view.main.y)
                this.layer.scale(this.view.main.scale)
                this.layer.translate(this.layer.width/2,this.layer.height/2)
                for(let a=0,la=this.run.fore.length;a<la;a++){
                    for(let b=0,lb=this.run.fore[a][0].length;b<lb;b++){
                        this.run.fore[a][0][b].display(this.run.fore[a][1])
                    }
                }
                this.layer.pop()
            break
        }
    }
    update(scene,args){
        switch(scene){
            case 'main':
                for(let a=0,la=this.run.update.length;a<la;a++){
                    for(let b=0,lb=this.run.update[a].length;b<lb;b++){
                        this.run.update[a][b].update()
                        if(this.run.update[a][b].remove){
                            this.run.update[a].splice(b,1)
                            b--
                            lb--
                        }
                    }
                }
            break
        }
    }
}