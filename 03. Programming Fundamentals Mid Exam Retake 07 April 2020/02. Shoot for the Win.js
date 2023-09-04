function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    // console.log(targets)
    for (const line of input) {
        if (line == 'End'){
            // TODO
            // "Shot targets: {count} -> {target1} {target2}… {targetn}"
            break;
        }
        let currIndex = Number(line);
        if (currIndex<0 || currIndex>=targets.length){
            continue
        }else if (targets[currIndex] == -1){
            continue;
        }else{
            let targetValue = targets[currIndex];
            targets[currIndex] = -1;
            targets.map((element)=>{
                if (element !== -1){
                    if (element > targetValue){
                        return element - targetValue
                    }else if (element <= targetValue){
                        return element + targetValue
                    }
                }
            })            
            console.log('targets are:', targets)

        }

    }
}

shootForTheWin([
    "24 50 36 70", 
    "0", 
    "4", 
    "3", 
    "1", 
    "End"
]);
