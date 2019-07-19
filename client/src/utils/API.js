import axios from "axios";

export default {
  // Gets all recipes
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a recipe to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipes", recipeData);
  },  
 
  // Updates a single recipe in the databases quantity
  updateRecipe: function(id, body) {
  return axios.put("/api/recipes/" + id, {quantity: body});
  },

   // Saves a recipe to the orders database
  saveOrder: function(orderData) {
    return axios.post("/api/orders", orderData);
  },

  // Gets all objects from the cartsDB
  getOrders: function() {
    return axios.get("/api/orders");
  }
  
};
