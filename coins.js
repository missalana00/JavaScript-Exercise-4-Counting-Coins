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


// NECESSARY REFERENCES

  // Add the button with an ID of "calcButton" to the variable calculateButton
  var calculateButton = document.getElementById("calcButton");
  // Add input with an ID of 'amtToCalc' to the variable userInput
  var userInput = document.getElementById("amtToCalc");
  // Add div with ID of 'results' to the variable resultsDiv
  var resultDiv = document.getElementById("results");


// COIN-COUNTER FUNCTION

  function coinCounter(x) {

  // Logging x (the userInput) to the console
  console.log(x);

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

    // Return results to console
    return coinPurse;

  }



// EVENT LISTENER FOR "COUNT MY COINS" BUTTON
 
  //Add event listener to calculateButton to listen for clicks
  calculateButton.addEventListener('click', function(e) {

  // Preventing default form refresh
    e.preventDefault();

    // Resetting the resultDiv to erase the inner elements for previous cases
    resultDiv.innerHTML = "";

  // console.log(userInput.value);

  // coinCounter(userInput.value);

  console.log(coinCounter(userInput.value));

    });





// 1. Write another function that builds out the html as it iterates through the object; for/in loop

// 2. Call the function from line 52 instead of return

// 3. Pass into the function the coinPurse


