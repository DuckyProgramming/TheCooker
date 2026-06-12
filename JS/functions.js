//calculatory
function distPos(p1,p2){
	return dist(p1.position.x,p1.position.y,p2.position.x,p2.position.y)
}
function dirPos(p1,p2){
	return atan2(p2.position.x-p1.position.x,p2.position.y-p1.position.y)
}
function magVec(vec){
	return sqrt(vec.x**2+vec.y**2)
}
function near(value1,value2){
	return abs(value1-value2)<1
}
function pl(value){
	return value!=1?`s`:``
}
function spinControl(base){
	return base<-180?base+360:base>180?base-360:base
}
function spinDirection(base,goal,speed){
	if(
		abs(base-goal)<speed||
		abs(base-goal-360)<speed||
		abs(base-goal+360)<speed
	){
		return goal
	}else if(
		base>goal-540&&base<goal-360||
		base>goal-180&&base<goal||
		base>goal+180&&base<goal+360
	){
		return base+speed
	}else if(
		base>goal-360&&base<goal-180||
		base>goal&&base<goal+180||
		base>goal+360&&base<goal+540
	){
		return base-speed
	}
	return base+speed*(floor(random(0,2))*2-1)
}
function smoothAnim(anim,trigger,minPoint,maxPoint,speed){
	if(trigger&&anim<maxPoint){
		return min(round(anim*speed+1)/speed,maxPoint)
	}
	if(!trigger&&anim>minPoint){
		return max(round(anim*speed-1)/speed,minPoint)
	}
	return anim
}
function elementArray(base,number){
	let result=[]
	for(let a=0,la=number;a<la;a++){
		result.push(base)
	}
	return result
}
function range(start,end){
    return [...Array(end-start).keys()].map(a=>a+start)
}
function even(pos,total){
    return pos-total*0.5+0.5
}
function formatTime(frames){
    return `${floor(frames/3600)%60}:${floor(frames/60)%60<10?`0`:``}${floor(frames/60)%60}`
}
function shuffleArray(array){
    for(let a=0,la=array.length-1;a<la;a++){
        let selector=floor(random(a,la+1))
        if(a!=la){
            let temp=array[a]
            array[a]=array[selector]
            array[selector]=temp
        }
    }
    return array
}
function randin(array){
    return array[floor(random(0,array.length))]
}
function last(array){
    return array[array.length-1]
}
function lastKey(array,key){
    return array[array.length-key]
}
function numLength(num){
    let value=num
    let len=1
    while(value>=10){
        value=floor(value/10)
        len++
    }
    return len
}
function findName(name,list){
	for(let a=0,la=list.length;a<la;a++){
		if(list[a].name==name){
			return a
		}
	}
    throw new Error(`findName Fail: ${name}`)
	return -1
}
function updateMouse(layer,scale){
	inputs.mouse.base.x=mouseX
	inputs.mouse.base.y=mouseY
	inputs.mouse.rel.x=(inputs.mouse.base.x-width/2)/scale+layer.width/2
	inputs.mouse.rel.y=(inputs.mouse.base.y-height/2)/scale+layer.height/2
}
//operational
function boxify(x,y,width,height){
	return {position:{x:x,y:y},width:width,height:height}
}
function onSegment(p,q,r){ 
    return q.x<=max(p.x,r.x)&&q.x>=min(p.x, r.x)&&q.y<=max(p.y,r.y)&&q.y>=min(p.y, r.y)
}
function orientPoint(p,q,r){ 
    s=(q.y-p.y)*(r.x-q.x)-(q.x-p.x)*(r.y-q.y) 
    return s==0?0:s>0?1:2
}
function intersect(p1,q1,p2,q2){
    o1=orientPoint(p1,q1,p2)
    o2=orientPoint(p1,q1,q2)
    o3=orientPoint(p2,q2,p1)
    o4=orientPoint(p2,q2,q1)
    return o1!=o2&&o3!=o4||
    o1==0&&onSegment(p1,p2,q1)||
    o2==0&&onSegment(p1,q2,q1)||
    o3==0&&onSegment(p2,p1,q2)||
    o4==0&&onSegment(p2,q1,q2)
}
function intersectKey(p1,q1,p2,q2){
    let ud=((q2.y-p2.y)*(q1.x-p1.x)-(q2.x-p2.x)*(q1.y-p1.y))
    let ua=((q2.x-p2.x)*(p1.y-p2.y)-(q2.y-p2.y)*(p1.x-p2.x))/ud
    return {x:p1.x+ua*(q1.x-p1.x),y:p1.y+ua*(q1.y-p1.y)}
}
function inPointBox(point,box){
    return point.position.x>box.position.x-box.width/2&&point.position.x<box.position.x+box.width/2&&point.position.y>box.position.y-box.height/2&&point.position.y<box.position.y+box.height/2
}
function inCircleBox(circle,box){
    return dist(circle.position.x,circle.position.y,constrain(circle.position.x,box.position.x-box.width/2,box.position.x+box.width/2),constrain(circle.position.y,box.position.y-box.height/2,box.position.y+box.height/2))<circle.radius
}
function inBoxBox(box1,box2){
    return box1.position.x>box2.position.x-box1.width/2-box2.width/2&&box1.position.x<box2.position.x+box1.width/2+box2.width/2&&box1.position.y>box2.position.y-box1.height/2-box2.height/2&&box1.position.y<box2.position.y+box1.height/2+box2.height/2
}
function basicCollideBoxBox(static,mobile){
    return abs(static.poition.y-mobile.position.y)/abs(static.poition.x-mobile.position.x)>static.height/static.width?(mobile.position.y>static.position.y?0:2):(mobile.position.x>static.position.x?1:3)
}
function collideBoxBox(static,mobile){
    for(let a=0,la=static.boundary.length;a<la;a++){
        for(let b=0,lb=static.boundary[a].length;b<lb;b++){
            if(a<=3){
                if(intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2*(a==2?1:-1),y:static.boundary[a][b][0].y+mobile.height/2*(a==0?1:-1)},
                    {x:static.boundary[a][b][1].x+mobile.width/2*(a!=3?1:-1),y:static.boundary[a][b][1].y+mobile.height/2*(a!=1?1:-1)})
                ){
                    return a
                }
            }else if(a==4){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 8
                }
            }else if(a==5){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y-mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})
                ){
                    return 9
                }
            }else if(a==6){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x-mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 10
                }
            }else if(a==7){
                if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2})||
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][0].x+mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2},
                    {x:static.boundary[a][b][0].x-mobile.width/2,y:static.boundary[a][b][0].y+mobile.height/2})
                ){
                    return a
                }else if(
                    intersect(mobile.position,{x:mobile.previous.position.x+static.velocity.x,y:mobile.previous.position.y+static.velocity.y},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y+mobile.height/2},
                    {x:static.boundary[a][b][1].x+mobile.width/2,y:static.boundary[a][b][1].y-mobile.height/2})
                ){
                    return 11
                }
            }
        }
    }
    return -1
}
//mark graphic
function diamond(layer,x,y,width,height,direction){
	layer.quad(x-width*lcos(direction),y-width*lsin(direction),x-height*lsin(direction),y-height*lcos(direction),x+width*lcos(direction),y+width*lsin(direction),x+height*lsin(direction),y+height*lcos(direction))
}
function pentagon(layer,x1,y1,x2,y2,x3,y3,x4,y4,x5,y5){
	layer.beginShape()
	layer.vertex(x1,y1)
	layer.vertex(x2,y2)
	layer.vertex(x3,y3)
	layer.vertex(x4,y4)
	layer.vertex(x5,y5)
	layer.endShape(CLOSE)
}
function regTriangle(layer,x,y,radiusX,radiusY,direction){
	layer.triangle(x+lsin(direction)*radiusX,y+lcos(direction)*radiusY,x+lsin(direction+120)*radiusX,y+lcos(direction+120)*radiusY,x+lsin(direction+240)*radiusX,y+lcos(direction+240)*radiusY)
}
function regPoly(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX,y+lcos(direction+360*a/la)*radiusY)
	}
	layer.endShape(CLOSE)
}
function regPolyOpen(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX,y+lcos(direction+360*a/la)*radiusY)
	}
	layer.endShape()
}
function regStar(layer,x,y,sides,radiusX,radiusY,direction){
	layer.beginShape()
	for(a=0,la=sides*2;a<la;a++){
		layer.vertex(x+lsin(direction+360*a/la)*radiusX[a%2],y+lcos(direction+360*a/la)*radiusY[a%2])
	}
	layer.endShape(CLOSE)
}
function upColor(color,value,key){
	return [color[0]+value*key[0],color[1]+value*key[1],color[2]+value*key[2]]
}
function mergeColor(color1,color2,value){
	return [color1[0]*(1-value)+color2[0]*value,color1[1]*(1-value)+color2[1]*value,color1[2]*(1-value)+color2[2]*value]
}
//main
function checkValid(){
    for(let a=0,la=types.wall.length;a<la;a++){
        if(types.wall[a].spec.includes(1)&&findName(types.wall[a].provide,types.item)<0){
            print('A',types.wall[a].name,'-',types.wall[a].provide)
        }
        for(let b=0,lb=types.wall[a].upgrade.length;b<lb;b++){
            if(findName(types.wall[a].upgrade[b],types.wall)<0){
                print('B',types.wall[a].name,'-',types.wall[a].upgrade[b])
            }
        }
    }
    for(let a=0,la=types.item.length;a<la;a++){
        for(let b=a+1,lb=types.item.length;b<lb;b++){
            if(types.item[a].name==types.item[b].name){
                print('C',types.item[a].name)
            }
        }
        for(let b=0,lb=types.item[a].process.length;b<lb;b++){
            switch(types.item[a].process[b][0]){
                case 0: case 12:
                    if(findName(types.item[a].process[b][1],types.item)<0){
                        print('D',types.item[a].name,'-',types.item[a].process[b][1])
                    }
                    if(findName(types.item[a].process[b][2],types.item)<0){
                        print('E',types.item[a].name,'-',types.item[a].process[b][2])
                    }
                break
                case 1: case 2: case 3: case 4: case 7: case 9: case 10:
                    if(findName(types.item[a].process[b][2],types.item)<0){
                        print('F',types.item[a].name,'-',types.item[a].process[b][2])
                    }
                break
                case 5:
                    if(types.item[a].process[b][1]!='Trash'&&types.item[a].process[b][1]!='Water'){
                        print('G',types.item[a].name,'-',types.item[a].process[b][1])
                    }
                    if(findName(types.item[a].process[b][2],types.item)<0){
                        print('H',types.item[a].name,'-',types.item[a].process[b][2])
                    }
                break
                case 6:
                    if(findName(types.item[a].process[b][2],types.item)<0){
                        print('I',types.item[a].name,'-',types.item[a].process[b][2])
                    }
                    if(findName(types.item[a].process[b][3],types.item)<0){
                        print('J',types.item[a].name,'-',types.item[a].process[b][3])
                    }
                break
                case 11:
                    if(findName(types.item[a].process[b][1],types.item)<0){
                        print('K',types.item[a].name,'-',types.item[a].process[b][1])
                    }
                    if(findName(types.item[a].process[b][2],types.item)<0){
                        print('L',types.item[a].name,'-',types.item[a].process[b][2])
                    }
                    if(findName(types.item[a].process[b][3],types.item)<0){
                        print('M',types.item[a].name,'-',types.item[a].process[b][3])
                    }
                break
            }
        }
    }
    for(let a=0,la=types.dish.length;a<la;a++){
        for(let b=0,lb=types.dish[a].obj.length;b<lb;b++){
            if(findName(types.dish[a].obj[b][0],types.item)<0){
                print('N',types.dish[a].name,'-',types.dish[a].obj[b][0])
            }
            if(types.dish[a].obj[b].length==3&&findName(types.dish[a].obj[b][1],types.item)<0){
                print('O',types.dish[a].name,'-',types.dish[a].obj[b][1])
            }
        }
    }
    for(let a=0,la=types.card.length;a<la;a++){
        if(types.card[a].list>=0&&types.card[a].list<=4){
            for(let b=0,lb=types.card[a].dish.length;b<lb;b++){
                if(findName(types.card[a].dish[b],types.dish)<0){
                    print('P',types.card[a].name,'-',types.card[a].dish[b])
                }
            }
            for(let b=0,lb=types.card[a].wall.length;b<lb;b++){
                if(types.card[a].wall[b][0]!='-'&&findName(types.card[a].wall[b],types.wall)<0){
                    print('Q',types.card[a].name,'-',types.card[a].wall[b])
                }
            }
        }
        for(let b=0,lb=types.card[a].prereq.length;b<lb;b++){
            if(findName(types.card[a].prereq[b],types.card)<0){
                print('R',types.card[a].name,'-',types.card[a].prereq[b])
            }
        }
        for(let b=0,lb=types.card[a].mutex.length;b<lb;b++){
            if(findName(types.card[a].mutex[b],types.card)<0){
                print('S',types.card[a].name,'-',types.card[a].mutex[b])
            }
        }
    }
}
function checkLevel(){
    for(let a=0,la=types.level.length;a<la;a++){
        for(let b=0,lb=types.level[a].wall.length;b<lb;b++){
            if(types.level[a].map[types.level[a].wall[b][1]][types.level[a].wall[b][0]]!=' '){
                print(types.level[a].id,types.level[a].wall[b][2])
            }
        }
    }
}
function summon(item){
    current.entityManager.entities.players[0].item=current.entityManager.entities.walls[0][0].generateItem(item)
}
function summonCrate(item){
    summon('Crate')
    current.entityManager.entities.players[0].item.contain=findName(item,types.wall)
}
function summonBlueprint(item){
    summon('Blueprint')
    current.entityManager.entities.players[0].item.contain=findName(item,types.wall)
}
function testFranchise(){
    current.dayManager.day+=16
    current.cardManager.addCard(findName('Pizza',types.card))
    current.cardManager.addCard(findName('Onion Pizza',types.card))
    current.cardManager.addCard(findName('Calzones',types.card))
    current.cardManager.addCard(findName('Violence',types.card))
    current.cardManager.addCard(findName('Large Groups',types.card))
    current.overlayManager.closeAll()
    current.dayManager.failed(1,0,0)
}
function icard(name){
    current.cardManager.addCard(findName(name,types.card))
}
//dev