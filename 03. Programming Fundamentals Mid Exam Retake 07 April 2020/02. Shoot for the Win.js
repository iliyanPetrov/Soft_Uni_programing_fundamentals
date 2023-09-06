function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    // console.log(targets)
    for (const line of input) {
        if (line == 'End'){
            // TODO
            let count = targets.filter(item => item == -1).length;
            console.log(`Shot targets: ${count} -> ${targets.join(' ')}`)
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
            targets = targets.map((element)=>{
                if (element !== -1){
                    if (element > targetValue){
                        return element - targetValue;
                    }else if (element <= targetValue){
                        return element + targetValue;
                    }
                }
                return element;
            })            
            // console.log('targets are:', targets)
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
