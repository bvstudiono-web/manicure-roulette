document.addEventListener("DOMContentLoaded", () => {

 

  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const resultBox = document.getElementById("result");

  const cards = [
    { title: "Lengde", values: ["Korte negler", "Lange negler"] },
    { title: "Form", values: ["Firkantet", "Myk firkant", "Mandelform"] },
    { title: "Design", values: ["Uten design", "Enkel design", "Med design"] },
    { title: "Farge", values: ["Lyse farger", "Mørke farger"] },
    { title: "Finish", values: ["Glossy", "Matt"] },
    { title: "Bonus", values: ["Én accent-negl", "Litt glitter", "French twist", "Ingen bonus"] }
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  async function playGame() {
    resultBox.classList.remove("hidden");
    resultBox.innerHTML = "<h3>🎴 Trekker kort...</h3>";

    let html = "<h3>✨ Din manikyr</h3><ul>";

    for (const card of cards) {
      await new Promise(r => setTimeout(r, 500));
      html += <li><strong>${card.title}:</strong> ${pick(card.values)}</li>;
      resultBox.innerHTML = html + "</ul>";
    }

    html += "</ul><p style='margin-top:16px;color:#c9c9c9'>Snakk med din negledesigner 💅</p>";
    resultBox.innerHTML = html;

    restartBtn.classList.remove("hidden");
    startBtn.classList.remove("hidden");
  }

  startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    restartBtn.classList.add("hidden");
    playGame();
  });

  restartBtn.addEventListener("click", () => {
    resultBox.classList.add("hidden");
    startBtn.classList.remove("hidden");
  });
});
