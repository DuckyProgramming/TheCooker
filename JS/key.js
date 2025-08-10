function keyPressed(){
    switch(key){
        case 'ArrowLeft': inputs.keys[0].main[0]=true; inputs.keys[0].tap[0]=true; break
        case 'ArrowRight': inputs.keys[0].main[1]=true; inputs.keys[0].tap[1]=true; break
        case 'ArrowUp': inputs.keys[0].main[2]=true; inputs.keys[0].tap[2]=true; break
        case 'ArrowDown': inputs.keys[0].main[3]=true; inputs.keys[0].tap[3]=true; break
        case 'Shift': inputs.keys[0].main[4]=true; inputs.keys[0].tap[4]=true; break
        case 'End': inputs.keys[0].main[5]=true; inputs.keys[0].tap[5]=true; break
        case 'a': case 'A': inputs.keys[1].main[0]=true; inputs.keys[1].tap[0]=true; break
        case 'd': case 'D': inputs.keys[1].main[1]=true; inputs.keys[1].tap[1]=true; break
        case 'w': case 'W': inputs.keys[1].main[2]=true; inputs.keys[1].tap[2]=true; break
        case 's': case 'S': inputs.keys[1].main[3]=true; inputs.keys[1].tap[3]=true; break
        case 'q': case 'Q': inputs.keys[1].main[4]=true; inputs.keys[1].tap[4]=true; break
        case 'e': case 'E': inputs.keys[1].main[5]=true; inputs.keys[1].tap[5]=true; break
        case 'j': case 'J': inputs.keys[2].main[0]=true; inputs.keys[2].tap[0]=true; break
        case 'l': case 'L': inputs.keys[2].main[1]=true; inputs.keys[2].tap[1]=true; break
        case 'i': case 'I': inputs.keys[2].main[2]=true; inputs.keys[2].tap[2]=true; break
        case 'k': case 'K': inputs.keys[2].main[3]=true; inputs.keys[2].tap[3]=true; break
        case 'u': case 'U': inputs.keys[2].main[4]=true; inputs.keys[2].tap[4]=true; break
        case 'o': case 'O': inputs.keys[2].main[5]=true; inputs.keys[2].tap[5]=true; break
        case 'f': case 'F': inputs.keys[3].main[0]=true; inputs.keys[3].tap[0]=true; break
        case 'h': case 'H': inputs.keys[3].main[1]=true; inputs.keys[3].tap[1]=true; break
        case 't': case 'T': inputs.keys[3].main[2]=true; inputs.keys[3].tap[2]=true; break
        case 'g': case 'G': inputs.keys[3].main[3]=true; inputs.keys[3].tap[3]=true; break
        case 'r': case 'R': inputs.keys[3].main[4]=true; inputs.keys[3].tap[4]=true; break
        case 'y': case 'Y': inputs.keys[3].main[5]=true; inputs.keys[3].tap[5]=true; break
    }
}
function keyReleased(){
    switch(key){
        case 'ArrowLeft': inputs.keys[0].main[0]=false; break
        case 'ArrowRight': inputs.keys[0].main[1]=false; break
        case 'ArrowUp': inputs.keys[0].main[2]=false; break
        case 'ArrowDown': inputs.keys[0].main[3]=false; break
        case 'Shift': inputs.keys[0].main[4]=false; break
        case 'End': inputs.keys[0].main[5]=false; break
        case 'a': case 'A': inputs.keys[1].main[0]=false; break
        case 'd': case 'D': inputs.keys[1].main[1]=false; break
        case 'w': case 'W': inputs.keys[1].main[2]=false; break
        case 's': case 'S': inputs.keys[1].main[3]=false; break
        case 'q': case 'Q': inputs.keys[1].main[4]=false; break
        case 'e': case 'E': inputs.keys[1].main[5]=false; break
        case 'j': case 'J': inputs.keys[2].main[0]=false; break
        case 'l': case 'L': inputs.keys[2].main[1]=false; break
        case 'i': case 'I': inputs.keys[2].main[2]=false; break
        case 'k': case 'K': inputs.keys[2].main[3]=false; break
        case 'u': case 'U': inputs.keys[2].main[4]=false; break
        case 'o': case 'O': inputs.keys[2].main[5]=false; break
        case 'f': case 'F': inputs.keys[3].main[0]=false; break
        case 'h': case 'H': inputs.keys[3].main[1]=false; break
        case 't': case 'T': inputs.keys[3].main[2]=false; break
        case 'g': case 'G': inputs.keys[3].main[3]=false; break
        case 'r': case 'R': inputs.keys[3].main[4]=false; break
        case 'y': case 'Y': inputs.keys[3].main[5]=false; break
    }
}
function staticKeys(){
    inputs.keys[0].main[0]=keyIsDown(37)
    inputs.keys[0].main[1]=keyIsDown(39)
    inputs.keys[0].main[2]=keyIsDown(38)
    inputs.keys[0].main[3]=keyIsDown(40)
    inputs.keys[0].main[4]=keyIsDown(16)
    inputs.keys[0].main[5]=keyIsDown(35)
    inputs.keys[1].main[0]=keyIsDown(65)
    inputs.keys[1].main[1]=keyIsDown(68)
    inputs.keys[1].main[2]=keyIsDown(87)
    inputs.keys[1].main[3]=keyIsDown(83)
    inputs.keys[1].main[4]=keyIsDown(81)
    inputs.keys[1].main[5]=keyIsDown(69)
    inputs.keys[2].main[0]=keyIsDown(74)
    inputs.keys[2].main[1]=keyIsDown(76)
    inputs.keys[2].main[2]=keyIsDown(73)
    inputs.keys[2].main[3]=keyIsDown(75)
    inputs.keys[2].main[4]=keyIsDown(85)
    inputs.keys[2].main[5]=keyIsDown(79)
    inputs.keys[3].main[0]=keyIsDown(70)
    inputs.keys[3].main[1]=keyIsDown(72)
    inputs.keys[3].main[2]=keyIsDown(84)
    inputs.keys[3].main[3]=keyIsDown(71)
    inputs.keys[3].main[4]=keyIsDown(82)
    inputs.keys[3].main[5]=keyIsDown(89)
    for(let a=0,la=inputs.keys.length;a<la;a++){
        for(let b=0,lb=inputs.keys[a].tap.length;b<lb;b++){
            inputs.keys[a].tap[b]=false
        }
    }
}
function staticMainKeys(){
    for(let a=0,la=inputs.keys.length;a<la;a++){
        for(let b=0,lb=inputs.keys[a].tap.length;b<lb;b++){
            inputs.keys[a].main[b]=false
        }
    }
}