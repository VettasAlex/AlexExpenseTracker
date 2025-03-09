let submitButton = document.getElementById("submitExpense");
let title = document.getElementById("expenseTitle");
let cost = document.getElementById("expenseCost");
let list = document.getElementById("list");
let totalDisplay = document.getElementById("total");
let remainingDisplay = document.getElementById("remaining");
let form = document.getElementById("expenseForm");

let total = 0;
let paidOff = 0;
let remaining = 0;

submitButton.addEventListener("click", function () {
  let itemTitle = title.value;
  let itemCost = parseFloat(cost.value);

  if (itemTitle && itemCost > 0) {
    let li = document.createElement("li");
    li.textContent = itemTitle + " - €" + itemCost;

    let paidButton = document.createElement("button");
    paidButton.textContent = "✔️";

    paidButton.addEventListener("click", function () {
      li.style.textDecoration = "line-through";
      paidButton.disabled = true;
      paidOff = paidOff + itemCost;
      remaining = total - paidOff;
      remainingDisplay.textContent = remaining.toFixed(2); // toFixed(2)solves bug of 0.9999
    });

    li.appendChild(paidButton);
    list.appendChild(li);

    total += itemCost;
    remaining = total - paidOff;

    totalDisplay.textContent = total.toFixed(2); // toFixed(2)solves bug of 0.9999
    remainingDisplay.textContent = remaining.toFixed(2); // toFixed(2)solves bug of 0.9999

    title.value = "";
    cost.value = "";
    form.style.display = "none";
  } else {
    alert("Please fill out both fields correctly.");
  }
});

let addExpense = document.getElementById("addExpenseButton");
addExpense.addEventListener("click", function () {
  form.style.display = "flex";
});
