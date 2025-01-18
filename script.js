function init() {
  getBasketFromLocalStorage();
  renderDishes();
  renderToggleSwitch();
  renderBasket();
}

function renderDishes() {
  for (let dishIndex = 0; dishIndex < myDishes.length; dishIndex++) {
    if (myDishes[dishIndex].categorie == "pizza") {
      renderSingleDish("pizza", dishIndex);
    } else if (myDishes[dishIndex].categorie == "pasta") {
      renderSingleDish("pasta", dishIndex);
    } else if (myDishes[dishIndex].categorie == "extra") {
      renderSingleDish("extra", dishIndex);
    }
  }
}

function renderSingleDish(id, dishIndex) {
  let dishContentRef = document.getElementById(id);
  for (let i = 0; i < myDishes[dishIndex].dishes.length; i++) {
    let singleDish = myDishes[dishIndex].dishes[i];
    dishContentRef.innerHTML += getDishTemplate(singleDish, dishIndex, i);
  }
}

function addDishToBasket(dishIndex, singleDishIndex) {
  myDishes[dishIndex].dishes[singleDishIndex].amount = 1;
  myBasket.push({
    name: myDishes[dishIndex].dishes[singleDishIndex].name,
    price: myDishes[dishIndex].dishes[singleDishIndex].price,
    amount: myDishes[dishIndex].dishes[singleDishIndex].amount,
  });
  saveToLocalStorage();
  renderBasket();
}

function renderBasket() {
  let basketContentRef = document.getElementById("basketContent");
  let priceAmountContentRef = document.getElementById("priceAmountContent");
  basketContentRef.innerHTML = "";
  priceAmountContentRef.innerHTML = "";
  if (myBasket.length == 0) {
    basketContentRef.innerHTML = getEmptyBasketTemplate();
  } else {
    for (let basketIndex = 0; basketIndex < myBasket.length; basketIndex++) {
      basketContentRef.innerHTML += getBasketItemTemplate(basketIndex);
    }
    renderPriceAmountOfBasket();
  }
}

function renderPriceAmountOfBasket() {
  let priceAmountContentRef = document.getElementById("priceAmountContent");
  let subTotal = calculatePriceAmountOfBasket();
  let totalPrice = subTotal;
  if (deliveryInformations.willBePickedUp == false) {
    totalPrice += deliveryInformations.deliveryCosts;
  }
  priceAmountContentRef.innerHTML = getPriceAmountTemplate(
    subTotal,
    totalPrice
  );
}

function calculatePriceAmountOfBasket() {
  let sum = 0;
  for (let basketIndex = 0; basketIndex < myBasket.length; basketIndex++) {
    sum += myBasket[basketIndex].price;
  }
  let roundedSum = sum.toFixed(2);
  return Number(roundedSum);
}

function increaseAmountOfDishInBasket(basketIndex) {
  if (myBasket[basketIndex].amount == 1) {
    myBasket[basketIndex].amount += 1;
    myBasket[basketIndex].price *= myBasket[basketIndex].amount;
  } else {
    let priceOneUnit =
      myBasket[basketIndex].price / myBasket[basketIndex].amount;
    myBasket[basketIndex].amount += 1;
    myBasket[basketIndex].price =
      Math.round(priceOneUnit * myBasket[basketIndex].amount * 100) / 100;
  }
  saveToLocalStorage();
  renderBasket();
}

function decreaseAmountOfDishInBasket(basketIndex) {
  if (myBasket[basketIndex].amount > 1) {
    let priceOneUnit =
      myBasket[basketIndex].price / myBasket[basketIndex].amount;
    myBasket[basketIndex].amount -= 1;
    myBasket[basketIndex].price =
      Math.round(priceOneUnit * myBasket[basketIndex].amount * 100) / 100;
    saveToLocalStorage();
    renderBasket();
  } else {
    return;
  }
}

function removeItemFromBasket(basketIndex) {
  myBasket.splice(basketIndex, 1);
  saveToLocalStorage();
  renderBasket();
}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(myBasket));
  localStorage.setItem("delivery", JSON.stringify(deliveryInformations));
}

function getBasketFromLocalStorage() {
  let basketObj = JSON.parse(localStorage.getItem("basket"));
  let deliveryObj = JSON.parse(localStorage.getItem("delivery"));
  if (basketObj != null) {
    myBasket = basketObj;
    deliveryInformations = deliveryObj;
  } else {
    saveToLocalStorage();
  }
}

function convertPrice(price) {
  let priceAsString = String(price);
  if (priceAsString.includes(".")) {
    priceAsString = priceAsString.replace(".", ",");
    priceAsArr = priceAsString.split(",");
    let numAfterComma = Number(priceAsArr[1]);
    if (numAfterComma <= 9) {
      let resultPrice = priceAsArr.toString();
      resultPrice = resultPrice + "0";
      return resultPrice;
    }
    return priceAsString;
  } else {
    priceAsString += ",00";
    return priceAsString;
  }
}

function changeToPickUp() {
  if (deliveryInformations.willBePickedUp == false) {
    deliveryInformations.willBePickedUp = true;
    deliveryInformations.deliveryCosts = 0;
    saveToLocalStorage();
    renderBasket();
  } else {
    deliveryInformations.willBePickedUp = false;
    deliveryInformations.deliveryCosts = 5;
    saveToLocalStorage();
    renderBasket();
  }
}

function renderToggleSwitch() {
  let toggleContentRef = document.getElementById("toggle");
  if (deliveryInformations.willBePickedUp == false) {
    toggleContentRef.innerHTML = getToggleSwitchTemplateDeactivated();
  }

  if (deliveryInformations.willBePickedUp == true) {
    toggleContentRef.innerHTML = getToggleSwitchTemplateActivated();
  }
}

function stayOpen(event) {
  event.stopPropagation(event);
}

function order() {
  let openDialogRef = document.getElementById("dialogContainer");
  openDialogRef.innerHTML = "";
  openDialogRef.innerHTML = getDialogTemplate();
  openDialogRef.classList.toggle("dNone");
  myBasket = [];
  deliveryInformations.willBePickedUp = false;
  deliveryInformations.deliveryCosts = 5;
  saveToLocalStorage();
  renderToggleSwitch();
  renderBasket();
}

function closeDialog() {
  let closeDialogRef = document.getElementById("dialogContainer");
  closeDialogRef.classList.toggle("dNone");
  event.stopPropagation();
}
