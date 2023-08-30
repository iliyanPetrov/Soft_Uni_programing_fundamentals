function modifier(arr) {
    let numbers = arr.shift().split(" ").map(Number);
    // console.log(numbers);
    let arrLenght = arr.length;
    for (let i = 0; i < arrLenght; i++) {
        let current = arr[i].split(" ");
        let command = current[0];
        let num1 = current[1];
        let num2 = current[2];

        switch (command) {
            case "swap":
                let temp = numbers[num1];
                numbers[num1] = numbers[num2];
                numbers[num2] = temp;
                break;
            case "multiply":
                let product = Number(numbers[num1]) * Number(numbers[num2]);
                numbers[num1] = product;
                break;
            case "decrease":
                numbers = numbers.map(x => x-1);
                break;
            case "end":
                break;
        }
    }
    console.log(numbers.join(', '))
}
