// Write a program that will convert a dollar amount to the number of coins
// that make up the amount. Use the common American coins of quarters, dimes, nickels,
// and pennies.

/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/


function coinCounter (x) {

  // Initialize a JavaScript object to hold the coins
  var coinPurse = {};

  var coinRemainder = 0;

  coinPurse.quarters = 0;
  coinPurse.dimes = 0;
  coinPurse.nickles = 0;
  coinPurse.pennies = 0;

  coinPurse.quarters = Math.floor(x/0.25)
  coinRemainder =  x - (coinPurse.quarters * 0.25)

  coinPurse.dimes = Math.floor(coinRemainder/0.10)
  coinRemainder = coinRemainder - (coinPurse.dimes * 0.10)

  coinPurse.nickles = Math.floor(coinRemainder/0.05)
  coinRemainder = coinRemainder - (coinPurse.nickles * 0.05)

  coinPurse.pennies = Math.floor(coinRemainder/0.01)
  coinRemainder = coinRemainder - (coinPurse.pennies * 0.01)

  return coinPurse;

}

  console.log(coinCounter (0.67))
  console.log(coinCounter (2.50))
