const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String, required: true },
  quantity: { type: Number, required: false, default: 1 },
  price: { type: Number, required: true },
  inventory: { type: Number, required: true },
  description: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipeSchema);

module.exports = Recipe;
