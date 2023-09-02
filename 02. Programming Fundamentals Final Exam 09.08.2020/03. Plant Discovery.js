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
                    plantsMap.get(plantName)['rating'].push(rating);
                    console.log('ratingArr=', plantsMap.get(plantName)['rating'])
                }
                
            break;
            case "Update": 
            break;
            case "Reset": 
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
