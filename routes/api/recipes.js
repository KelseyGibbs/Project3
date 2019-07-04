const router = require("express").Router();
const recipesController = require("../../controllers/recipescontroller");

// Matches with "/api/books"
router.route("/")
  .get(recipesController.findAll)
  .post(recipesController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(recipesController.findById)
  .put(recipesController.update)
  .delete(recipesController.remove);

router
  .get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

module.exports = router;