it("should calculate the monthly rate correctly", function () {
  // amount: 1200, year: 1 , rate:.25
  // monthly payment should be 114.05
  expect(
    calculateMonthlyPayment({ amount: 1200, years: 1, rate: 0.25 })
  ).toEqual("114.05");
});

it("should return a result with 2 decimal places", function () {
  let payment = calculateMonthlyPayment({ amount: 1200, years: 1, rate: 0.25 });
  let thirdLastChar = payment[payment.length - 3];
  expect(thirdLastChar).toEqual(".");

  // ..
});

/// etc
