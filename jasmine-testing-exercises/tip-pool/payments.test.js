describe("payments tests", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });

  it("should  Create table row element and pass to appendTd with input value", function () {
    const curPayment = createCurPayment();
    appendPaymentTable(curPayment);

    const [billAmt, tipAmt, tipPercent] = paymentTbody.firstChild.children;
    expect(billAmt.innerText).toBe("$100");
    expect(tipAmt.innerText).toBe("$15");
    expect(tipPercent.innerText).toBe("15%");
  });

  it("should return the proper object from createCurPayment()", function () {
    let testObj = createCurPayment();

    expect(testObj.billAmt).toBe("100");
    expect(testObj.tipAmt).toBe("15");
    billAmtInput.value = "";
    tipAmtInput.value = "";

    testObj = createCurPayment();
    expect(testObj).toBeUndefined();
  });

  it("should create table row element and pass to appendTd with calculated sum of all payment", function () {
    // summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt');
    // summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt');
    // summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%';
    let curPayment = createCurPayment();

    allPayments["payment" + paymentId] = curPayment;

    appendPaymentTable(curPayment);
    updateServerTable();
    updateSummary();

    expect(summaryTds[0].innerHTML).toBe("$100");
    expect(summaryTds[1].innerHTML).toBe("$15");
    expect(summaryTds[2].innerHTML).toBe("15%");
    for (let i = 0; i <= 2; i++) {
      summaryTds[i].innerHTML = "";
    }
  });

  it("should add a curPayment object to allPayments, update html and reset input values", function () {
    submitPaymentInfo();
    expect(allPayments["payment1"]).toBeTruthy();
    expect(billAmtInput.value).toBe("");
    expect(tipAmtInput.value).toBe("");
  });

  afterEach(function () {
    allPayments = {};
    paymentId = 0;
    paymentTbody.innerHTML = "";
    billAmtInput.value = "";
    tipAmtInput.value = "";
  });
});
