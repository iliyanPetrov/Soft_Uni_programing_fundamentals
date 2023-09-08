function moovingTarget(input) {
    let targets = input.shift().split(' ').map(Number);
    // console.log(targets, typeof targets[0])

    for (const line of input) {
        if (line == "End"){
            console.log(targets.join('|'));
            break;
        }
        let params = line.split(' ');
        let command = params.shift();
        params = params.map(Number);
        // console.log(`command= ${command}, params= ${params}, type= ${typeof params[1]}`)
        switch (command){
            case "Shoot": 
                let [index, power] = params;
                if(index<0 || index>=targets.length) continue;
                else{
                    targets[index] = targets[index] - power;
                    if(targets[index]<=0){
                        targets.splice(index, 1);
                    }
                }
                // console.log('targets after Shoot', targets)
            break;

            case "Add": 
                let [index1, value] = params;
                if (index1 < 0 || index1 >=targets.length){ // probably fail
                    console.log('Invalid placement!')
                    continue;
                }else{
                    targets.splice(index, 0, value);
                    // console.log(`targets after add= ${targets}`)
                }
            break;

            case "Strike": 
                let [index2, radius] = params;
                // TODO
                if (index2 < 0 || index2 >= targets.length){
                    console.log("Strike missed!")
                    continue;
                }else{
                    let leftRadius = index2 - radius;
                    let rigthRadius = index2 + radius;
                    if(leftRadius < 0 || rigthRadius >= targets.length){
                        console.log("Strike missed!")
                        continue;
                    }
                    let strikedElementsCount = rigthRadius+1 - leftRadius;
                    targets.splice(leftRadius, strikedElementsCount);
                    // console.log(`targets after "strike!"= ${targets}`)
                }
            break;
        }

    }
    
}

moovingTarget([
    "52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End",
]);
