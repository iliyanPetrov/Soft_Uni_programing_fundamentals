function pianist(input) {
    let mainObject = {};

    let piecesCount = input.shift();

    let index = 0;
    while (index < piecesCount) {
        let currentPiece = input[index];
        let [name, composer, key] = currentPiece.split("|");
        mainObject[name] = {
            composer,
            key,
        };

        index++;
    }

    let info = input[index].split("|");
    index++;

    let command = info.shift();

    while (command !== "Stop") {
        switch (command) {
            case "Add":
                let pieceName = info[0];
                let composerName = info[1];
                let keyName = info[2];
                if (mainObject.hasOwnProperty(pieceName)) {
                    console.log(`${pieceName} is already in the collection!`);
                } else {
                    mainObject[pieceName] = {
                        composer: composerName,
                        key: keyName,
                    };
                    console.log(
                        `${pieceName} by ${composerName} in ${keyName} added to the collection!`
                    );
                }
                break;
            case "Remove":
                let pieceName1 = info[0];
                if (mainObject.hasOwnProperty(pieceName1)) {
                    console.log(`Successfully removed ${pieceName1}!`);
                    delete mainObject[pieceName1];
                } else {
                    console.log(
                        `Invalid operation! ${pieceName1} does not exist in the collection.`
                    );
                }
                break;
            case "ChangeKey":
                let [pieceName2, newKey] = info;
                if (mainObject.hasOwnProperty(pieceName2)) {
                    mainObject[pieceName2]["key"] = newKey;
                    console.log(
                        `Changed the key of ${pieceName2} to ${newKey}!`
                    );
                } else {
                    console.log(
                        `Invalid operation! ${pieceName2} does not exist in the collection.`
                    );
                }
                break;
            default:
                console.log("something went wrong...");
                break;
        }

        info = input[index].split("|");
        index++;
        command = info.shift();
    }
    for (let name of Object.keys(mainObject)) {
        console.log(
            `${name} -> Composer: ${mainObject[name]["composer"]}, Key: ${mainObject[name]["key"]}`
        );
    }
}

pianist([
    "3",
    "Fur Elise|Beethoven|A Minor",
    "Moonlight Sonata|Beethoven|C# Minor",
    "Clair de Lune|Debussy|C# Minor",
    "Add|Sonata No.2|Chopin|B Minor",
    "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
    "Add|Fur Elise|Beethoven|C# Minor",
    "Remove|Clair de Lune",
    "ChangeKey|Moonlight Sonata|C# Major",
    "Stop",
]);
