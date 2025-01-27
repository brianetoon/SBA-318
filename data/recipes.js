const recipes = [
  { 
    id: 1, 
    userId: 1,
    title: "Bantha Burger", 
    ingredients: ["Bantha meat", "Spices"], 
    steps: ["Grill meat", "Assemble burger"],
    imgUrl: ""
  },
  { 
    id: 2, 
    userId: 3,
    title: "Womp Rat Soup", 
    ingredients: ["Womp rat", "Broth"], 
    steps: ["Cook meat", "Simmer with broth"],
    imgUrl: ""
  },
  { 
    id: 3, 
    userId: 2,
    title: "Corellian Clam Chowder", 
    ingredients: ["Corellian Clams", "Corellian Clam Broth", "Corellian Spices", "Flour", "Cream"], 
    steps: ["Mix cream and flour simmer 10 min", "Add broth & clams and spices and gently heat for about 5 minutes"],
    imgUrl: ""
  }
];

module.exports = recipes;
