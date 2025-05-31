// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  zipcode: 54321,
  acceptsReservations: true,
};

const printPizzaPlace = (obj) => {
  for (let key in obj) {
    console.log(key, obj[key]);
  }
};
printPizzaPlace(dominos);

const toppingsPriceRange = (obj) => {
  const toppings = obj.pizzaToppings;
  let highest = -Infinity;
  let lowest = Infinity;
  for (key in toppings) {
    if (toppings[key] > highest) {
      highest = toppings[key];
    }
    if (toppings[key] < lowest) {
      lowest = toppings[key];
    }
  }
  return [highest, lowest];
};
console.log(toppingsPriceRange(dominos));

const calculateAverageRating = (obj) => {
  let totalStars = 0;
  const numProps = Object.keys(obj.starReviews).length;
  for (let key in obj.starReviews) {
    totalStars += obj.starReviews[key];
  }
  return (totalStars / numProps).toFixed(2);
};
console.log(calculateAverageRating(dominos));
