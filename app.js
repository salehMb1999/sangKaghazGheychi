const $ = document;
const userScoreElem = $.getElementById("user-score");
const computerScoreElem = $.getElementById("computer-score");
const userResult = $.getElementById("user-result");
const computerResult = $.getElementById("computer-result");
const space = $.getElementById("space");
let userScore = 0;
let computerScore = 0;
const scoreBoard = $.querySelector(".score-board");
const result = $.querySelector("#result");
const rock = $.querySelector("#r");
const paper = $.querySelector("#p");
const scissors = $.querySelector("#s");
const computerChoiceGenerator = () => {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};
const win = (user, computer) => {
  userScore++;
  userScoreElem.innerHTML = userScore;
  computerScoreElem.innerHTML = computerScore;

  document.getElementById(user).classList.add("green-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("green-glow");
  }, 2000);
  if (user == "p") {
    userResult.innerHTML = "کاغذ";
    userResult.style.color = "green";
    computerResult.innerHTML = "سنگ";
    computerResult.style.color = "#e2584d";
    space.innerHTML = ":";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "🔥کاغذ سنگ رو میگیره، تو بردی";
  }
  if (user == "s") {
    userResult.innerHTML = "قیچی";
    userResult.style.color = "green";
    computerResult.innerHTML = "کاغذ";
    computerResult.style.color = "#e2584d";
    space.innerHTML = ":";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "🔥قیچی کاغذ رو میبره، تو بردی";
  }
  if (user == "r") {
    userResult.innerHTML = "سنگ";
    userResult.style.color = "green";
    computerResult.innerHTML = "قیچی";
    computerResult.style.color = "#e2584d";
    space.innerHTML = ":";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "🔥سنگ قیچی رو میشکونه، تو بردی";
  }
};
const lose = (user, computer) => {
  computerScore++;
  userScoreElem.innerHTML = userScore;
  computerScoreElem.innerHTML = computerScore;
  space.innerHTML = ":";

  document.getElementById(user).classList.add("red-glow");
  document.getElementById(computer).classList.add("green-glow");

  setTimeout(() => {
    document.getElementById(user).classList.remove("red-glow");
    document.getElementById(computer).classList.remove("green-glow");
  }, 2000);
  if (computer == "p") {
    computerResult.innerHTML = "کاغذ";
    computerResult.style.color = "green";
    userResult.innerHTML = "سنگ";
    userResult.style.color = "#e2584d";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "💩کاغذ سنگ رو میگیره، تو باختی";
  }
  if (computer == "s") {
    computerResult.innerHTML = "قیچی";
    computerResult.style.color = "green";
    userResult.innerHTML = "کاغذ";
    userResult.style.color = "#e2584d";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "💩قیچی کاغذ رو میبره، تو باختی";
  }
  if (computer == "r") {
    computerResult.innerHTML = "سنگ";
    computerResult.style.color = "green";
    userResult.innerHTML = "قیچی";
    userResult.style.color = "#e2584d";
    // setTimeout(() => {
    //     computerResult.innerHTML = ""
    //     userResult.innerHTML = ""
    // },3000)
    result.innerHTML = "💩سنگ قیچی رو میشکونه، تو باختی";
  }
};
const draw = (user) => {
  document.getElementById(user).classList.add("grey-glow");
  setTimeout(() => {
    document.getElementById(user).classList.remove("grey-glow");
  }, 2000);
  space.innerHTML = ":";

  if (user == "p") {
    userResult.innerHTML = "کاغذ";
    userResult.style.color = "#cecaca";
    computerResult.innerHTML = "کاغذ";
    computerResult.style.color = "#cecaca";

    result.innerHTML = "😐مساوی";
  }
  if (user == "s") {
    userResult.innerHTML = "قیچی";
    userResult.style.color = "#cecaca";
    computerResult.innerHTML = "قیچی";
    computerResult.style.color = "#cecaca";

    result.innerHTML = "😐مساوی";
  }
  if (user == "r") {
    userResult.innerHTML = "سنگ";
    userResult.style.color = "#cecaca";
    computerResult.innerHTML = "سنگ";
    computerResult.style.color = "#cecaca";

    result.innerHTML = "😐مساوی";
  }
};
const game = (userChoice) => {
  const computerChoice = computerChoiceGenerator();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
};

const main = () => {
  rock.addEventListener("click", () => {
    game("r");
  });
  paper.addEventListener("click", () => {
    game("p");
  });
  scissors.addEventListener("click", () => {
    game("s");
  });
};
main();
