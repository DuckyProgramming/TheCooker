class entityManager extends manager{
    constructor(layer,operation){
        super(layer,operation)
        this.tileset=[48,48,8]
        this.edge={main:{x:0,y:0},outer:{x:[0,0],y:[0,0]},inside:[]}
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
        this.reroll={cost:10}
        this.updateLadderTrigger=false
        this.initial()
    }
    initial(){
        for(let a=0,la=this.operation.player.length;a<la;a++){
            this.entities.players.push(new player(this.layer,this,this.index.player++,0,0,a,this.operation.player[a]))
        }
    }
    generateLevel(level,entry){
        this.entities.walls=[[]]
        let spent=[]
        for(let a=0,la=level.map.length;a<la;a++){
            spent.push([])
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                spent[a].push(false)
            }
        }
        let layerer=[
            [[],[],[],[]]
        ]
        this.grid=[]
        this.edge.main.x=(level.map[0].length-1)*this.tileset[0]*0.5
        this.edge.main.y=(level.map.length-1)*this.tileset[1]*0.5
        this.view.main.x=this.edge.main.x*0.5
        this.view.main.y=this.edge.main.y*0.5
        this.edge.outer.x=[-this.tileset[2],this.edge.main.x+this.tileset[2]]
        this.edge.outer.y=[-this.tileset[2],this.edge.main.y+this.tileset[2]]
        this.edge.inside=level.inside
        this.entities.walls[0].push(new wall(this.layer,this,this.index.wall++,this.edge.main.x*0.5,this.edge.main.y*0.5,[0,0],this.edge.main.x+this.tileset[2],this.edge.main.y+this.tileset[2],findName('Sidewalk',types.wall)))
        for(let a=0,la=level.floor[0].length;a<la;a++){
            this.entities.walls[0].push(new wall(this.layer,this,this.index.wall++,this.edge.main.x*0.5+level.floor[0][a][0]*this.tileset[0]*0.5,this.edge.main.y*0.5+level.floor[0][a][1]*this.tileset[1]*0.5,[0,0],this.edge.main.x+this.tileset[2]-(abs(level.floor[0][a][0])+level.floor[0][a][2])*this.tileset[0],this.edge.main.y+this.tileset[2]-(abs(level.floor[0][a][1])+level.floor[0][a][3])*this.tileset[1],findName('Floor',types.wall)))
        }
        for(let a=0,la=level.floor[1].length;a<la;a++){
            this.entities.walls[0].push(new wall(this.layer,this,this.index.wall++,this.edge.main.x*0.5+level.floor[1][a][0]*this.tileset[0]*0.5,this.edge.main.y*0.5+level.floor[1][a][1]*this.tileset[1]*0.5,[0,0],this.edge.main.x-(abs(level.floor[1][a][0])+level.floor[1][a][2])*this.tileset[0],this.edge.main.y-(abs(level.floor[1][a][1])+level.floor[1][a][3])*this.tileset[1],findName('Kitchen Floor',types.wall)))
        }
        for(let a=0,la=level.map.length;a<la;a++){
            this.grid.push([])
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                this.grid[a].push(0)
            }
        }
        for(let a=0,la=level.wall.length;a<la;a++){
            this.grid[level.wall[a][1]][level.wall[a][0]]=1
            let type=findName(level.wall[a][2],types.wall)
            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*level.wall[a][0]*0.5,this.tileset[1]*level.wall[a][1]*0.5,[level.wall[a][1],level.wall[a][0]],-1,-1,type))
            for(let b=0,lb=level.wall[a][3];b<lb;b++){
                last(layerer[0][types.wall[type].level]).rotate()
            }
        }
        for(let a=0,la=level.map.length;a<la;a++){
            for(let b=0,lb=level.map[a].length;b<lb;b++){
                if(!spent[a][b]){
                    spent[a][b]=true
                    let type
                    let shift
                    switch(level.map[a][b]){
                        case '.':
                            this.grid[a][b]=1
                            type=findName('Counter',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,[a,b],-1,-1,type))
                        break
                        case '_':
                            type=findName('High Wall',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,[0,0],this.tileset[0]+this.tileset[2],this.tileset[2],type))
                        break
                        case '|':
                            type=findName('High Wall',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,[0,0],this.tileset[2],this.tileset[1]+this.tileset[2],type))
                        break
                        case '-':
                            shift=[0,0]
                            if(level.map[a-1][b-1]=='|'&&level.map[a+1][b-1]=='|'){
                                shift[1]++
                            }
                            if(level.map[a-1][b+1]=='|'&&level.map[a+1][b+1]=='|'){
                                shift[0]++
                            }
                            type=findName('Wall',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5-shift[0]*2+shift[1]*2,this.tileset[1]*a*0.5,[0,0],this.tileset[0]+this.tileset[2]-shift[0]*4-shift[1]*4,this.tileset[2],type))
                        break
                        case 'i':
                            shift=[0,0]
                            if(level.map[a-1][b-1]=='_'&&level.map[a-1][b+1]=='_'){
                                shift[1]++
                            }
                            if(level.map[a+1][b-1]=='_'&&level.map[a+1][b+1]=='_'){
                                shift[0]++
                            }
                            type=findName('Wall',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5-shift[0]*2+shift[1]*2,[0,0],this.tileset[2],this.tileset[1]+this.tileset[2]-shift[0]*4-shift[1]*4,type))
                        break
                        case 'D':
                            this.grid[a][b]=1
                            type=findName('Dining Table',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,[a,b],-1,-1,type))
                        break
                        case 'T':
                            this.grid[a][b]=1
                            type=findName('Trash Can',types.wall)
                            layerer[0][types.wall[type].level].push(new wall(this.layer,this,this.index.wall++,this.tileset[0]*b*0.5,this.tileset[1]*a*0.5,[a,b],-1,-1,type))
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
        for(let a=0,la=layerer.length;a<la;a++){
            for(let b=0,lb=layerer[a].length;b<lb;b++){
                for(let c=0,lc=layerer[a][b].length;c<lc;c++){
                    this.entities.walls[a].push(layerer[a][b][c])
                    layerer[a][b].splice(c,1)
                    c--
                    lc--
                }
            }
        }
        this.run.fore=[[this.entities.walls[0],0],[this.entities.players,0],[this.entities.walls[0],1]]
        if(dev.bound){
            this.run.fore.push([this.entities.walls[0],-1],[this.entities.players,-1])
        }
        this.run.update=[this.entities.walls[0],this.entities.players]
        this.updateLadder()
    }
    updateLadder(){
        for(let a=0,la=1;a<la;a++){
            for(let b=0,lb=this.entities.walls.length;b<lb;b++){
                for(let c=0,lc=this.entities.walls[b].length;c<lc;c++){
                    for(let d=0,ld=this.entities.walls.length;d<ld;d++){
                        this.entities.walls[b][c].ladder(a,this.entities.walls[d])
                    }
                }
            }
        }
    }
    hasWall(type){
        for(let a=0,la=this.entities.walls.length;a<la;a++){
            for(let b=0,lb=this.entities.walls[a].length;b<lb;b++){
                if(this.entities.walls[a][b]==type){
                    return ture
                }
            }
        }
        return false
    }
    insertWall(wall,set){
        for(let a=0,la=this.entities.walls[set].length;a<la;a++){
            if(this.entities.walls[set][a].level>wall.level){
                this.entities.walls[set].splice(a,0,wall)
                return a
            }
        }
        this.entities.walls[set].push(wall)
        return this.entities.walls[set].length-1
    }
    getEmptyGrid(type){
        let possible
        switch(type){
            case 0:
                possible=[]
                for(let a=0,la=(this.grid.length-1)/2;a<la;a++){
                    for(let b=0,lb=(this.grid[a].length-1)/2;b<lb;b++){
                        if(this.grid[a*2+1][b*2+1]==0){
                            let valid=true
                            for(let c=0,lc=this.entities.players.length;c<lc;c++){
                                if(dist(this.tileset[0]*(b+0.5),this.tileset[1]*(a+0.5),this.entities.players[c].position.x,this.entities.players[c].position.y)<50){
                                    valid=false
                                    c=lc
                                }
                            }
                            if(valid){
                                possible.push([a,b])
                            }
                        }
                    }
                }
                return possible
            case 1:
                possible=[]
                for(let a=this.edge.inside[1],la=(this.grid.length-1)/2-this.edge.inside[3];a<la;a++){
                    for(let b=this.edge.inside[0],lb=(this.grid[a].length-1)/2-this.edge.inside[2];b<lb;b++){
                        if(this.grid[a*2+1][b*2+1]==0){
                            let valid=true
                            for(let c=0,lc=this.entities.players.length;c<lc;c++){
                                if(dist(this.tileset[0]*(b+0.5),this.tileset[1]*(a+0.5),this.entities.players[c].position.x,this.entities.players[c].position.y)<50){
                                    valid=false
                                    c=lc
                                }
                            }
                            if(valid){
                                possible.push([a,b])
                            }
                        }
                    }
                }
                return possible
        }
    }
    sendPackages(set){
        let possible=this.getEmptyGrid(1)
        for(let a=0,la=set.length;a<la;a++){
            let inside=findName(set[a],types.wall)
            let total=1
            while(a<la-1&&set[a]==set[a+1]){
                a++
                total++
            }
            for(let b=0,lb=this.entities.walls.length;b<lb;b++){
                for(let c=0,lc=this.entities.walls[b].length;c<lc;c++){
                    if(this.entities.walls[b][c].type==inside){
                        total--
                    }
                }
            }
            let edit=false
            while(total>0){
                let index=floor(random(0,possible.length))
                let pos=this.insertWall(new wall(this.layer,this,this.index.wall++,this.tileset[0]*(possible[index][1]+0.5),this.tileset[1]*(possible[index][0]+0.5),possible[index],-1,-1,findName('Crate',types.wall)),0)
                this.entities.walls[0][pos].contain=inside
                this.grid[possible[index][0]*2+1][possible[index][1]*2+1]=1
                possible.splice(index,1)
                total--
            }
            if(edit){
                this.updateLadderTrigger=true
            }
        }
    }
    spawnBlueprints(num){
        let ticker=0
        for(let a=(this.grid.length-1)/2-1,la=0;a>=la;a--){
            for(let b=0,lb=(this.grid[a].length-1)/2;b<lb;b++){
                if(this.grid[a][b]==0){
                    let pos=this.insertWall(new wall(this.layer,this,this.index.wall++,this.tileset[0]*(b+0.5),this.tileset[1]*(a+0.5),[a*2+1,b*2+1],-1,-1,findName('Option',types.wall)),0)
                    this.entities.walls[0][pos].contain=ticker
                    this.grid[a*2+1][b*2+1]=1
                    ticker++
                    if(ticker>=2){
                        a=la
                        b=lb
                    }
                }
            }
        }
        let possible=this.getEmptyGrid(1)
        let set=this.operation.blueprintManager.getOptions(0,[num])
        for(let a=0,la=set.length;a<la;a++){
            let index=floor(random(0,possible.length))
            let pos=this.insertWall(new wall(this.layer,this,this.index.wall++,this.tileset[0]*(possible[index][1]+0.5),this.tileset[1]*(possible[index][0]+0.5),[possible[index][0]*2+1,possible[index][1]*2+1],-1,-1,findName('Blueprint',types.wall)),0)
            this.entities.walls[0][pos].contain=set[a]
            this.grid[possible[index][0]*2+1][possible[index][1]*2+1]=1
            possible.splice(index,1)
        }
    }
    clearWalls(names){
        let total=0
        for(let a=0,la=this.entities.walls.length;a<la;a++){
            for(let b=0,lb=this.entities.walls[a].length;b<lb;b++){
                if(names.includes(this.entities.walls[a][b].name)){
                    total++
                    this.emptySpot(this.entities.walls[a][b])
                    this.entities.walls[a][b].removeMark=true
                }
            }
        }
        return total
    }
    rerollBlueprints(){
        this.spawnBlueprints(this.clearWalls(['Blueprint','Option']))
    }
    spawnGridWall(loc,type,args){
        for(let a=0,la=(this.grid.length-1)/2;a<la;a++){
            for(let b=0,lb=(this.grid[a].length-1)/2;b<lb;b++){
                if(this.grid[a*2+1][b*2+1]==0){
                    let shift=[0,0]
                    if(a>0&&this.grid[a*2-1][b*2+1]==0){
                        shift[1]--
                    }else if(a<la-1&&this.grid[a*2+3][b*2+1]==0){
                        shift[1]++
                    }
                    if(b>0&&this.grid[a*2+1][b*2-1]==0){
                        shift[0]--
                    }else if(b<lb-1&&this.grid[a*2+1][b*2+3]==0){
                        shift[0]++
                    }
                    if(inPointBox(loc,{position:{x:this.tileset[0]*(b+0.5)+shift[0]*4,y:this.tileset[1]*(a+0.5)+shift[1]*4},width:this.tileset[0]+abs(shift[0])*8,height:this.tileset[1]+abs(shift[1])*8})){
                        for(let c=0,lc=this.entities.players.length;c<lc;c++){
                            if(inCircleBox(this.entities.players[c],{position:{x:this.tileset[0]*(b+0.5),y:this.tileset[1]*(a+0.5)},width:this.tileset[0]-8,height:this.tileset[1]-8})){
                                return false
                            }
                        }
                        let pos=this.insertWall(new wall(this.layer,this,this.index.wall++,this.tileset[0]*(b+0.5),this.tileset[1]*(a+0.5),[a*2+1,b*2+1],-1,-1,type),0)
                        for(let a=0,la=args.length;a<la;a++){
                            switch(args[a][0]){
                                case 0:
                                    this.entities.walls[0][pos].contain=args[a][1]
                                break
                            }
                        }
                        this.grid[a*2+1][b*2+1]=1
                        this.updateLadderTrigger=true
                        return true
                    }
                }
            }
        }
        return false
    }
    emptySpot(wall){
        if(wall.gridPos[0]>=0&&wall.gridPos[1]>=0){
            this.grid[wall.gridPos[0]][wall.gridPos[1]]=0
        }
    }
    calcCustomer(){
        this.customer.group=round(this.customer.internal/(this.customer.groupSizeMin+this.customer.groupSizeMax)*2)
    }
    display(scene){
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
    update(scene){
        switch(scene){
            case 'main':
                for(let a=0,la=this.entities.players.length;a<la;a++){
                    this.entities.players[a].active=!this.operation.overlayManager.anyActive()
                }
                for(let a=0,la=this.run.update.length;a<la;a++){
                    for(let b=0,lb=this.run.update[a].length;b<lb;b++){
                        this.run.update[a][b].update()
                        if(this.run.update[a][b].remove){
                            if(a==0){
                                this.grid[this.run.update[a][b].gridPos[0]][this.run.update[a][b].gridPos[1]]=0
                                this.updateLadderTrigger=true
                            }
                            this.run.update[a].splice(b,1)
                            b--
                            lb--
                        }
                    }
                }
                if(this.updateLadderTrigger){
                    this.updateLadder()
                }
            break
        }
    }
}