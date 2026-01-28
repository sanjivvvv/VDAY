const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainGif = document.getElementById("mainGif");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");

let yesScale = 1;

const noTexts = [
  "Are you sure?",
  "Really sure?",
  "Just say yes 🥺",
  "Don’t break my heart 💔",
  "Last chance 😭"
];

let noCount = 0;

noBtn.addEventListener("click", () => {
  yesScale += 0.25;
  yesBtn.style.transform = `scale(${yesScale})`;

  noBtn.textContent =
    noTexts[Math.min(noCount, noTexts.length - 1)];
  noCount++;
});

yesBtn.addEventListener("click", () => {
  mainGif.src = "assets/fireworks.gif";
  question.textContent = "YAYYYY!!! 🎆💖";
  buttons.style.display = "none";
});

