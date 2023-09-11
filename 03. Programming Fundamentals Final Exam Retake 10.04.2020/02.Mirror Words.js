function mirrorWords(input) {
    let [text] = input;

    // 1 - FIND MATCHES
    let regex1 = /([@#])([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    let match = text.match(regex1);
    let foundMirrorWords = false;

    if (match) {
        // console.log(match)
        console.log(`${match.length} word pairs found!`);

        // 2 - VALIDATE FOUND MATCH
        let mirrorArr = [];
        for (const element of match) {
            let word1, word2;

            if (element.includes("##")) {
                [word1, word2] = element.split("##");
            } else if (element.includes("@@")) {
                [word1, word2] = element.split("@@");
            }
            word1 = word1.slice(1);
            word2 = word2.slice(0, word2.length - 1);
            // console.log(word1, word2)
            let word2Reversed = word2.split("").reverse().join("");
            // console.log(word2Reversed)
            if (word1 === word2Reversed) {
                foundMirrorWords = true;
                mirrorArr.push([word1, word2]);
            }
        }
        if (!foundMirrorWords) {
            console.log("No mirror words!");
        } else {
            console.log("The mirror words are:");
            let output = "";
            for (const pair of mirrorArr) {
                output += pair.join(" <=> ") + ", ";
            }
            console.log(output.slice(0, output.length - 2));
        }
    } else {
        console.log("No word pairs found!");
        if (!foundMirrorWords) {
            console.log("No mirror words!");
        }
    }
}

mirrorWords([
    "@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r",
]);
