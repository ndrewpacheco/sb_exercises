describe("helpers test", function () {
  it("should append a td to tr properly", function () {
    let testTr = document.createElement("tr");

    appendTd(testTr, "testname");
    expect(testTr.firstElementChild.innerText).toBe("testname");
  });

  it("should calculate tip percent properly", function () {
    let billAmt = 50;
    let tipAmt = 34;
    expect(calculateTipPercent(billAmt, tipAmt)).toEqual(68);
  });

  it("should return total sum payments depending on type of payment", function () {
    allPayments = {
      payment1: {
        billAmt: 100,
        tipAmt: 15,
      },
      payment2: {
        billAmt: 200,
        tipAmt: 10,
      },
    };
    expect(sumPaymentTotal("billAmt")).toEqual(300);
    expect(sumPaymentTotal("tipAmt")).toEqual(25);
    allPayments = {};
  });

  it("should append a delete button to a tr", function () {
    let newTr = document.createElement("tr");

    appendDeleteBtn(newTr);
    expect(newTr.innerText).toBe("X");
    newTr.remove();
  });
});
