const mongoose = require("mongoose");
const db = require("../models");


let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/WholeBaker";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true
});

let recipeSeed = [
    {
    "bread": "focaccia",
    "ingredients": {
      "preferment": {
        "bread flour": 984,
        "water": 544,
        "liquid white sour": 50
      },
      "final dough": {
        "bread flour": 3121,
        "water": 2381,
        "olive oil": 245,
        "malt syrup": 32,
        "yeast, active dry": 14,
        "salt": 82,
        "preferment": 1533
      },
      "yield": {
        "totalLoafs": 18,
        "weightPerLoaf": 400
      },
      "instructions": {
        1: "Mix: Feed starter about 18 hours in advance",
        2: "Mix: Break down starer by hand with oil, water & malt. Let sit for 5 minutes",
        3: "Mix: Knead all ingredients by hand until together.",
        4: "Bulk Ferment 45 minutes",
        5: "Fold / Ferment || 2x / 10 minutes",
        6: "Pre Shape: Lightly round, dip bottom in semolina, place on sheet tray with sillicon paper. Brush with oil.",
        7: "Ferment 10 minutes",
        8: "Final Shape: Strech to 14 x 6 in. Drizzle with oil, place in proofer ",
        9: "Proof 30 minutes",
        10: "Add any toppings.",
        11: "Bake: 480 / 450F for 18 minutes with steam, then vent 4 minutes."
      }
    },
    "forSale": true,
    "price": 12.5,
    "unit": "full sheet",
    "desctiption": "Simple tuscan inspired focaccia flavored with olive oil."
  },{
    "bread": "francese",
    "ingredients": {
      "final dough": {
        "bread flour": 4400,
        "whole wheat flour": 454,
        "liquid white sour": 1814,
        "salt": 141,
        "malt syrup": 45,
        "water": 3515
      },
      "yield": {
        "totalLoafs": 14,
        "weightPerLoaf": 680
      },
      "instructions": {
        1: "Feed starer 18 hours in advance.",
        2: "Mix: Double hydration mixing method.",
        3: "Bulk Ferment: 45 minutes / FOLD / 20 minutes",
        4: "Scale, place in couche with flour/semolina mixture.",
        5: "Proof: 1 hour at room temperature.",
        6: "Bake: 475 / 465 for 20 minutes with steam, vent for 10"
      }
    },
    "forSale": true,
    "price": 3.00,
    "unit": "single francese",
    "desctiption": "The Italian cousin to the baguette, pane francese (which means “French bread”) is a long loaf with a moist and open crumb."
  }
];

db.Recipe
  .remove({})
  .then(() => 
  db.Recipe.collection.insertMany(recipeSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });