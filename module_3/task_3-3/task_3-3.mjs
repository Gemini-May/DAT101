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

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

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

printOut("Replace this with you answer!");
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

printOut("Replace this with you answer!");
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
  }
}

convertTemperature(0, EtemperaturType.celsius);

printOut("Replace this with you answer!");
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

printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

function testMathIsFun() {
  let op = 1;
  let line = 1;

  // left side

  let ok = false;

  do {
    let sumLeft = 0;
    for (let left = 0; left < line + 1; left++) {
      sumLeft += op;
      op++;
    }

    let sumRight = 0;
    for (let Right = 0; Right < line; Right++) {
      sumRight += op;
      op++;
    }

    if (sumLeft !== sumLeft) {
      ok = false;
    } else {
      ok = true;
    }
    line++;
  } while (ok);
}

printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
