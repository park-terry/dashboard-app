const infos = [
  {
    info: "The way to get started is to quit talking and begin doing.",
    desc: "Walt Disney",
  },
  {
    info: "Life is what happens when you're busy making other plans.",
    desc: "John Lennon",
  },
  {
    info: "The world is a book and those who do not travel read only one page.",
    desc: "Saint Augustine",
  },
  {
    info: "Life is either a daring adventure or nothing at all.",
    desc: "Helen Keller",
  },
  {
    info: "To Travel is to Live",
    desc: "Hans Christian Andersen",
  },
  {
    info: "Only a life lived for others is a life worthwhile.",
    desc: "Albert Einstein",
  },
  {
    info: "You only live once, but if you do it right, once is enough.",
    desc: "Mae West",
  },
  {
    info: "Never go on trips with anyone you do not love.",
    desc: "Hemmingway",
  },
  {
    info: "We wander for distraction, but we travel for fulfilment.",
    desc: "Hilaire Belloc",
  },
  {
    info: "Travel expands the mind and fills the gap.",
    desc: "Sheda Savage",
  },
];

const info = document.querySelector("#info span:first-child");
const desc = document.querySelector("#info span:last-child");
const todaysInfo = infos[Math.floor(Math.random() * infos.length)];

info.innerText = todaysInfo.info;
desc.innerText = todaysInfo.desc;
