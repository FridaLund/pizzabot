const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

function checkOrderName(orderName) {}

function totalCost(orderPrice) {
  return orderPrice * pizzaPrice;
}

function cookingTime(orderTime) {}

function orderPizza(pizzaOrder) {
  alert(
    "Hey! Happy to serve your pizza. On our menu we have: " +
      vegetarian +
      hawaiian +
      pepperoni
  );
  prompt("Enter the name of the pizza you want to order today");
}
