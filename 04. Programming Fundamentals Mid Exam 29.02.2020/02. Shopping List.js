function shoppingList(input) {

    let listOfItems = input.shift().split("!");

    for (const item of input) {
        if (item == "Go Shopping!"){
            console.log(listOfItems.join(", "));
            break;
        }
        let info = item.split(" ");
        let command = info.shift();
        let currItem = info[0];
        switch (command){
            case "Urgent": 
                if (!listOfItems.includes(currItem)){
                    listOfItems.unshift(currItem);
                }
                break;
            case "Unnecessary":
                if (listOfItems.includes(currItem)){
                    listOfItems.splice(listOfItems.indexOf(currItem),1);
                }
                break;
                // correct has 2 items - old && new.
            case "Correct":
                let oldItem = currItem, newItem = info[1];
                if (listOfItems.includes(oldItem)){
                    listOfItems.splice(listOfItems.indexOf(oldItem), 1, newItem);
                }
                break;
            case "Rearrange":
                if (listOfItems.includes(currItem)){
                    let itemToRearrange = listOfItems.splice(listOfItems.indexOf(currItem), 1);
                    listOfItems.push(itemToRearrange);
                }
                break;
            default:
                console.log("something went wrong ..")

        }
    }
}

// shoppingList([
//     "Tomatoes!Potatoes!Bread",
//     "Unnecessary Milk",
//     "Urgent Tomatoes",
//     "Go Shopping!",
// ]);

shoppingList([
    "Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!",
]);

