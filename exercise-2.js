/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT //

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT //

// YOUR WORK GOES HERE //

const grabCategories = (obj) => Object.keys(obj);
console.log(grabCategories(papaJohns));
const verifyvalues = (obj, num) => {
  numValues = Object.values(obj).length;
  if (numValues === num) {
    return true;
  }
  return false;
};
console.log(verifyvalues(papaJohns, 8));
const getToppingsInfo = Object.entries(papaJohns.pizzaToppings);
console.log(getToppingsInfo);

papaJohns.printAd = function (topping) {
  price = papaJohns.pizzaToppings[topping];
  return `welcome to Papa Johns's! We are located at ${papaJohns.address}. This week, we are having a sale on ${topping} for $${price}. ${papaJohns.slogan}.`;
};
console.log(papaJohns.printAd("bacon"));
