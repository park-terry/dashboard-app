// tap menu
const tap = document.querySelectorAll(".navbar .tap-menu li a");
const con = document.querySelectorAll("section");

tap.forEach((tap) => {
  tap.addEventListener("click", (event) => {
    event.preventDefault();

    con.forEach((con) => {
      con.classList.remove("show");
      con.classList.add("hidden");
    });

    const active = tap.getAttribute("href");
    document.querySelector(active).classList.remove("hidden");
    document.querySelector(active).classList.add("show");
  });
});

const tapColor = document.querySelectorAll(".navbar .tap-menu li");

tapColor.forEach((tap) => {
  tap.addEventListener("click", () => {
    tapColor.forEach((tap) => tap.classList.remove("active"));
    tap.classList.add("active");
  });
});

// log-in
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show greetings
  paintGreetings(savedUsername);
}

// log-out
const logOutBtn = document.querySelector(".log-out");

function onLogoutClick() {
  localStorage.clear();
  window.location.reload();
}

logOutBtn.addEventListener("click", onLogoutClick);
