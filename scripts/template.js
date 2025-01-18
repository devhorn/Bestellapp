function getDishTemplate(singleDish, dishIndex, singleDishIndex) {
  return `  <div class="dish">
                <div class="dishInfo">
                    <h3 id="dishName${dishIndex}">${singleDish.name}</h3>
                    <p>${singleDish.description}</p>
                    <p id="dishPrice${dishIndex}">${convertPrice(
    singleDish.price
  )} €</p>
                </div>
                <div onclick="addDishToBasket(${dishIndex}, ${singleDishIndex})" class="addToBasketButton">
                    <img src="./assets/icons/add.png" alt="add" />
                </div>
            </div>`;
}

function getEmptyBasketTemplate() {
  return `  <div class="basketEmpty">
                <img src="./assets/icons/basket.png" alt="Warenkorb" />
                <p>Dein Warenkorb ist leer</p>
            </div>`;
}

function getBasketItemTemplate(basketIndex) {
  return `<div class="basketItem">
              <p class="basketItemName">${myBasket[basketIndex].name}</p>
              <div class="basketItemAmountAndPrice">
                <div class="basketAmountandButtons">
                  <div onclick="decreaseAmountOfDishInBasket(${basketIndex})" class="basketButton">
                    <img src="./assets/icons/remove.png" alt="remove" />
                  </div>
                  <p>${myBasket[basketIndex].amount}</p>
                  <div onclick="increaseAmountOfDishInBasket(${basketIndex})" class="basketButton">
                    <img src="./assets/icons/add.png" alt="add" />
                  </div>
                </div>
                <div class="itemPriceAndDelete">
                  <p>${convertPrice(myBasket[basketIndex].price)} €</p>
                  <div onclick="removeItemFromBasket(${basketIndex})" class="basketButton">
                    <img src="./assets/icons/delete.png" alt="delete" />
                  </div>
                </div>
              </div>
          </div>`;
}

function getPriceAmountTemplate(subTotal, totalPrice) {
  return `<div class="subTotalAndDeliveryCosts">
            <p>Zwischensumme:</p>
            <p>${convertPrice(subTotal)} €</p>
          </div>
          <div class="subTotalAndDeliveryCosts">
            <p>Lieferkosten:</p>
            <p>${convertPrice(deliveryInformations.deliveryCosts)} €</p>
          </div>
          <div onclick="order()" class="payButton">
            <p>Bezahlen ${convertPrice(totalPrice)} €</p>
          </div>`;
}

function getToggleSwitchTemplateDeactivated() {
  return `<label class="switch">
              <input id="toggle" type="checkbox" onchange="changeToPickUp()"/>
              <span class="slider round"></span>
          </label>
          <p>Selbst abholen</p>`;
}

function getToggleSwitchTemplateActivated() {
  return `<label class="switch">
              <input id="toggle" type="checkbox" onchange="changeToPickUp()" checked/>
              <span class="slider round"></span>
          </label>
          <p>Selbst abholen</p>`;
}

function getDialogTemplate() {
  return `<div onclick="stayOpen(event)" class="dialog">
            <p class="thanksText">Vielen Dank für deine Bestellung😊</p>
            <div class="dialogIconsRow>
              <img class="dialogIcon" src="./assets/icons/pizza.png" />
              <img class="dialogIcon" src="./assets/icons/restaurant.png" />
            </div>
            <div class="payButton">
              <p onclick="closeDialog(event)">Zurück zur Bestellseite</p>
            </div>
          </div>`;
}
