function getDishTemplate(singleDish, dishIndex, singleDishIndex) {
  return `  <div class="dish">
                <div class="dishInfo">
                    <h3 id="dishName${dishIndex}">${singleDish.name}</h3>
                    <p>${singleDish.description}</p>
                    <p id="dishPrice${dishIndex}">${singleDish.price} €</p>
                </div>
                <button onclick="addDishToBasket(${dishIndex}, ${singleDishIndex})" class="addToBasketButton" type="submit">add</button>
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
                  <p>${myBasket[basketIndex].price} €</p>
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
            <p>${subTotal} €</p>
          </div>
          <div class="subTotalAndDeliveryCosts">
            <p>Lieferkosten:</p>
            <p>${deliveryInformations.deliveryCosts} €</p>
          </div>
          <div class="payButton">
            <p>Bezahlen ${totalPrice} €</p>
          </div>`;
}
