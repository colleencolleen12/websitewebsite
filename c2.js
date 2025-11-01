const buttons = document.querySelectorAll("button");
const result = document.getElementById("result");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      result.value = "";
    } else if (value === "=") {
      try {
        result.value = eval(result.value);
      } catch {
        result.value = "Error";
      }
    } else {
      result.value += value;
    }
  });
});

function exitPage() {
  document.body.innerHTML = "<h1 style='text-align:center;margin-top:100px;'>Goodbye! 👋</h1>";
  document.body.style.background = "#222";
  document.body.style.color = "white";
}

window.onload = function() {
  const intro = document.getElementById("intro");
  const main = document.getElementById("main");

  setTimeout(() => {
    intro.style.display = "none";
    main.style.display = "block";
  }, 2500);
};