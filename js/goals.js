const goalForm = document.querySelector(".goal-form");
const goalInput = document.querySelector(".goal-form input");
const goalList = document.querySelector(".goal-list");

const GOALS_KEY = "goals";

let goals = [];

function saveGoals() {
  localStorage.setItem(GOALS_KEY, JSON.stringify(goals));
}

function deleteGoal(event) {
  const li = event.target.parentElement;
  li.remove();
  goals = goals.filter((goalObj) => goalObj.id !== parseInt(li.id));
  saveGoals();
}

function paintGoal(newGoalObj) {
  if (goalList.childElementCount > 11) {
    return;
  } else {
    const li = document.createElement("li");
    li.id = newGoalObj.id;
    const span = document.createElement("span");
    span.innerText = newGoalObj.text;
    const button = document.createElement("button");
    button.innerText = "✔";
    button.addEventListener("click", deleteGoal);
    li.appendChild(span);
    li.appendChild(button);
    goalList.appendChild(li);
  }
}

function handleGoalSubmit(event) {
  event.preventDefault();
  const newGoal = goalInput.value;
  goalInput.value = "";
  const newGoalObj = {
    text: newGoal,
    id: Date.now(),
  };
  goals.push(newGoalObj);
  paintGoal(newGoalObj);
  saveGoals();
}

goalForm.addEventListener("submit", handleGoalSubmit);

const savedGoals = localStorage.getItem(GOALS_KEY);

if (savedGoals) {
  const parsedGoals = JSON.parse(savedGoals);
  goals = parsedGoals;
  parsedGoals.forEach(paintGoal);
}
