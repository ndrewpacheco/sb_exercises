window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    years: +document.getElementById("loan-years").value,
    rate: +document.getElementById("loan-rate").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 1200;
  document.getElementById("loan-years").value = 12;
  document.getElementById("loan-rate").value = 0;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  return updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const { amount, years, rate } = values;

  // monthly payment=𝑃×𝑖/ 1 −(1+𝑖)−𝑛
  let i = rate / 12;
  let a = amount * i;
  let b = 1 - (1 + i) ** (-years * 12);

  return (a / b).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerText = monthly;
}

//   document.getElementById("monthly-payment").innerText =
// calculateMonthlyPayment(getCurrentUIValues);
