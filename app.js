const billInput = document.querySelector(".billInput");
const customTip = document.querySelector("#custom-tip");
const tipPercent = document.querySelectorAll(".tip-select");
const resetButton = document.querySelector(".reset-btn");
const tipAmount = document.querySelector(".tip-amount-figure");
const totalAmount = document.querySelector(".total-figure");
const totalPeople = document.querySelector("#people");

// To reset the values for tip amount and total amount
window.onload = function(){
    tipAmount.textContent = "$0";
    totalAmount.textContent = "$0";
}
tipPercent.forEach(function (e) {
  e.addEventListener("click", function () {
    // Input values
    let billAmount = billInput.value;
    let customAmount = customTip.value;
    let numberOfPeople = totalPeople.value;

    console.log(e.textContent);
    tipAmount.textContent = "$" + Math.floor(billAmount * (Number(e.textContent) / 100));

    totalAmount.textContent =
      "$" + billAmount * (Number(e.textContent) / 100) * numberOfPeople;

      
  });
});

customTip.addEventListener("input", function () {
  let billAmount = billInput.value;
  let customAmount = customTip.value;
  let numberOfPeople = totalPeople.value;
  let customPercentage = customTip.value;

  tipAmount.textContent = "$" + billAmount * (customPercentage / 100);

  totalAmount.textContent = "$" + billAmount * (customPercentage / 100) * numberOfPeople;
});

resetButton.addEventListener('click', function(){
    tipAmount.textContent = "$0";
    totalAmount.textContent = "$0";
})