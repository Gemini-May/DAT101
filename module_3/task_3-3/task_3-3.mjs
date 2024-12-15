"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that takes no parameters and returns no values. Have it print today's date in the
Norwegian standard. */

function printTodaysDateInNorwegian() {
  // Get the current date
  const today = new Date();

  // Format the date to Norwegian format using 'toLocaleDateString'
  const formattedDate = today.toLocaleDateString("no-NB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  printOut("Today is: " + formattedDate.toString());

  return today;
}
printTodaysDateInNorwegian();

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Level Up Your Date Function: Take your "Today's Date" function from Task 1 and supercharge it! Not
only should it display today's date in elegant Norwegian fashion, but it also needs to return that date as a
powerful date object, ready for further manipulation. */

function daysUntilRelease() {
  const todayDate = printTodaysDateInNorwegian();
  const releaseDate = new Date("2025/05/14");

  /*calculating the difference in milliseconds */
  const differenceInTime = releaseDate - todayDate;

  const differenceInDays = Math.ceil(differenceInTime / 8.64e+7);

  printOut("Countdown to 2XKO release, Only " + differenceInDays + " days left ");
  printOut("Get ready for the fight!!! ");
}

daysUntilRelease();

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that receives the radius of a circle and prints the diameter, circumference, and area

function calculatingCircleProperties(radius) {
  const diameter = 2 * radius;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;

  printOut("For a circle with " + radius + " in radius:");
  printOut("Diameter: " + diameter);
  printOut("circumference: " + circumference.toFixed(2));
  printOut("Area: " + area.toFixed(2));
}

calculatingCircleProperties(9);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that receives the width and height of a rectangle in an object. Print the circumference
and area of the given rectangle. */

function calculatingRactangleProperties([width, hight]) {
  const rectangleCircumference = 2 * (width + hight);
  const rectangleArea = width * hight;

  printOut("Rectangle with width " + width + " and hight " + hight);
  printOut("Circumference: " + rectangleCircumference);
  printOut("Area: " + rectangleArea);
}

calculatingRactangleProperties([5, 9]);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that handles the conversion between Celsius, Fahrenheit, and Kelvin. Use three different
numbers and print all three combinations as integers (no decimals). */

const EtemperaturType = { celsius: 1, fahrenheit: 2, Kelvin: 3 };

function convertTemperature(aTemp, aType) {
  let fahrenheit = 0;
  let celsius = 0;
  let kelvin = 0;

  switch (aType) {
    case EtemperaturType.celsius:
      printOut("Convert from Celsius ");
      
      /*Convert to Fahrenheit
            Fahrenheit =  (kelvin - 273.15) * 9/5 + 32*/
      celsius = aTemp;
      fahrenheit = (celsius * 9) / 5 + 32;
      kelvin = celsius + 237.15;
      break;

    case EtemperaturType.fahrenheit:
      printOut("Convert from Fahrenheit ");
      //Convert to celsius
      //celsius = (fahrenheit - 32) * 5/9
      fahrenheit = aTemp;
      celsius = ((fahrenheit - 32) * 5) / 9;
      kelvin = 0;
      break;

    case EtemperaturType.Kelvin:
      printOut("Convert from Kelvin");
      //Convert to celsius
      // celsius = kelvin - 273.15'
      kelvin = aTemp;
      celsius = kelvin - 273.15;
      fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
      break;

     return;
  }

  printOut("Celsius: " + celsius.toString());
  printOut("Kelvin: " + kelvin.toString());
  printOut("Fahrenheit: " + fahrenheit.toString());
}

convertTemperature(23, EtemperaturType.celsius);
printOut(newLine);
convertTemperature(250, EtemperaturType.Kelvin);
printOut(newLine);
convertTemperature(120, EtemperaturType.fahrenheit);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a function that calculates the price without VAT (sales tax). The function needs two arguments, one
for the price including VAT (gross amount) and one for the tax group in text (normal = 25%, food = 15%,
hotel, transport, and cinema = 10%). The text argument should not be case-sensitive. If the VAT group is
not correct, the text "Unknown VAT group!" should be printed. The function must return the price without
tax, i.e., the net price. Call the function four times with different gross amounts. One for each of the VAT
groups (25, 15, and 10) and one with an unknown group for example “goblins”. Tip: Use "NaN" to identify
that an unknown VAT group is returned from the function. Formula: net = (100 * gross) / (vat + 100).*/

function calculativePrice(aPrice, aTaxGroup) {
  let net = NaN;
  let TaxGroupe = aTaxGroup.toUpperCase();
  let vat = NaN;
  printOut("TaxGroup = " + aTaxGroup);

  switch (TaxGroupe) {
    case "NORMAL":
      vat = 25;
  }

  if (Number.isNaN(vat)) {
    net = (100 * aPrice) / (vat + 100);
  }
  return net;
}

const netPrice = calculativePrice(100, "Normal");
if (Number.isNaN(netPrice)) {
  printOut("Unknown vat group");
} else {
  printOut("netPrice = " + netPrice.toFixed());
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that takes 3 arguments and returns the following calculation.

function calculate(speed, distance, time) {
  switch (true) {
      case (distance === undefined && time !== undefined && speed !== undefined):
          // Calculate distance if missing
          distance = speed * time;
          break;
      
      case (distance !== undefined && time === undefined && speed !== undefined):
          // Calculate time if missing
          time = distance / speed;
          break;
      
      case (distance !== undefined && time !== undefined && speed === undefined):
          // Calculate speed if missing
          speed = distance / time;
          break;
      
      case (distance === undefined || time === undefined || speed === undefined):
          // If more than one parameter is missing, return NaN
          printOut("NaN");
          break;
      
      default:
          printOut('Invalid Input');
          break;
  }

  printOut("Speed = " + speed + "km/h");
  printOut("Distance = " + distance + "km");
  printOut("time = " + time + "h");
} 


calculate(undefined,100,2);
printOut(newLine);
calculate(50,undefined,2);
printOut(newLine);
calculate(50,100,undefined);
printOut(newLine);
calculate(undefined,100);


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a function that takes four parameters and returns a result. Parameter one: A text string. Parameter 

function modifyText(text, maxSize, char, insertAfter) {
  let newText = text;

  // Check if the text length is smaller than the maximum size
  while (newText.length < maxSize) {
      if (insertAfter) {
          newText += char; // Add character at the end
      } else {
          newText = char + newText; // Add character at the beginning
      }
  }

  // Print the result
  printOut(newText);

  // Return the result
  return newText;
}

modifyText("Hello", 10, "*", true); // Adds '*' after, e.g., "Hello*****"
modifyText("Hello", 10, "*", false);


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//From mathematics, we have the following expression. Create a function or functions that can test this expression for 200 lines.

function testMathExpressions() {
  for (let line = 1; line <= 200; line++) {
      // Number of terms in the expression
      let numTerms = line + 1;
      
      // Generate terms for the left-hand side (LHS)
      let leftside = [];
      for (let i = 0; i < numTerms; i++) {
          leftside.push(line * numTerms - numTerms + 1 + i);
      }

      // Generate terms for the right-hand side (RHS)
      let rightside = [];
      for (let i = 0; i < numTerms; i++) {
          rightside.push(line * numTerms + 1 + i);
      }

      // Calculate sums
      let lhsSum = leftside.reduce((a, b) => a + b, 0);
      let rhsSum = rightside.reduce((a, b) => a + b, 0);

      // Test if sums are equal
      if (lhsSum !== rhsSum) {
          printOut(`Mismatch at line ${line}: Leftside (${leftside.join(' + ')}) = ${lhsSum}, rightside (${rightside.join(' + ')}) = ${rhsSum}`);
          return; // Stop the loop if a mismatch is found
      }
  }

  // If all lines pass
  printOut("Maths fun!");
}

// Call the function
testMathExpressions();


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Recursive function. Create a function that calculates the factorial of a given number. Factorial of 5 = 5 * 4 * 3 * 2 * 1. Factorial of 6 = 6 * 5 * 4 * 3 * 2 * 1. Etc

function factorial(n) {
  // Base case: If n is 0 or 1, return 1
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
  }
}


let number = 8;
let result = factorial(number);
printOut("Factorial of " +  number + " is " + result);


printOut(newLine);
