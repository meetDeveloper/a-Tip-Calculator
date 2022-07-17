const tip = document.querySelector(".btn--tip");

const custom = document.querySelector(".custom-input");
const bill = document.querySelector(".input-bill");
const people = document.querySelector(".people-number");

const amount = document.querySelector(".amount span");
const total = document.querySelector(".total span");

const btn = document.querySelectorAll(".btn--tip .tip");
const resetBtn = document.querySelector(".btn--reset");

const span = document.querySelector(".number-of-people span");

custom.addEventListener("click", () => {
  custom.placeholder = "";
});

tip.addEventListener("click", (e) => {
  e.stopPropagation();
  if (Number(people.value) === 0 || e.target === undefined) {
    people.classList.add("red");
    span.style.visibility = "visible";
    return;
  }

  btn.forEach((button) => button.classList.remove("light"));

  if (e.target === btn[btn.length - 1]) {
    people.classList.remove("red");
    span.style.visibility = "hidden";
    amount.textContent = `${(
      (Number(bill.value) * (Number(e.target.value.slice(0)) / 100)) /
      Number(people.value)
    ).toFixed(1)}`;

    total.textContent = `${(
      (Number(bill.value) + Number(amount.textContent)) *
      Number(people.value)
    ).toFixed(1)}`;
  } else {
    people.classList.remove("red");
    span.style.visibility = "hidden";
    e.target.classList.add("light");
    amount.textContent = `${(
      (Number(bill.value) * (Number(e.target.innerText.slice(0, -1)) / 100)) /
      Number(people.value)
    ).toFixed(1)}`;

    total.textContent = `${(
      Number(bill.value) +
      Number(amount.textContent) * Number(people.value)
    ).toFixed(1)}`;
  }
});

resetBtn.addEventListener("click", () => {
  amount.textContent = "0.00";
  total.textContent = "0.00";
  bill.value = "";
  people.value = "";
  custom.value = "";
  custom.placeholder = "Custom";
  people.classList.remove("red");
  span.style.visibility = "hidden";
  btn.forEach((button) => button.classList.remove("light"));
});
