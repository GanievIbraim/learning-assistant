const Router = require("express");
const router = new Router();

const {
  create,
  getAll,
  getOne,
  getByUser,
  deleteItem,
  updateItem,
} = require("../controllers/blockController.js");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.get("/user/:userId", getByUser);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

module.exports = router;
