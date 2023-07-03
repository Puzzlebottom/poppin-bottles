const process = require("process");


const totalBottles = (cash, caps = 0, empties = 0) => {
  let pricePerBottle = 2;
  let bottles = 0;

  if (cash >= pricePerBottle || caps >= 4 || empties >= 2) {
    bottles += Math.floor(cash / pricePerBottle);
    bottles += Math.floor(caps / 4);
    bottles += Math.floor(empties / 2);

    bottles += totalBottles(cash % 2, bottles + (caps % 4), bottles + (empties % 2));
  }

  return bottles;
};


let input = process.argv;
if (input === undefined) return console.log("Not enough arguments!");
if (input.length > 3) return console.log("Too many arguments!");

let investment = input[2];
console.log(`You're headed home with ${totalBottles(investment, 0, 0)} bottles!`);