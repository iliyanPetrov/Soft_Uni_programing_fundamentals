function resetPassword(input) {
    let rawPassword = input.shift();
   
    for (let element of input) {
      let commands = element.split(" ");
      let command = commands.shift();
   
      switch (command) {
        case "TakeOdd":
          let tempPassword = "";
          for (let i = 0; i < rawPassword.length; i++) {
            if (i % 2 !== 0) tempPassword += rawPassword[i];
          }
          rawPassword = tempPassword;
          console.log(tempPassword);
          break;
   
        case "Cut":
          let [index, count] = commands.map(Number);
  
          let strToCut = rawPassword.substring(index, count + index);
          rawPassword = rawPassword.replace(strToCut, "");
          console.log(rawPassword);
          break;
   
        case "Substitute":
          let [substring, substitute] = commands;
  
          if (!rawPassword.includes(substring)) {
            console.log("Nothing to replace!");
          } else {
            while (rawPassword.includes(substring)) {
              rawPassword = rawPassword.replace(substring, substitute);
            }
            console.log(rawPassword);
          }
          break;
        default:
          console.log(`Your password is: ${rawPassword}`);
          break;
        }
    }
}
