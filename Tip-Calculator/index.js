const sliders = document.querySelectorAll("input[type='range']");
console.log(sliders);
sliders.forEach(function(slider) {
    slider.addEventListener("input", calculateTip);
});

const billInput = document.getElementById("bill");
billInput.addEventListener("change", calculateTip);

function calculateTip() {
    let bill = parseFloat(billInput.value);
    let tipPercent = document.getElementById("tip").value;
    let noOfPeople = document.getElementById("no-of-people").value;
    let currency = document.getElementById("currency").value;
    let currencyRate = parseFloat(document.getElementById("currency").selectedOptions[0].getAttribute("data-rate"));

    billInput.value = bill.toFixed(2);

    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);




document.getElementById("tip-amount").textContent = `${currency} ${totalTip}`;
document.getElementById("total-amount").textContent = `${currency} ${total}`;
document.getElementById("tip-percent").textContent = ` ${tipPercent}%`;
document.getElementById("split-num").textContent = noOfPeople;
document.getElementById("tip-per-person").textContent = `${currency} ${tipPerPerson}`;
document.getElementById("total-per-person").textContent = `${currency} ${totalPerPerson}`;
}

calculateTip();

const resetButton = document.getElementById("resetBtn");
resetButton.addEventListener("click", resetInputs);

function resetInputs() {
  document.getElementById("bill").value = "0.00";
  document.getElementById("tip").value = "1";
  document.getElementById("no-of-people").value = "1";
  document.querySelector(".service").selectedIndex = 0;
  calculateTip();
}


