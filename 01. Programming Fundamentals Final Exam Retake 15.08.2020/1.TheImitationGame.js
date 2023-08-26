function imitationGame(input) {
    let msg = input.shift();
    // console.log(msg)
    for (const line of input) {
        if(line.includes("Decode")){
            console.log(`The decrypted message is: ${msg}`)
            break;
        } else {
            let params = line.split('|');
            // console.log('params from line split=', params)
            let command = params.shift();
            // console.log(command)
            switch (command){
                case "ChangeAll":
                    let [substring, replacement] = params;
                    // console.log(`substring=${substring}, replacement=${replacement}`)
                    while (msg.includes(substring)){
                        msg = msg.replace(substring, replacement)
                        // console.log(msg)
                    }
                    break;
                case "Insert":
                    let index = +params[0], value = params[1];
                    // console.log(`index=${index}, value=${value}, type= ${typeof index}, ${typeof value}`)
                    let msgArr = msg.split("")
                    // console.log(msgArr)
                    msgArr.splice(index, 0, value);
                    msg = msgArr.join("");
                    // console.log('message after insert=', msg)
                    break;
                case "Move":
                    let numOfLetters = +params[0];
                    // console.log('number of letters=', numOfLetters, '\ntype=', typeof numOfLetters)
                    let firstHalf = msg.slice(0, numOfLetters);
                    let secondHalf = msg.slice(numOfLetters);
                    // console.log(`first=${firstHalf} - second=${secondHalf}`)
                    msg = secondHalf.concat(firstHalf);
                    // console.log('message after Move=', msg)
                    break;
                default:
                    console.log("Something went wrong..")
                    break;
            }
        }

    }
}

imitationGame(
    [
        "zzHe", 
        "ChangeAll|z|l", 
        "Insert|2|o", 
        "Move|3", 
        "Decode"
    ]
);
