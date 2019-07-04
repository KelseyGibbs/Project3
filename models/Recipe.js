const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const RecipeSchema = new Schema({
	bread: {
        type: 'String',
        required: true
	},
	ingredients: {
        type: "Object",
	required: true
	},
	forSale: {
        type: 'Boolean',
        required: true
	},
	price: {
        type: 'Number',
        required: true
	},
	unit: {
        type: 'String',
        required: true
	},
	desctiption: {
        type: 'String',
        required: true
	}
}
);




var Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;