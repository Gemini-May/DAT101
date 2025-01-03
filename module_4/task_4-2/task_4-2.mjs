"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/*Array Creation & Traversal*/

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// Use a for loop to traverse and print all elements
for (let i = 0; i < numbers.length; i++) {
    printOut(numbers[i].toString());
}

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Array Joining*/

printOut(numbers.join('-'));

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* String to Array & Traversal*/

const text = "Hei på deg, hvordan har du det?";
const words = text.split(' ');
words.forEach((word, index) => {
    printOut(`Word ${index + 1} (Index ${index}): ${word}`);
});

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Array Manipulation: Removing Elements*/

const girlNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];
function removeElement(array, element) {
    const index = array.indexOf(element);
    if (index !== -1) {
        array.splice(index, 1);
        printOut(`Removed: ${element}`);
    } else {
        printOut(`${element} does not exist in the array.`);
    }
}
removeElement(girlNames, "Kari");

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Array Merging*/

const boyNames = ["Jakob", "Lucas", "Emil", "Oskar", "Oliver", "William", "Filip", "Noah", "Elias", "Isak", "Henrik", "Aksel", "Kasper", "Mathias", "Jonas", "Tobias", "Liam", "Håkon", "Theodor", "Magnus"];
const allNames = girlNames.concat(boyNames);
printOut(allNames.join(" , "));


printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/*Creating a Book Class*/

class TBook {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    toString() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`;
    }
}

const books = [
    new TBook("Book 1", "Author A", "1234567890"),
    new TBook("Book 2", "Author B", "0987654321"),
    new TBook("Book 3", "Author C", "1122334455")
];

for (let book of books) {
    printOut(book.toString());
}


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Arrays of Objects & Static Objects*/

const EWeekDays = {
    WeakDay1: { value: 0x01, name: "Mandag"},
    WeakDay2: {value: 0x02, name:"Tirsdag"},
    WeakDay3: { value: 0x03, name: "Onsdag"},
    WeakDay4: { value: 0x04, name: "Torsdag"},
    WeakDay5: { value: 0x05, name: "Fredag"},
    WeakDay6: { value: 0x06, name: "Lørdag"},
    WeakDay7: { value: 0x07, name: "Søndag"},
    WorkDays: { value: 0x01 + 0x02 + 0x03 + 0x04 + 0x05, name: "Arbeidsdager"},
    Weekdays: { value: 0x06 + 0x07, name: "Helg"}
};

// Create an array of keys from the EWeekDays object
const weekDaysKeys = Object.keys(EWeekDays);

// Loop through the keys and print the elements from the EWeekDays object
weekDaysKeys.forEach(key => {
    const day = EWeekDays[key];
    printOut(`${key}: ${day.name} (Value: ${day.value})`);
})


printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Sorting & Callbacks*/

const randomNumbers = Array.from({ length: 35 }, () => Math.floor(Math.random() * 20) + 1);
randomNumbers.sort((a, b) => a - b);
printOut("Ascending Order: " + randomNumbers.join(', '));
randomNumbers.sort((a, b) => b - a);
printOut("Descending Order: " + randomNumbers.join(', '));


printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Frequency Analysis*/

const frequencyMap = randomNumbers.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});

const frequencyArray = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1] || a[0] - b[0]);
for (let [num, freq] of frequencyArray) {
    printOut(`Number: ${num}, Frequency: ${freq}`);
}


printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Two-Dimensional Arrays*/

let array = [];

for (let i = 0; i < 5; i++) {
    let row = []; // create an empty row for each iteration
    for (let j = 0; j < 9; j++) {
        row.push(`Row ${i + 1}, Col ${j + 1}`); // Add a string representing the row and column
    }
    array.push(row); // Add the row to the main array
}

// Now, let's print the array
printOut("Array content:");
for (let i = 0; i < 5; i++) {
    let rowString = ''; // Initialize an empty string for the row
    for (let j = 0; j < 9; j++) {
        rowString += array[i][j] + '\t'; // Append each cell value with a tab separator
    }
    printOut(rowString);
}

printOut(newLine);
