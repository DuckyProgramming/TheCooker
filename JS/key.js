function keyPressed(){
    switch(key){
        case 'ArrowLeft': inputs.keys[0].main[0]=true; inputs.keys[0].tap[0]=true; break
        case 'ArrowRight': inputs.keys[0].main[1]=true; inputs.keys[0].tap[1]=true; break
        case 'ArrowUp': inputs.keys[0].main[2]=true; inputs.keys[0].tap[2]=true; break
        case 'ArrowDown': inputs.keys[0].main[3]=true; inputs.keys[0].tap[3]=true; break
        case 'Shift': inputs.keys[0].main[4]=true; inputs.keys[0].tap[4]=true; break
        case 'a': case 'A': inputs.keys[1].main[0]=true; inputs.keys[1].tap[0]=true; break
        case 'd': case 'D': inputs.keys[1].main[1]=true; inputs.keys[1].tap[1]=true; break
        case 'w': case 'W': inputs.keys[1].main[2]=true; inputs.keys[1].tap[2]=true; break
        case 's': case 'S': inputs.keys[1].main[3]=true; inputs.keys[1].tap[3]=true; break
        case 'q': case 'Q': inputs.keys[1].main[4]=true; inputs.keys[1].tap[4]=true; break
    }
}
function keyReleased(){
    switch(key){
        case 'ArrowLeft': inputs.keys[0].main[0]=false; break
        case 'ArrowRight': inputs.keys[0].main[1]=false; break
        case 'ArrowUp': inputs.keys[0].main[2]=false; break
        case 'ArrowDown': inputs.keys[0].main[3]=false; break
        case 'Shift': inputs.keys[0].main[4]=false; break
        case 'a': case 'A': inputs.keys[1].main[0]=false; break
        case 'd': case 'D': inputs.keys[1].main[1]=false; break
        case 'w': case 'W': inputs.keys[1].main[2]=false; break
        case 's': case 'S': inputs.keys[1].main[3]=false; break
        case 'q': case 'Q': inputs.keys[1].main[4]=false; break
    }
}
function staticKeys(){
    for(let a=0,la=inputs.keys.length;a<la;a++){
        for(let b=0,lb=inputs.keys[a].tap.length;b<lb;b++){
            inputs.keys[a].tap[b]=false
        }
    }
}