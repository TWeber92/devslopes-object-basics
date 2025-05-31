/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //

const chilis = {
  name: "Chilis",
  cuisines: [],
  numberOfStars: 0,
  favorited: false,
};

chilis.address = "";
chilis.zipcode = 0;
chilis.acceptsReservations = true;

chilis.numberOfStars += 1;
chilis.favorited = true;
chilis.cuisines.push("Buffalo Wings");

const retrieveProperty = (obj, key) => {
  if (key in obj) {
    return obj[key];
  }
  return "The information you requested does not exist.";
};
console.log(retrieveProperty(chilis, "cuisines"));
console.log(retrieveProperty(chilis, "favorited"));
console.log(retrieveProperty(chilis, "name"));
console.log(retrieveProperty(chilis, "nickName"));
console.log(retrieveProperty(chilis, "state"));
