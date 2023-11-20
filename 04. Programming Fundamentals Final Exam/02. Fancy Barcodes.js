function fancyBarcodes(input) {
    let initialNumber = +input.shift(); // what's that for??
    const regex = /@#+[A-Z][a-zA-Z\d]{4,}[A-Z]@#+/g; // positive look behind second '@' (symbol for capital letter)

    for (const line of input) {
        let match = line.match(regex);
        // console.log(match)
        if (match == null) {
            console.log("Invalid barcode");
            continue;
        }
        // console.log(match[0])
        const validItem = match[0].match(/\w+/g);
        // console.log(validItem[0]);
        let productGroup = validItem[0].match(/\d/g);
        // console.log(productGroup)
        if (productGroup == null) productGroup = '00';
        else productGroup = productGroup.join("");
        console.log(`Product group: ${productGroup}`);
    }
}
fancyBarcodes([
    "6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#",
]);
