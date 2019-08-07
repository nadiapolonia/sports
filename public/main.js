const main = () => {
  document.querySelector(".team-1-score").textContent = 0;
  document.querySelector(".team-2-score").textContent = 0;
  document.querySelector(".team-1-name").textContent = "Team 1";
  document.querySelector(".team-2-name ").textContent = "Team 2";
  document.querySelector(".team-1-input").value = "";
  document.querySelector(".team-2-input").value = "";
  document.querySelector(".team-1-add-1-button").disabled = false;
  document.querySelector(".team-1-subtract-1-button").disabled = false;
  document.querySelector(".team-2-subtract-1-button").disabled = false;
  document.querySelector(".team-2-add-1-button").disabled = false;
  document.querySelector(".reset").classList.add("hide");
  console.log("Game reset!");
};

let currentScore = 0;
let currentScore1 = 0;
let currentScore2 = 0;
outputMessageTeam1 = document.querySelector(".output-1");
outputMessageTeam2 = document.querySelector(".output-2");

//Team 1
let addTeam1Score = () => {
  //function to add 1 to Team 1 Score//
  // get the current score
  let currentScore1 = document.querySelector(".team-1-score").textContent;
  // add 1
  currentScore1 = parseInt(currentScore1) + 1;
  // update the html equal it to the addition function
  document.querySelector(".team-1-score").textContent = currentScore1;
  console.log("adding one to team one score", currentScore1);

  if (currentScore1 >= 21) {
    console.log("Team 1 Wins!");
    outputMessageTeam1.textContent = "You win!";
    outputMessageTeam2.textContent = "You lose!";
    document.querySelector(".reset").classList.remove("hide");
    document.querySelector(".team-1-add-1-button").disabled = true;
    document.querySelector(".team-1-subtract-1-button").disabled = true;
    document.querySelector(".team-2-subtract-1-button").disabled = true;
    document.querySelector(".team-2-add-1-button").disabled = true;
  }
};

let subtractTeam1Score = () => {
  //function to subtract 1 to Team 1 Score
  //retrieve the current store
  let currentScore1 = document.querySelector(".team-1-score").textContent;
  //subtract 1
  currentScore1 = parseInt(currentScore1) - 1;
  //update the html equal it to the subtraction function
  document.querySelector(".team-1-score").textContent = currentScore1;
  console.log("subtracting one from team one score", currentScore1);

  if (currentScore1 < 1) {
    console.log("Team 1 loses!");
    outputMessageTeam1.textContent = "You lose!";
    outputMessageTeam2.textContent = "You win!";
    document.querySelector(".reset").classList.remove("hide");
    document.querySelector(".team-1-add-1-button").disabled = true;
    document.querySelector(".team-1-subtract-1-button").disabled = true;
    document.querySelector(".team-2-subtract-1-button").disabled = true;
    document.querySelector(".team-2-add-1-button").disabled = true;
  }
};

//Team 2

let addTeam2Score = () => {
  let currentScore2 = document.querySelector(".team-2-score").textContent;
  currentScore2 = parseInt(currentScore2) + 1;
  document.querySelector(".team-2-score").textContent = currentScore2;
  console.log("adding one to team two score", currentScore2);

  if (currentScore2 >= 21) {
    console.log("Team 2 Wins!");
    outputMessageTeam2.textContent = "You win!";
    outputMessageTeam1.textContent = "You lose!";
    document.querySelector(".reset").classList.remove("hide");
    document.querySelector(".team-1-add-1-button").disabled = true;
    document.querySelector(".team-1-subtract-1-button").disabled = true;
    document.querySelector(".team-2-subtract-1-button").disabled = true;
    document.querySelector(".team-2-add-1-button").disabled = true;
  }
};

let subtractTeam2Score = () => {
  let currentScore2 = document.querySelector(".team-2-score").textContent;
  currentScore2 = parseInt(currentScore2) - 1;
  document.querySelector(".team-2-score").textContent = currentScore2;
  console.log("subtracting one from team two score", currentScore2);

  if (currentScore2 < 1) {
    console.log("Team 2 loses!");
    outputMessageTeam2.textContent = "You lose!";
    outputMessageTeam1.textContent = "You win!";
    document.querySelector(".reset").classList.remove("hide");
    document.querySelector(".team-1-add-1-button").disabled = true;
    document.querySelector(".team-1-subtract-1-button").disabled = true;
    document.querySelector(".team-2-subtract-1-button").disabled = true;
    document.querySelector(".team-2-add-1-button").disabled = true;
  }
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
  .querySelector(".team-2-subtract-1-button")
  .addEventListener("click", subtractTeam2Score);

document
  .querySelector(".update-team-1-name")
  .addEventListener("click", updateTeam1Name);

document
  .querySelector(".update-team-2-name")
  .addEventListener("click", updateTeam2Name);

document.querySelector(".reset").addEventListener("click", main);

document.addEventListener("DOMContentLoaded", main);
