function computerStore(input) {
    let customer = input.pop();
    // console.log(customer)
    let price = input.reduce((acc, current) => {
        if((+current)>0)
            return acc+(+current);
        console.log('Invalid price!');
        return acc;
    }, 0);
    // console.log('price is:', price, '\ntype is:', typeof price)
    if (price == 0){
        console.log("Invalid order!"); 
        return;
    }
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${price.toFixed(2)}$`);
    let tax = +(price.toFixed(2))*0.2;
    console.log(`Taxes: ${tax.toFixed(2)}$`);
    console.log("-----------");
    if (customer == 'special'){
        let totalWithDiscount = (price+tax)*0.9;
        console.log(`Total price: ${totalWithDiscount.toFixed(2)}$`)
    } else {
        let total = price + tax;
        console.log(`Total price: ${total.toFixed(2)}$`)

    }
}

computerStore([
    '1050',
    '200',
    '450',
    "2",
    '18.50',
    '16.86',
    'special'
]);
