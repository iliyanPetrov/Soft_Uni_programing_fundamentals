function thelift(input) {
    // GET INPUT
    let maxLoad = 4;
    let pplWait = Number(input[0]);
    let liftStatus = input[1];
    let wagons = liftStatus.split(' ').map(Number);

    // PREPARE LOGIC
    let liftIsFull = false;
    let noMorePpl = false;
    let pplOnLift = 0;

    // START PROGRAM
    for(let wagon=0; wagon<wagons.length; wagon++){
        let freeSpace = maxLoad - wagons[wagon];
        if(pplWait>=freeSpace) {
            pplWait-=freeSpace;
            wagons[wagon]+=freeSpace;
            pplOnLift+=freeSpace;
        }else{
            let left = pplWait;
            pplWait-=left;
            wagons[wagon]+=left;
            pplOnLift+=left;
        }
    }

    if((wagons.every((currentValue) => currentValue == 4))){
        liftIsFull = true;
    }
    if(pplOnLift == Number(input[0])){
        noMorePpl = true;
    }

    // OUTPUT RESULT
    liftStatus = wagons.join(' ');

    if(liftIsFull && noMorePpl){
        console.log(wagons.join(" "));
    }else if(!liftIsFull){
        console.log('The lift has empty spots!');
        console.log(liftStatus)
    }else if(pplWait){
        console.log(`There isn't enough space! ${pplWait} people in a queue!`);
        console.log(liftStatus)        
    }else{
        console.log('SOMETHING WENT WRONG')
    }

}

