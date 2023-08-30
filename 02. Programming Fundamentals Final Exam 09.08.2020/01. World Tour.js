function worldTour(input) {
    let destinationStr = input.shift();
    // console.log(destinationStr)
    for (const line of input) {
        if(line == "Travel") {
            console.log(`Ready for world tour! Planned stops: ${destinationStr}`)
            break;
        }
        
        let cmnds = line.split(':');
        let command = cmnds.shift();
        switch(command){
            case "Add Stop":
                let index = +cmnds[0], name = cmnds[1];
                let firstHalf = destinationStr.slice(0, index);
                let secondHalf = destinationStr.slice(index);
                destinationStr = `${firstHalf}${name}${secondHalf}`;
                console.log(destinationStr);
                break;
            case "Remove Stop":
                let startIndex = +cmnds[0],
                    endIndex = +cmnds[1];
                if (startIndex<=endIndex &&
                    startIndex>=0 &&
                    endIndex>=0 &&
                    startIndex<=destinationStr.length &&
                    endIndex<=destinationStr.length){
                        let substring = destinationStr.slice(startIndex, endIndex+1);
                        destinationStr = destinationStr.replace(substring, "");
                }// probably fail to be outside
                console.log(destinationStr);
                break;
            case "Switch":
                let [oldString, newString] = cmnds;
                while (destinationStr.includes(oldString)){
                    destinationStr = destinationStr.replace(oldString, newString)
                }
                console.log(destinationStr)
                break;
            default:
                console.log("..something went wrong..")
        }
    }

}


worldTour([
    "Hawai::Cyprys-Greece",
    'Add Stop:7:Rome',
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel",
]);
