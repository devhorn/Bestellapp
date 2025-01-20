function renderRespBasketButton() {
  let respBaskeButtonRef = document.getElementById("basketButtonResp");
  let subTotal = calculatePriceAmountOfBasket();
  let totalPrice = subTotal;
  if (myBasket.length == 0) {
    respBaskeButtonRef.innerHTML = getEmptyRespBasketButtonTemplate();
  } else {
    if (deliveryInformations.willBePickedUp == false) {
      totalPrice += deliveryInformations.deliveryCosts;
    }
    respBaskeButtonRef.innerHTML = getRespBasketButtonTemplate(totalPrice);
  }
}

function openRespBasket() {
  let openDialogRef = document.getElementById("respBasketContainer");
  openDialogRef.classList.toggle("dNone");
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

function renderRespBasket() {
  let respBasketContentRef = document.getElementById("respBasketContent");
  let respPriceAmountContentRef = document.getElementById(
    "respPriceAmountContent"
  );
  respBasketContentRef.innerHTML = "";
  respPriceAmountContentRef.innerHTML = "";
  if (myBasket.length == 0) {
    respBasketContentRef.innerHTML = getEmptyRespBasketTemplate();
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
  respPriceAmountContentRef.innerHTML = getPriceAmountRespTemplate(
    subTotal,
    totalPrice
  );
}

function closeRespBasket(event) {
  let closeDialogRef = document.getElementById("respBasketContainer");
  closeDialogRef.classList.toggle("dNone");
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  event.stopPropagation();
}

function renderRespToggleSwitch() {
  let toggleContentRef = document.getElementById("respToggle");
  if (deliveryInformations.willBePickedUp == false) {
    toggleContentRef.innerHTML = getRespToggleSwitchTemplateDeactivated();
  }

  if (deliveryInformations.willBePickedUp == true) {
    toggleContentRef.innerHTML = getRespToggleSwitchTemplateActivated();
  }
}

function respOrder() {
  let openDialogRef = document.getElementById("respDialogContainer");
  openDialogRef.innerHTML = "";
  openDialogRef.innerHTML = getRespDialogTemplate();
  openDialogRef.classList.toggle("dNone");
  myBasket = [];
  deliveryInformations.willBePickedUp = false;
  deliveryInformations.deliveryCosts = 5;
  saveToLocalStorage();
  renderToggleSwitchRespAndDesktop();
  renderDesktopAndRespBasket();
  renderRespBasketButton();
}

function closeRespDialog(event) {
  let closeDialogRef = document.getElementById("respDialogContainer");
  closeDialogRef.classList.toggle("dNone");
  closeRespBasket(event);
  event.stopPropagation();
}
