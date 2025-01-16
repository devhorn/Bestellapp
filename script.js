function init() {
  getBasketFromLocalStorage();
  renderDishes();
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
  myBasket.push({
    name: myDishes[dishIndex].dishes[singleDishIndex].name,
    price: myDishes[dishIndex].dishes[singleDishIndex].price,
    amount: myDishes[dishIndex].dishes[singleDishIndex].amount,
  });
  saveToLocalStorage();
}

function saveToLocalStorage() {
  localStorage.setItem("basket", JSON.stringify(myBasket));
}

function getBasketFromLocalStorage() {
  let basketObj = JSON.parse(localStorage.getItem("basket"));
  if (basketObj != null) {
    myBasket = basketObj;
  } else {
    saveToLocalStorage();
  }
}
