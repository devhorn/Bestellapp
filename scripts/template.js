function getDishTemplate(singleDish, dishIndex, singleDishIndex) {
  return `<div class="dish">
                <div class="dishInfo">
                    <h3 id="dishName${dishIndex}">${singleDish.name}</h3>
                    <p>${singleDish.description}</p>
                    <p id="dishPrice${dishIndex}">${singleDish.price} €</p>
                </div>
                <button onclick="addDishToBasket(${dishIndex}, ${singleDishIndex})" class="addToBasketButton" type="submit">add</button>
            </div>`;
}
