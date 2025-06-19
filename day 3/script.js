const choices = ["Stone", "Paper", "Pencil", "Scissor"];

const rules = {
  Stone: ["Scissor", "Pencil"],
  Paper: ["Stone"],
  Pencil: ["Paper"],
  Scissor: ["Pencil", "Paper"]
};

function play(userChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (rules[userChoice] && rules[userChoice].includes(computerChoice)) {
    result = `You win! 🎉 ${userChoice} beats ${computerChoice}`;
  } else {
    result = `You lose! 😢 ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById("result").innerHTML = `
    You chose: <strong>${userChoice}</strong><br>
    Computer chose: <strong>${computerChoice}</strong><br><br>
    ${result}
  `;
}
