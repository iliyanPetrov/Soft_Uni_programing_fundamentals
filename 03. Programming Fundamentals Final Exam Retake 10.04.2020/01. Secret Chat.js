function secretChat(input) {
    let message = input.shift();
    // console.log(message)
    for (const line of input) {
        if(line == "Reveal"){
            console.log(`You have a new text message: ${message}`)
            break;
        }
        let params = line.split(':|:');
        let command = params.shift();
        switch (command) {
            case "InsertSpace":
                let index = +params[0];
                let newMessage = message.split("")
                newMessage.splice(index, 0, ' ')
                message = newMessage.join("");
                console.log(message);
            break;

            case "Reverse": 
                let substring = params[0];
                if (!message.includes(substring)){
                    console.log("error")
                }else{
                    let workMsg = message.replace(substring, "");
                    let workSubstring = substring.split("").reverse().join("");
                    message = workMsg.concat(workSubstring)
                    console.log(message)
                }
            break;    

            case "ChangeAll": 
                let [substring1, replacement] = params;
                while(message.includes(substring1)){
                    message = message.replace(substring1, replacement)
                }
                console.log(message);
            break;        
            default:
                console.log('something went wrong ...')
            break;
        }
    }
}

secretChat([
    "heVVodar!gniV",
    "ChangeAll:|:V:|:l",
    "Reverse:|:!gnil",
    "InsertSpace:|:5",
    "Reveal"
]);
