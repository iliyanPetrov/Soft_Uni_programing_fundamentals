function addAstra(input) {
    let regex = /([#|])(?<product>[a-zA-Z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g
    let caloriesNeededPerDay = 2000;
    let totalCalories = 0;
    let itemsArr = [];

    let text = input.shift();
    let match = regex.exec(text);
    // console.log(match.groups)

    while(match){
        itemsArr.push({
            product: match.groups.product,
            date: match.groups.date,
            calories: +match.groups.calories
        })
        totalCalories += (+match.groups.calories);
        match = regex.exec(text);
    }
    // console.log(itemsArr, '\ntotal calories=', totalCalories)
    console.log(`You have food to last you for: ${Math.floor(totalCalories/caloriesNeededPerDay)} days!`)
    if (itemsArr.length > 0){
        for (const item of itemsArr) {
            let output = `Item: ${item.product}, Best before: ${item.date}, Nutrition: ${item.calories}`;
            console.log(output);
        }
    }
}

addAstra([
    "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|",
]);
