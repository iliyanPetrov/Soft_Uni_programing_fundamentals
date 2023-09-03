function counterStrike(input) {
    let initialEnergy = +input.shift();
    let battlesCount = 0;

    for (const line of input) {
        if (line == "End of battle") {
            console.log(
                `Won battles: ${battlesCount}. Energy left: ${initialEnergy}`
            );
            break;
        }
        let distance = Number(line);
        if (distance > initialEnergy) {
            console.log(
                `Not enough energy! Game ends with ${battlesCount} won battles and ${initialEnergy} energy`
            );
            break;
        } else {
            initialEnergy -= distance;
            battlesCount++;
            if (battlesCount % 3 == 0) {
                initialEnergy += battlesCount;
            }
        }
    }
}

// counterStrike(["200", "54", "14", "28", "13", "End of battle"]);

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
