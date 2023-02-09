const allBtns = document.querySelectorAll(".btn");

const btnArgs = Array.from(allBtns);

const displayELm = document.querySelector(".display");

const audio = new Audio("audio.mp3");

let strToDisplay = "";
let allowDot = true;

const operator = ["+", "-", "*", "/", "%"];

btnArgs.map((item, i) => {
  item.addEventListener("click", () => {
    displayELm.style.backgroundColor = "";
    const val = item.innerText;
    console.log(val);

    if (val === "AC") {
      strToDisplay = "";
      display(strToDisplay);
      allowDot = true;

      return;
    }

    if (val === "C") {
      if (strToDisplay.length) {
        strToDisplay = strToDisplay.slice(0, -1);
        display(strToDisplay);
      }
      return;
    }

    if (val === "=") {
      total();
      return;
    }

    if (operator.includes(val)) {
      if (!strToDisplay) {
        return;
      }

      if (operator.includes(strToDisplay[strToDisplay.length - 1])) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }

    //  dot -----------------
    if (val === ".") {
      if (!allowDot) {
        return;
      }
      allowDot = false;
    }

    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayELm.innerText = str || "0.00";
};

const total = () => {
  const extra = randomNumber();

  if (extra) {
    displayELm.style.background = "red";
    displayELm.style.color = "white";
    displayELm.classList.add("prank");
    audio.play();
  }

  const tt1 = eval(strToDisplay) + extra;
  strToDisplay = tt1;
  display(strToDisplay);
};

// lets prank ----------------------

const randomNumber = () => {
  const num = Math.round(Math.random() * 10);
  return num <= 3 ? num : 0;
};
