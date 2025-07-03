class entityManager{
    constructor(layer,operation){
        this.layer=layer
        this.operation=operation
        this.tileset=[48,48]
        this.constants={gravity:1.25}
        this.entities={walls:[[],[]],players:[]}
        this.run={fore:[],update:[]}
        this.index={wall:0,enemy:0}
        this.initial()
    }
    initial(){
        for(let a=0,la=this.operation.player.length;a<la;a++){
            this.entities.players.push(new player(this.layer,this,0,0,a,this.operation.player[a]))
        }
    }
    generateLevel(level,entry){
        this.entities.walls=[[],[]]
        let spent=[]
        for(let a=0,la=level.map.length;a<la;a++){
            spent.push([])
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                spent[a].push(false)
            }
        }
        for(let a=0,la=level.map.length;a<la;a++){
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                if(!spent[a][b]){
                    spent[a][b]=true
                    switch(level.map[a][b]){
                        case '.':
                            let total=1
                            for(let c=0,lc=la-a-1;c<lc;c++){
                                if(level.map[a][b]==level.map[a+c+1][b]){
                                    total++
                                    spent[a+c+1][b]=true
                                }else{
                                    c=lc
                                }
                            }
                            this.entities.walls[0].push(new wall(this.layer,this,this.tileset[0]*(b*0.5+0.5),this.tileset[1]*(a*0.5+total*0.5),this.tileset[0],this.tileset[1]*total,findName('Counter',types.wall)))
                        break
                        case '1':
                            if(entry==0){
                                for(let c=0,lc=this.entities.players.length;c<lc;c++){
                                    this.entities.players[c].position.x=this.tileset[0]*(b*0.5+0.5)
                                    this.entities.players[c].position.y=this.tileset[1]*(a*0.5+0.5)
                                }
                            }
                        break
                    }
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
                for(let a=0,la=this.run.fore.length;a<la;a++){
                    for(let b=0,lb=this.run.fore[a][0].length;b<lb;b++){
                        this.run.fore[a][0][b].display(this.run.fore[a][1])
                    }
                }
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