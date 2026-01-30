document.addEventListener("DOMContentLoaded", () => {

  const startBtn = document.getElementById("startBtn");
  const restartBtn = document.getElementById("restartBtn");
  const resultBox = document.getElementById("result");

  const cards = [
    { title: "Lengde", values: ["Korte negler", "Lange negler"] },
    { title: "Form", values: ["Firkantet", "Myk firkant", "Mandel"] },
    { title: "Design", values: ["Uten design", "Enkel design", "Med design"] },
    { title: "Farge", values: ["Lyse farger", "Mørke farger"] },
    { title: "Finish", values: ["Glossy", "Matt"] },
    { title: "Bonus", values: ["Litt glitter", "French twist", "Ingen bonus"] }
  ];

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  startBtn.onclick = async () => {
    startBtn.classList.add("hidden");
    resultBox.classList.remove("hidden");

    let output = "<h3>✨ Din manikyr</h3><ul>";

    for (const card of cards) {
      await new Promise(r => setTimeout(r, 400));
      output += <li><strong>${card.title}:</strong> ${pick(card.values)}</li>;
      resultBox.innerHTML = output + "</ul>";
    }

    output += "</ul><p>Snakk med din negledesigner 💅</p>";
    resultBox.innerHTML = output;

    restartBtn.classList.remove("hidden");
  };

  restartBtn.onclick = () => {
    resultBox.classList.add("hidden");
    restartBtn.classList.add("hidden");
    startBtn.classList.remove("hidden");
    resultBox.innerHTML = "";
  };

});
