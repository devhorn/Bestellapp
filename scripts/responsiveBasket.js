function renderRespBasketButton() {
  let respBaskeButtonRef = document.getElementById("basketButtonResp");
  let subTotal = calculatePriceAmountOfBasket();
  let totalPrice = subTotal;
  if (deliveryInformations.willBePickedUp == false) {
    totalPrice += deliveryInformations.deliveryCosts;
  }
  respBaskeButtonRef.innerHTML = getRespBasketButtonTemplate(totalPrice);
}

function openRespBasket() {
  let openDialogRef = document.getElementById("respBasketContainer");
  openDialogRef.classList.toggle("dNone");
}

function closeResponisveBasket(event) {
  let closeDialogRef = document.getElementById("respBasketContainer");
  closeDialogRef.classList.toggle("dNone");
  event.stopPropagation();
}

function renderRespBasket() {
  let respBasketContentRef = document.getElementById("respBasketContent");
  let respPriceAmountContentRef = document.getElementById(
    "respPriceAmountContent"
  );
  respBasketContentRef.innerHTML = "";
  respPriceAmountContentRef.innerHTML = "";
  if (myBasket.length == 0) {
    respBasketContentRef.innerHTML = getEmptyBasketTemplate();
  } else {
    for (let basketIndex = 0; basketIndex < myBasket.length; basketIndex++) {
      respBasketContentRef.innerHTML += getBasketItemTemplate(basketIndex);
    }
    renderPriceAmountOfRespBasket();
    renderRespBasketButton();
  }
}

function renderPriceAmountOfRespBasket() {
  let respPriceAmountContentRef = document.getElementById(
    "respPriceAmountContent"
  );
  let subTotal = calculatePriceAmountOfBasket();
  let totalPrice = subTotal;
  if (deliveryInformations.willBePickedUp == false) {
    totalPrice += deliveryInformations.deliveryCosts;
  }
  respPriceAmountContentRef.innerHTML = getPriceAmountTemplate(
    subTotal,
    totalPrice
  );
}
