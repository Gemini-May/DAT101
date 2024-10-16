"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Calculate 2+3*2-4*6=-34
let resultat = 2+3*(2-4)*6;

printOut(resultat.toString());
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//converter 25m og 34cm til inches. 1inch=25.4mm

const milliinch = 25.4;
const answer = 25.34 * 1000/milliinch;
const exactanswer =answer.toFixed(2);

printOut("exactanswer = " + exactanswer.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// convert 

const secondsInMinute = 60;
const minutesInHour = 60;
const HoursInDay = 24;
const part2_answer =
(3 * HoursInDay * minutesInHour) +
(12 * minutesInHour) + 
14 +
(45 / secondsInMinute);

printOut("part2_answer = " + part2_answer.toString());
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Convert 6,322.52 minutes to days, hours, minutes, and seconds.

const numberOfMinutes = 6322.52;
let part4_calc = numberOfMinutes / (60*24);
const part4_days = Math.floor(part4_calc);
printOut("Days = " + part4_days);

part4_calc = part4_calc - part4_days;
part4_calc = part4_calc * HoursInDay;
const part4_hour = Math.floor(part4_calc);
printOut("Hour = " + part4_hour);

part4_calc = part4_calc - part4_hour;
part4_calc = part4_calc * minutesInHour;
const part4_minutes = Math.floor(part4_calc);
printOut("Minutes = " + part4_minutes);

part4_calc = part4_calc - part4_minutes;
part4_calc = part4_calc * secondsInMinute;
const part4_seconds = Math.floor(part4_calc);
printOut("Seconds = " + part4_seconds);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert 54 dollars to Norwegian kroner, and print the price for both

const NOK = 76 / 8.6;
const USD = 8.6 / 76;

const amountUSD = 54;
const nokamoutFromusd = Math.round(amountUSD * USD);

const amountNok = nokamoutFromusd;
const UsdAmountFromNok = Math.round(amountNok * NOK);

printOut("dollar " + UsdAmountFromNok +"kroner " + nokamoutFromusd);

printOut("Kroner " + nokamoutFromusd + "dollar " + UsdAmountFromNok);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Create a variable that contains the following text

const text = "There is much between heaven and earth that we do not understand";
printOut("It is " + text.length.toString() + " words");

printOut("letter 19 is " + text.charAt(19));

printOut("the substing from 35 and 8 letters forward is: " + text.substring(35,44));

printOut("the word earth begins at position " + text.indexOf("earth"));

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Comparison, print the values for the following expressions (evaluate whether the statements are true)

const Greater = 5 > 3;
printOut("5 > 3 is " + Greater.toString());

const greaterOrequal = 7 >= 7
printOut("7 >= 7 is " + greaterOrequal.toString());

const a = "a";
const b = "b";
const greaterthan = a > b;
printOut("a > b is " + greaterthan.toString());

const lessthan = 1 < a;
printOut("1 < a is " + lessthan.toString());

const abcd = "abcd";
const lessthan2 = (2500 < abcd) === false;
printOut("2500 < abcd is " + lessthan2.toString());

const Arne = "Arne";
const Thomas = "Thomas";
const NameNotequal = Arne != Thomas;
printOut("Arne != Thomas is "  + NameNotequal.toString());

const twoequalfive = 2 === 5;
printOut("(2 === 5) === true is " + twoequalfive.toString());

const bcd = "bcd";
const greaterthan2 = (abcd > bcd) === false;
printOut("(abcd > bcd) === false is " + greaterthan2.toString());

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
//Convert and print the following expressions

let number1 = "254";
parseInt(number1);
printOut( "'254' is " + number1.toString());

let number2 = "57.23";
parseInt(number2);
printOut("'57.23' is " + number2.toString());

let number3 = "25 kroner";
parseInt(number3);
printOut("'25 kroner' is " + number3.toString());

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Create a variable "r" and randomly generate a number from 1 to 360 (1 >= r <= 360).

let r = Math.ceil(Math.random() * 360) + 1;
printOut("Random number = " + r.toString());

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
// Use modulus (%) to calculate how many weeks and days are in 131 days

const totaldays = 131;

const weeks = Math.floor(totaldays/7);
const days = totaldays % 7

printOut("Weeks = " + weeks.toString());
printOut("Days = " + days.toString());

printOut(newLine);