const Information = require("./information");
let cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hello I'm ${Information.firstName}, From ${Information.campus}`,
  })
);
