"use strict";

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle */

function cmbTask1CalculateClick() {
  const width = document.getElementById("txtRectWidth").value;
  const height = document.getElementById("txtRectHeight").value;
  const perimeter = 2 * (width + height);
  const area = width * height;


  document.getElementById("txtTask1Output").textContent = `Circumference = ${perimeter}, Area = ${area}`;

}

document.getElementById('cmbTask1Calculate').addEventListener('click', cmbTask1CalculateClick);

//--- Part 2 ----------------------------------------------------------------------------------------------
/* Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter", add the word to the task2Words array and print how
many words and all the words in txtTask2Output. Clear the input field every time the user presses
"enter" or "return". */

const txtTask2Word = document.getElementById("txtTask2Word");
const txtTask2Output = document.getElementById("txtTask2Output");
let task2Words = [];


function txtTask2WordKeyPress(event) {
  if (event.key === "Enter") {
    const input = document.getElementById("txtTask2Word");
    const word = txtTask2Word.value.trim();
    if (word) {
      task2Words.push(word);
      const output = document.getElementById("txtTask2Output");
      output.textContent = `Number of words = ${task2Words.length}: ${task2Words.join(", ")}`;
      input.value = ""; // Clear the input
    }
  }
}

document.getElementById("txtTask2Word").addEventListener("keypress", txtTask2WordKeyPress);
 
//--- Part 3 ----------------------------------------------------------------------------------------------
/* Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output. */

function checkSelectedCheckboxes() {
  const checkboxes = document.querySelectorAll("input[name='chkTask3']:checked");
  const selectedValues = Array.from(checkboxes).map((checkbox) => checkbox.value);
  const output = document.getElementById("txtTask3Output");
  output.textContent = `Selected values: ${selectedValues.join(", ")}`;
}

document.getElementById("cmbTask3CheckAnswer").addEventListener("click", checkSelectedCheckboxes);

//--- Part 4 ----------------------------------------------------------------------------------------------
/* Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output. */

const divTask4Cars = document.getElementById("divTask4Cars");

function populateCarRadios() {
  CarTypes.forEach((car) => {
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "task4Cars";
    radio.value = car.caption;
    radio.id = `car_${car.value}`;
    
    const label = document.createElement("label");
    label.htmlFor = radio.id;
    label.textContent = car.caption;

    divTask4Cars.appendChild(radio);
    divTask4Cars.appendChild(label);
    divTask4Cars.appendChild(document.createElement("br"));
  });
}

function getSelectedCar() {
  const selectedCar = document.querySelector("input[name='task4Cars']:checked");
  const output = document.getElementById("txtTask4Output");
  output.textContent = selectedCar ? `Selected car: ${selectedCar.value}` : "No car selected.";
}

divTask4Cars.addEventListener("change", getSelectedCar);
populateCarRadios();

//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element. */

function showAnimalSelection() {
  const select = document.getElementById("selectTask5Animals");
  const output = document.getElementById("txtTask5Output");
  output.textContent = `Selected animal: ${select.value}`;
}

document.getElementById("selectTask5Animals").addEventListener("change", showAnimalSelection);

//--- Part 6 ----------------------------------------------------------------------------------------------
/* Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output. */

const selectTask6Girls = document.getElementById("selectTask6Girls");

function populateGirlsDropdown() {
  GirlsNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    selectTask6Girls.appendChild(option);
  });
}

function showGirlSelection() {
  const output = document.getElementById("txtTask6Output");
  output.textContent = `Selected name: ${selectTask6Girls.value}`;
}

selectTask6Girls.addEventListener("change", showGirlSelection);
populateGirlsDropdown();

//--- Part 7 ----------------------------------------------------------------------------------------------
/* Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre. */

const selectMovieGenre = document.getElementById("selectMovieGenre");
const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");
const cmbAddMovie = document.getElementById("cmbAddMovie");
const tblMovies = document.getElementById("tblMovies");

// Populate dropdown
MovieGenre.forEach(genre => {
  const option = document.createElement("option");
  option.value = genre;
  option.textContent = genre;
  selectMovieGenre.appendChild(option);
});

// Add movie to table
cmbAddMovie.addEventListener("click", function () {
  const title = txtMovieTitle.value.trim();
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value.trim();
  const rate = txtMovieRate.value;

  if (title && director && rate) {
    const row = tblMovies.insertRow();
    const cellNr = row.insertCell(0);
    const cellTitle = row.insertCell(1);
    const cellGenre = row.insertCell(2);
    const cellDirector = row.insertCell(3);
    const cellRate = row.insertCell(4);

    cellNr.textContent = tblMovies.rows.length - 1; // Row number
    cellTitle.textContent = title;
    cellGenre.textContent = genre;
    cellDirector.textContent = director;
    cellRate.textContent = rate;

    // Clear input fields
    txtMovieTitle.value = "";
    txtMovieDirector.value = "";
    txtMovieRate.value = "5";
  } else {
    alert("Please fill in all fields.");
  }
});
