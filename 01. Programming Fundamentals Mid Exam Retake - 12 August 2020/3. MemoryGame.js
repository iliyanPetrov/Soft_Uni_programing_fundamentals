function memoryGame(input) {
    let sequence = input.shift().split(' ');
    // console.log(sequence, typeof sequence, '\ninput:', input)

    let moves = 0, wonGame = false;
    for (let item of input) {
        if (item == 'end') break;
        moves++;
        let [index1, index2] = item.split(' ').map(Number);
        // console.log(`item=${item}\n ind1,2=${index1},${index2}\ntype=`, typeof index1)

        if (index1 == index2 || index1<0 || index2>sequence.length || index2<0 || index1>sequence.length){
            console.log("Invalid input! Adding additional elements to the board");
            let additionalElement = `-${moves}a`;
            let middlePoint = Math.floor(sequence.length / 2); // possible fail
            sequence.splice(middlePoint, 0, additionalElement, additionalElement);
            // console.log(sequence)
        }else{
            let element1 = sequence[index1];
            let element2 = sequence[index2];
            if ( element1 == element2){
                console.log(`Congrats! You have found matching elements - ${element1}!`);
                // while (sequence.includes(element1)){ //possible fail
                //     let indexToRemove = sequence.indexOf(element1);
                //     sequence.splice(indexToRemove, 1);
                // }
                sequence.splice(sequence.indexOf(element1), 1);
                sequence.splice(sequence.indexOf(element2), 1);
                // console.log('sequence after splice=', sequence)
            } else {
                console.log("Try again!");
            }
        }

        if (sequence.length==0){
            console.log(`You have won in ${moves} turns!`);
            wonGame = true;
            break;
        }
        if (wonGame)
            break;
    }
    if(wonGame)
        return '';
    else 
        console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
    
}

memoryGame([
    "1 1 2 2 3 3 4 4 5 5", 
    "1 0", 
    "-1 0",
    "1 0",
    "1 0", 
    "1 0", 
    "end"
]);
