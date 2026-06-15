p5.Gradient=class{
	constructor(){}
	setAngle(angle){
		if(_angleMode=="degrees"){
			this.angle=radians(angle)
		}else{
			this.angle=angle
		}
	}
	colors(){
		let stops
		if(Array.isArray(arguments[0])){
			stops=arguments[0]
		}else{
			stops=arguments
		}
		for(let a=0,la=stops.length;a<la;a+=2){
			const pos=stops[a]
			const col=stops[a+1].toString()
			this.gradient.addColorStop(pos,col)
		}
	}
}
p5.LinearGradient=class LinearGradient extends p5.Gradient{
	constructor(angle,width){
		super()
		this.setAngle(angle||0)
		this.width=width||100
		const x=lcos(this.angle)*this.width
		const y=lsin(this.angle)*this.width
		this.gradient=drawingContext.createLinearGradient(0,0,x,y)
	}
}
p5.RadialGradient=class RadialGradient extends p5.Gradient{
	constructor(innerRadius,outerRadius,x,y){
		super()
		this.innerRadius=innerRadius||0
		this.outerRadius=outerRadius||100
		this.x=x||0
		this.y=y||0
		this.gradient=drawingContext.createRadialGradient(this.x,this.y,this.innerRadius,this.x,this.y,this.outerRadius)
	}
}
p5.ConicGradient=class ConicGradient extends p5.Gradient{
	constructor(angle,x,y){
	  super()
	  this.setAngle(angle||0)
	  this.x=x||0
	  this.y=y||0
	  this.gradient=drawingContext.createConicGradient(this.angle,this.x,this.y)
	}
}
p5.prototype.createLinearGradient=function(angle,width){
	return new p5.LinearGradient(angle,width)
}
p5.prototype.createConicGradient=function(angle,x,y){
	return new p5.ConicGradient(angle,x,y)
}
p5.prototype.createRadialGradient=function(innerRadius,outerRadius,x,y){
	return new p5.RadialGradient(innerRadius,outerRadius,x,y)
}
p5.prototype.createPattern=function(patternElement,repeat){
	if(patternElement.canvas){
		patternElement=patternElement.canvas
	}else if(patternElement.elt){
		patternElement=patternElement.elt
	}
	return this.drawingContext.createPattern(patternElement,repeat||"repeat")
}
p5.prototype.createSimplePattern=(func,w,h,repeat)=>{ 
	let buffer=this.createGraphics(w||5,h||5)
	buffer.pixelDensity(1)
	buffer.background(255)
	func(buffer)
	return this.drawingContext.createPattern(buffer.canvas,repeat||"repeat")
}
p5.prototype.fillGradient=function(gradient){
	this.drawingContext.fillStyle=gradient.gradient?gradient.gradient:gradient
}
p5.prototype.strokeGradient=function(gradient){
	this.drawingContext.strokeStyle=gradient.gradient?gradient.gradient:gradient
}
p5.prototype.backgroundPattern=function(pattern){
	this.drawingContext.fillStyle=pattern
	this.drawingContext.fillRect(0,0,width,height)
}
function setupGraphics(){
    setupBase()
	setupConstants()
    setupTrig()
	graphics.main=createGraphics(960,600)
	setupLayer(graphics.main)
	graphics.menu=[]
	for(let a=0,la=2;a<la;a++){
		graphics.menu.push(createGraphics(960,600))
		setupLayer(graphics.menu[a])
		displayScene(graphics.menu[a],a)
	}
}
function setupBase(){
    noStroke()
    angleMode(DEGREES)
	textAlign(CENTER,CENTER)
	rectMode(CENTER)
	colorMode(RGB,255,255,255,1)
	imageMode(CENTER)
    strokeJoin(ROUND)
}
function setupLayer(layer){
    layer.noStroke()
    layer.angleMode(DEGREES)
	layer.textAlign(CENTER,CENTER)
	layer.rectMode(CENTER)
	layer.colorMode(RGB,255,255,255,1)
	layer.imageMode(CENTER)
    layer.strokeJoin(ROUND)
}
function displayMain(layer){
    let scale=min(width/layer.width,height/layer.height)
    image(layer,width/2,height/2,layer.width*scale,layer.height*scale)
    updateMouse(graphics.main,scale)
}
function setupConstants(){
	constants.sqrt2=sqrt(2)
	constants.sqrt3=sqrt(3)
}
function setupTrig(){
	for(let a=0,la=360;a<la;a++){
		constants.trig[0].push(sin(a/2))
		constants.trig[1].push(cos(a/2))
		if(abs(constants.trig[0][a])<0.001){
			constants.trig[0][a]=0
		}
		if(abs(constants.trig[1][a])<0.001){
			constants.trig[1][a]=0
		}
	}
	for(let a=0,la=360;a<la;a++){
		constants.trig[0].push(-constants.trig[0][a])
		constants.trig[1].push(-constants.trig[1][a])
	}
}
function lsin(direction){
	return constants.trig[0][floor((direction%360+360)%360*2)]
}
function lcos(direction){
	return constants.trig[1][floor((direction%360+360)%360*2)]
}
function displayScene(layer,scene){
	let tileset
	let possible
	switch(scene){
		case 0:
			layer.fill(180)
			layer.rect(layer.width/2,layer.height/2,layer.width,layer.height)
			layer.fill(170,170,190)
			tileset=30
			for(let a=0,la=layer.width/tileset;a<la;a++){
				for(let b=0,lb=layer.height/tileset;b<lb;b++){
					if((a+b)%2==0){
						layer.rect(tileset*(a+0.5),tileset*(b+0.5),tileset,tileset)
					}
				}
			}
			possible=[]
			for(let a=0,la=types.dish.length;a<la;a++){
				if(types.dish[a].obj.length>0){
					possible.push(a)
				}
			}
			/*for(let a=0,la=8;a<la;a++){
				for(let b=0,lb=9;b<lb;b++){
					let index=floor(random(0,possible.length))
					let dish=types.dish[possible[index]]
					let obj=dish.obj[floor(random(0,dish.obj.length))]
					displayItem(layer,(b+0.25+a%2*0.5)/lb*layer.width,(a+0.5)/la*layer.height,obj[obj.length-2],0,0,2.5,1)
					possible.splice(index,1)
				}
			}*/
			for(let a=0,la=11;a<la;a++){
				for(let b=0,lb=8;b<lb;b++){
					let index=floor(random(0,possible.length))
					let dish=types.dish[possible[index]]
					let obj=dish.obj[floor(random(0,dish.obj.length))]
					displayItem(layer,layer.width*0.5+90*even(a-0.25+b%2*0.5,la),layer.height*0.5+45*constants.sqrt3*even(b,lb),obj[obj.length-2],0,0,2.5,1)
					possible.splice(index,1)
				}
			}
		break
		case 1:
			layer.fill(180)
			layer.rect(layer.width/2,layer.height/2,layer.width,layer.height)
			layer.fill(170,170,190)
			tileset=30
			for(let a=0,la=layer.width/tileset;a<la;a++){
				for(let b=0,lb=layer.height/tileset;b<lb;b++){
					if((a+b)%2==0){
						layer.rect(tileset*(a+0.5),tileset*(b+0.5),tileset,tileset)
					}
				}
			}
			possible=[]
			for(let a=1,la=types.item.length;a<la;a++){
				let valid=true
				for(let b=0,lb=types.item[a].process.length;b<lb;b++){
					if(types.item[a].process[b][0]==5&&types.item[a].process[b][1]=='Trash'){
						valid=false
						b=lb
					}
				}
				if(valid){
					possible.push(a)
				}
			}
			/*for(let a=0,la=8;a<la;a++){
				for(let b=0,lb=9;b<lb;b++){
					let index=floor(random(0,possible.length))
					displayItem(layer,(b+0.25+a%2*0.5)/lb*layer.width,(a+0.5)/la*layer.height,types.item[possible[index]].name,types.item[possible[index]].portions,0,2.5,1)
					possible.splice(index,1)
				}
			}*/
			for(let a=0,la=11;a<la;a++){
				for(let b=0,lb=8;b<lb;b++){
					let index=floor(random(0,possible.length))
					displayItem(layer,layer.width*0.5+90*even(a-0.25+b%2*0.5,la),layer.height*0.5+45*constants.sqrt3*even(b,lb),types.item[possible[index]].name,types.item[possible[index]].portions,0,2.5,1)
					possible.splice(index,1)
				}
			}
		break
	}
}