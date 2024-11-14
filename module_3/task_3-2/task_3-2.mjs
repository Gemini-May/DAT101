"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use "for" loops to generate two lines on the HTML page. One should count from 1 to 10, and the other
should count from 10 to 1. Use only two lines to print the rows. */


let countUpText = "";
for (let i = 1; i <= 10; i++) {
    countUpText += i + " ";
}
printOut(countUpText.toString())

let countDownText = "" ;    
for (let i = 10; i >= 1; i--) {
    countDownText += i + " ";
}
printOut(countDownText.toString());

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create a program that can guess a number between 1 and 60. Declare a variable and assign it a value, for
example, 45.*/

let correctNumber = 45;
let guessedNumber;
let attempts = 0;

while (guessedNumber !== correctNumber) {
    guessedNumber = Math.floor(Math.random()* 60) + 1;
    attempts++;
}
printOut("The number is " + guessedNumber.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Take the program from part 2 and expand it to guess a number between 1 and one million. Print the
number of guesses as well as the number of milliseconds it took to guess the number. */

let targetNumber = Math.floor(Math.random() * 1000000) + 1;
let startTime = Date.now();

while (guessedNumber !== targetNumber) {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1;
    attempts++;
}

let endTime = Date.now();
let timeTake = endTime - startTime;

printOut("The number is " + guessedNumber.toString());
printOut("It used " + attempts.toString() + " rounds");
printOut("The machine used " + timeTake.toString() + " milliseconds");

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Use a "for" loop and a "while" loop to find all prime numbers greater than 1 and less than 200. */

const primeNumbers = [];

for (let num =2; num < 200; num++) {
    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        primeNumbers.push(num);
    }
}

let num = 2

while (num < 200) {
    let isPrime = true;
    let i = 2;

    while (i <= Math.sqrt(num)) { 
        if (num % i === 0 ) {
            isPrime = false;
            break;
        }
        i++;
    }

    if (isPrime) {
        primeNumbers.push(num);
    }

    num++;
}

printOut(primeNumbers.toString());


printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Create two loops that print 9 columns and 7 rows with the text "K1, R1" for the first cell, "K2, R1" for the
second cell, and so on. */



for (let r = 1; r <= 7; r++) {
    let row = "";
    
    for (let k = 1; k <= 9; k++) {
        row += `K${k}R${r} `;
    }


    printOut(row.toString());
}

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Simulate 5 student grades using the Math.random() function, from 1 to 236 (inclusive). */


const students = ["student1", "student2", "student3", "student4", "student5"];

for (let i = 0; i < students.length; i++) {

    const randomPoints = Math.floor(Math.random() * 236) + 1;
const percentage = (randomPoints/236) * 100;
 let grade = "";

      if (percentage >= 89) {
        grade = "A";
    } else if (percentage >= 77) {
        grade = "B";
    } else if (percentage >= 65) {
        grade = "C";
    } else if (percentage >= 53) {
        grade = "D";
    } else if (percentage >= 41) {
        grade = "E";
    } else {
        grade = "F";
    }

    if (students[i]) {
    printOut(students[i].toString() + " got points " + randomPoints.toString() + " which is " + percentage.toFixed() + "% and therefor grade " + grade);
    }
}


printOut(newLine);



printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
/*Simulate 6 dice and print how many "throws" it takes to get */



function rollDice() {
    const dice = [];
    for (let i = 0; i < 6; i++) {
        dice.push(Math.floor(Math.random() * 6) + 1);
    }
    return dice;
}

// Full straight (1, 2, 3, 4, 5, 6)
function fullStraight() {
    let throws = 0;
    let gotStraight = false;
    let finalDice;

    do {
        throws++;
        const dice = rollDice();
        dice.sort(); // Sort to make it easier to check

        gotStraight = (dice.join('') === '123456');

        if (gotStraight) {
            finalDice = dice;
        }

    } while (!gotStraight);

    printOut("Got full straight in " + throws.toString() + " throws");
    printOut(finalDice.toString());
    printOut("");
    return throws;
}


//Three pairs
function threePairs() {
    let throws = 0;
    let gotThreePairs = false;
    let finalDice;

    do {
        throws++;
        const dice = rollDice();
        
        // Count occurrences of each number
        const counts = {};
        for (let i = 0; i < dice.length; i++) {
            const num = dice[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        // Count pairs
        let pairs = 0;
        for (const num in counts) {
            if (counts[num] === 2) {
                pairs++;
            }
        }

        gotThreePairs = (pairs === 3);

        if (gotThreePairs) {
            finalDice = dice
        }

    } while (!gotThreePairs);

    printOut("Got three pairs in " + throws + " throws");
    printOut(finalDice.toString());
    printOut("");

    return throws;
}

//Tower (2 of a kind and 4 of a kind)
function tower() {
    let throws = 0;
    let gotTower = false;
    let finalDice;

    do {
        throws++;
        const dice = rollDice();

        // Count occurrences of each number
        const counts = {};
        for (let i = 0; i < dice.length; i++) {
            const num = dice[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }

        // Check for 2 of a kind and 4 of a kind
        let hasTwo = false;
        let hasFour = false;
        for (const num in counts) {
            if (counts[num] === 2) {
                hasTwo = true;
            }
            if (counts[num] === 4) {
                hasFour = true;
            }
        }

        gotTower = hasTwo && hasFour;

        if (gotTower) {
            finalDice = dice
        }

    } while (!gotTower);

    printOut("Got tower in " + throws + " throws");
    printOut(finalDice.toString());
    printOut("");

    return throws;
}

// Yahtzee (all the same)
function yahtzee() {
    let throws = 0;
    let gotYahtzee = false;
    let finalDice;

    do {
        throws++;
        const dice = rollDice();

        // Check if all elements in the dice array are the same
        const first = dice[0];
        gotYahtzee = dice.every(die => die === first);
        
        if (gotYahtzee) {
            finalDice = dice
        }

    } while (!gotYahtzee);

    printOut("Got YAHTZEE!!! in " + throws + " throws");
    printOut(finalDice.toString());
    printOut("");

    return throws;
}


fullStraight();
threePairs();
tower();
yahtzee();




printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with you answer!");
printOut(newLine);
