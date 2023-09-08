function nfs(input) {
    let result = new Map();

    for (let element of input) {
        if (element == "Stop") break;
        if (element.includes("|")) {
            let [car, miles, fuel] = element.split("|");
            result.set(car, []);
            result.get(car).push(Number(miles));
            result.get(car).push(Number(fuel));
        }
        if (element.includes(" : ")) {
            let params = element.split(" : ");
            // console.log('params are:',params)

            if (element.includes("Refuel")) {
                let carName = params[1];
                let fuell = Number(params[2]);
                let sum = fuell + result.get(carName)[1];
                if (sum > 75) {
                    result.get(carName)[1] = 75;
                    sum -= 75;
                    console.log(
                        `${carName} refueled with ${fuell - sum} liters`
                    );
                } else {
                    result.get(carName)[1] = sum;
                    console.log(`${carName} refueled with ${fuell} liters`);
                }
            } else if (element.includes("Revert")) {
                let carName = params[1];
                let kilometers = Number(params[2]);
                result.get(carName)[0] -= kilometers;
                if (result.get(carName)[0] < 10_000) {
                    result.get(carName)[0] = 10_000;
                } else {
                    console.log(
                        `${carName} mileage decreased by ${kilometers} kilometers`
                    );
                }
            } else if (element.includes("Drive")) {
                let carName = params[1];
                let distance = Number(params[2]);
                let fuell = Number(params[3]);

                if (fuell <= result.get(carName)[1]) {
                    result.get(carName)[1] -= fuell;
                    result.get(carName)[0] += distance;
                    console.log(
                        `${carName} driven for ${distance} kilometers. ${fuell} liters of fuel consumed.`
                    );
                } else {
                    console.log("Not enough fuel to make that ride");
                }
                if (result.get(carName)[0] >= 100_000) {
                    result.delete(carName);
                    console.log(`Time to sell the ${carName}!`);
                }
            }
        }
    }

    for (let [car, info] of result) {
        console.log(
            `${car} -> Mileage: ${info[0]} kms, Fuel in the tank: ${info[1]} lt.`
        );
    }
}

nfs([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ])