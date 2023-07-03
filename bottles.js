const process = require("process");


// const totalBottles = (cash, caps = 0, empties = 0) => {
//   let pricePerBottle = 2;
//   let bottles = 0;

//   if (cash >= pricePerBottle || caps >= 4 || empties >= 2) {
//     bottles += Math.floor(cash / pricePerBottle);
//     bottles += Math.floor(caps / 4);
//     bottles += Math.floor(empties / 2);

//     bottles += totalBottles(cash % 2, bottles + (caps % 4), bottles + (empties % 2));
//   }

//   return bottles;
// };

const totalBottles = (resources) => {
  const pricePerBottle = 2;
  let bottles = 0;

  let { cash, caps, empties } = resources;

  if (cash >= pricePerBottle || caps >= 4 || empties >= 2) {
    bottles += Math.floor(caps / 4);
    bottles += Math.floor(empties / 2);
    bottles += Math.floor(cash / pricePerBottle);

    cash = cash % 2;
    caps = caps % 4;
    empties = empties % 2;

    let recycling = totalBottles({ cash: cash, caps: bottles + caps, empties: bottles + empties });

    bottles += recycling.totalBottles;
    caps = recycling.caps;
    empties = recycling.empties;
  }

  return { totalBottles: bottles, caps: caps, empties: empties };
};


let input = process.argv;
if (input === undefined) return console.log("Not enough arguments!");
if (input.length > 3) return console.log("Too many arguments!");

let investment = input[2];
let result = totalBottles({ cash: investment, caps: 0, empties: 0 });

console.log(`TOTAL BOTTLES: ${result.totalBottles}`);
console.log(`REMAINING BOTTLES: ${result.empties}`);
console.log(`REMAINING CAPS: ${result.caps}`);
