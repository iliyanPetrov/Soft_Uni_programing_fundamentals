function test1(arr) {
    let worker1 = Number(arr.shift());
    let worker2 = Number(arr.shift());
    let worker3 = Number(arr.shift());
    // console.log(arr)

    let students = Number(arr.shift());
    let answers = worker1 + worker2 + worker3;
    let neededHours = 0;
    // console.log(answers)

    while (students> 0){
        neededHours++;
        students -= answers

        if(neededHours%4 ==0){
            neededHours++
        }
    }

    console.log(`Time needed: ${neededHours}h.`)
}
