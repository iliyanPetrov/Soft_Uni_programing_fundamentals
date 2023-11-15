function heartDelivery(input) {
    let nHood = input.shift().split("@").map(Number);
    let currIndex = 0;
    const housesLength = nHood.length; 
    for (const item of input) {
        if (item == "Love!"){
        // LAST POSITION AND OUTCOME OF MISSION
            console.log(`Cupid's last position was ${currIndex}.`);
            if (nHood.every((currentValue) => currentValue == 0)){
                console.log("Mission was successful.");
            }else{
                let houseCount = nHood.filter(item => item !== 0).length;
                console.log(`Cupid has failed ${houseCount} places.`);
            }
            break;
        }
        let [command, num] = item.split(" ");
        num = Number(num);

        // CHECK JUMP RANGE
        if ((currIndex + num) > (housesLength - 1)){
            currIndex = 0
        } else {
            currIndex += num;
        }

        // CHECK FOR 0
        if (!nHood[currIndex] == 0){
            nHood[currIndex] -= 2;
            if (nHood[currIndex] == 0){
                console.log(`Place ${currIndex} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${currIndex} already had Valentine's day.`)
        }
    }
}

// heartDelivery([
//     "10@10@10@2", 
//     "Jump 1", 
//     "Jump 2", 
//     "Love!"
// ]);

heartDelivery([
    "2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!",
]);
