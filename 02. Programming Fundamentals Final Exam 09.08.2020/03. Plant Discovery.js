function plantDiscovery(input) {
    let num = +input.shift();
    let plantsMap = new Map();
    
    for (let i=0; i<num; i++){
        let [plantName, rarity] = input.shift().split("<->");
        plantsMap.set(plantName, {
            "rarity": +rarity,
            "rating": []
        })
    }
    // console.log(plantsMap, '\ninput=', input)
    for (let line of input) {
        if (line == "Exhibition"){
            console.log('Plants for the exhibition:');
            plantsMap.forEach((value, key)=>{
                let average_rating;
                if (value['rating'].length == 0){
                    average_rating = 0 
                }else{
                    average_rating = value['rating'].reduce((acc, curr)=>acc+curr, 0)/value['rating'].length
                }
                console.log(`- ${key}; Rarity: ${value['rarity']}; Rating: ${average_rating.toFixed(2)}`)
            })
            break;
        }
        let tokens = line.split(': ');
        let command = tokens.shift();

        switch (command){
            case "Rate":
                let [plantName, rating] = tokens[0].split(' - ');
                if (!plantsMap.has(plantName)) {
                    console.log("error");
                }
                else {
                    plantsMap.get(plantName)['rating'].push(+rating);
                    // console.log('ratingArr=', plantsMap.get(plantName)['rating'])
                }
            break;

            case "Update": 
                let [plantName1, rarity] = tokens[0].split(' - ');
                if (!plantsMap.has(plantName1)) {
                console.log("error");
                } else {
                // console.log("old=", plantsMap.get(plantName1)['rarity'])
                plantsMap.get(plantName1)['rarity'] = +rarity;
                // console.log("new=", plantsMap.get(plantName1)['rarity'])

                }
            break;

            case "Reset":
                let plantName2 = tokens[0];
                if (!plantsMap.has(plantName2)) {
                    console.log("error");
                    } else {
                    // console.log('old=', plantsMap.get(plantName2)['rating'])
                    plantsMap.get(plantName2)['rating'] = [];
                    // console.log('new=', plantsMap.get(plantName2)['rating'])
                    }
            break;
            default:
                console.log('..something went wrong..');
                break;
        }
    }

}

plantDiscovery([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition",
]);
