const main = () => {
  if (document.querySelector("h1.hello-world")) {
    document.querySelector("h1.hello-world").textContent = "Hello, World!";
  }
};

//const team1add1button = document.querySelector('.team-1-add-1-button');
//cost team1score = document.querySelector('.team-1-score').textContent;
//const addscore = parseInt(team1score) +1;

let addTeam1Score = () => {
  //function to add 1 to Team 1 Score//
  // get the current score
  let currentScore = document.querySelector(".team-1-score").textContent;
  // add 1
  currentScore = parseInt(currentScore) + 1;
  // update the html equal it to the addition function
  document.querySelector(".team-1-score").textContent = currentScore;
  console.log("adding one to team one score", currentScore);
};

let addTeam2Score = () => {
  let currentScore = document.querySelector(".team-2-score").textContent;
  currentScore = parseInt(currentScore) + 1;
  document.querySelector(".team-2-score").textContent = currentScore;
  console.log("adding one to team two score", currentScore);
};

let subtractTeam1Score = () => {
  //function to subtract 1 to Team 1 Score
  //retrieve the current store
  let currentScore = document.querySelector(".team-1-score").textContent;
  //subtract 1
  currentScore = parseInt(currentScore) - 1;
  //update the html equal it to the subtraction function
  document.querySelector(".team-1-score").textContent = currentScore;
  console.log("subtracting one from team one score", currentScore);
};

let subtractTeam2Score = () => {
  let currentScore = document.querySelector(".team-2-score").textContent;
  currentScore = parseInt(currentScore) - 1;
  document.querySelector(".team-2-score").textContent = currentScore;
  console.log("subtracting one from team two score", currentScore);
};

let updateTeam1Name = () => {
  console.log("updating team one name");
  document.querySelector(".team-1-name").textContent = document.querySelector(
    ".team-1-input"
  ).value;
};

let updateTeam2Name = () => {
  console.log("updating team two name");
  document.querySelector(".team-2-name").textContent = document.querySelector(
    ".team-2-input"
  ).value;
};

document
  .querySelector(".team-1-add-1-button")
  .addEventListener("click", addTeam1Score);

document
  .querySelector(".team-2-add-1-button")
  .addEventListener("click", addTeam2Score);

document
  .querySelector(".team-1-subtract-1-button")
  .addEventListener("click", subtractTeam1Score);

document
  .querySelector(".update-team-1-name")
  .addEventListener("click", updateTeam1Name);

document
  .querySelector(".update-team-2-name")
  .addEventListener("click", updateTeam2Name);

document.addEventListener("DOMContentLoaded", main);
