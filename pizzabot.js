const vegetarian = "Vegetariana";
const hawaiian = "Hawaii";
const pepperoni = "Pepperoni";

const pizzaPrice = 80;

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity >= 1 && orderQuantity <= 2) {
    return 10;
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15;
  } else {
    return 20;
  }
}

function orderPizza() {
  const pizzaTypeElement = document.getElementById("pizzaType");
  const pizzaType = pizzaTypeElement.value;

  const quantityElement = document.getElementById("quantity");
  const quantity = quantityElement.value;

  const orderTextElement = document.getElementById("orderText");
  orderTextElement.innerText =
    "Fantastic! I'll get started on your " +
    pizzaType +
    ". It will cost " +
    totalCost(quantity) +
    " and it's going to take " +
    cookingTime(quantity) +
    " minutes. Thank you for your purcase!";
}
