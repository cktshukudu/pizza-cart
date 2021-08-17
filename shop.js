var smallAddBtn = document.querySelector(".smallAdd");
var mediumAddBtn = document.querySelector(".mediumAdd");
var largeAddBtn = document.querySelector(".largeAdd");
//reference buttons in the
var smallBtn = document.querySelector(".smallBtn");
var mediumBtn = document.querySelector(".mediumBtn");
var largeBtn = document.querySelector(".largeBtn");

var smallRemoveBtn = document.querySelector(".smallRemove");
var mediumRemoveBtn = document.querySelector(".mediumRemove");
var largeRemoveBtn = document.querySelector(".largeRemove");

var smallQuantity = document.querySelector(".smallQuantity");
var mediumQuantity = document.querySelector(".mediumQuantity");
var largeQuantity = document.querySelector(".largeQuantity");

var smallPizzaTotal = document.querySelector(".smallPizzaTotal");
var medPizzaTotal = document.querySelector(".medPizzaTotal");
var largePizzaTotal = document.querySelector(".largePizzaTotal");
var totalCost = document.querySelector(".totalCost");

var checkOut = document.querySelector(".checkOut");
var payAmount = document.querySelector(".payAmount");
var paymentBtn = document.querySelector(".paymentBtn");
var payOut = document.querySelector(".payOut");
var message = document.querySelector(".message");


var smallPizzaQty = 0;
var medPizzaQty = 0;
var largePizzaQty = 0;
var totalCosts = 0;

var small = 30;
var medium = 60;
var large = 90;

function eventClick() {
    if (event.target.className == "smallAdd" ||
     event.target.className == "smallBtn") {
        smallPizzaQty++;
        smallQuantity.innerText = smallPizzaQty;
    } else if (event.target.className == "mediumAdd" || event.target.className == "mediumBtn") {
        medPizzaQty++;
        mediumQuantity.innerHTML = medPizzaQty;
    } else if (event.target.className == "largeAdd" || event.target.className == "largeBtn") {
        largePizzaQty++;
        largeQuantity.innerHTML = largePizzaQty;
    }
    if (event.target.className === "smallRemove") {
        smallQuantity.innerHTML = smallPizzaQty;
        smallPizzaQty--;
        if (smallPizzaQty < 0) {
            smallPizzaQty = 0;
        }
    } else if (event.target.className === "mediumRemove") {
        medPizzaQty--;
        if (medPizzaQty < 0) {
            medPizzaQty = 0;
        }
        mediumQuantity.innerHTML = medPizzaQty;
    } else if (event.target.className === "largeRemove") {
        largePizzaQty--;
        if (largePizzaQty < 0) {
            largePizzaQty = 0;
        }
        largeQuantity.innerHTML = largePizzaQty;
    }

    smallPizzaTotal.innerHTML = (smallPizzaQty * small).toFixed(2);
    medPizzaTotal.innerHTML = (medPizzaQty * medium).toFixed(2);
    largePizzaTotal.innerHTML = (largePizzaQty * large).toFixed(2);
    totalCosts = smallPizzaQty * small + medPizzaQty * medium + largePizzaQty * large;
    totalCost.innerHTML = totalCosts.toFixed(2);
}

function checkOutClick(){
    checkOut.classList.add('hidden');
    payOut.classList.remove('hidden');
}

function purchaseClicked(){
    message.classList.toggle('hidden');
    var amount = Number(payAmount.value);
 if (amount == totalCosts){
   message.innerHTML = "Enjoy your Pizza!";
    var cartItems = document.getElementsByClassName("payOut hidden")[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
 } else if (amount > totalCosts) {
    var change = amount - totalCosts;
   message.innerHTML = "Enjoy your Pizza, here is your change R" + change.toFixed(2);
   
 } else {
    message.innerHTML = "Sorry, that is not enough money!";
 }

}
smallAddBtn.addEventListener('click', eventClick);
smallRemoveBtn.addEventListener('click', eventClick);
smallBtn.addEventListener('click',eventClick);
mediumAddBtn.addEventListener('click', eventClick);
mediumRemoveBtn.addEventListener('click', eventClick);
mediumBtn.addEventListener('click',eventClick);
largeAddBtn.addEventListener('click', eventClick);
largeRemoveBtn.addEventListener('click', eventClick);
largeBtn.addEventListener('click',eventClick);
checkOut.addEventListener('click', checkOutClick)
paymentBtn.addEventListener('click',purchaseClicked)




