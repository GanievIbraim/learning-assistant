const Router = require("express");
const router = new Router();

const {
  create,
  getAll,
  getOne,
  getByBlock,
  deleteItem,
  updateItem,
} = require("../controllers/cardController.js");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.get("/block/:blockId", getByBlock);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);

module.exports = router;
