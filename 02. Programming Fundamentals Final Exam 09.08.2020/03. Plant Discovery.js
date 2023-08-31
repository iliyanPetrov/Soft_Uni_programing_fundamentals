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
    console.log(plantsMap)
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
