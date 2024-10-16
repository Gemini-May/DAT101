"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1, 2, 3 ----------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Complete the given "if" in the task_3-3.mjs file at part 1, statement so that it matches this: If I wake up at
exactly 7 o'clock then I can catch the bus to school. Run the program with different values of wake-up time
(6, 7, 8)*/

let wakeUpTime = 9;
printOut("Wake up time = " + wakeUpTime.toString());

if (wakeUpTime === 7) {
  printOut("I can take the bus to school.");
} else if (wakeUpTime === 8){
  printOut(" I can take the train to school. ");
} else {
  printOut("I have to take the car to school. ");
}
printOut(newLine);

printOut("--- Part 4, 5 --------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Write an if statement that checks whether an integer variable is negative or positive, print the text
"Positive" or "Negative" accordingly. Run the program with different types of values for the variable to
check the if statement*/

let value = -3
printOut("Oppgave 4 value = " + value.toString());

if (value > 0) {
  printOut("Value is positive");
} else if (value < 0) {
  printOut("Value is negative");
} else {
  printOut("Value is zero");
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a variable that holds a generated random integer between 1 and 8 (inclusive). Use this variable to
simulate the uploaded image size and print it. Then create an if statement that prints out “Thank you” if the
size is equal to or greater than the limit. Otherwise, print out "The image is too small".*/

const imageSize = Math.floor(Math.random() * 8) + 1;
printOut("Generated Image Size = " + imageSize.toString());

if (imageSize >= 4) {
  printOut("Image is accepted, thank you. ");
} else {
  printOut("Image is too small. ");
}

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Expand part 6 to exclude if the image size is larger or equal to 6MP, then print out “Image is too large"*/ 

printOut("Generated Image Size = " + imageSize.toString());

if (imageSize >= 6) {
  printOut("Image is to large. ");
} else if (imageSize >= 4) {
  printOut("Image is accepted, thank you. ");
} else {
  printOut("Image is too small. ");
}

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/

const monthList = ["January", "February", "March", "April", "May",
"Jun", "Juli", "August", "September", "October", "November", "December"];
const noOfMonth = monthList.length;
const monthName = monthList[Math.floor(Math.random() * noOfMonth)];
printOut("Month = " + monthName.toString());

if (monthName.includes("r")) {
  printOut("You must take Vitamin D ");
} else {
  printOut("You don't need to take Vitamin D ");
}

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Expand exercise 8 to print how many days there are in the current month. And do not use date object*/

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const monthIndex = Math.floor(Math.random() * noOfMonth);
const month = monthList[monthIndex];
const days = daysInMonth[monthIndex];

printOut("It is " + days.toString() + " days in month " + month.toString());

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Imagine you have an art gallery, but you need to refurbish the premises, so you close the gallery from
March through May, but in April you have temporary premises in the building next door. Use the month
constant in exercise 8 to inform the status of your gallery in that month.*/


if (monthName === "March" || monthName === "May") {
  printOut(monthName.toString() + " 'The Art Gallery' is unfortunately closed ");
} else if (monthName === "April") {
  printOut(monthName.toString() + " 'The Art Gallery' is open in temporary premises next door.");
} else {
  printOut(monthName.toString() + " 'The Art Gallery' is open");
}

printOut(newLine);
