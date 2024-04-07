const Router = require("express");
const router = new Router();

const {
  create,
  getAll,
  getOne,
  getUsers,
  deleteItem,
  updateItem,
  addUserToGroup,
  removeUserFromGroup,
} = require("../controllers/groupController.js");

router.post("/", create);
router.get("/", getAll);
router.get("/:id", getOne);
router.delete("/:id", deleteItem);
router.delete("/user", removeUserFromGroup); // id передавать в теле запроса
router.put("/:id", updateItem);
router.post("/user", addUserToGroup); // id передавать в теле запроса
router.get("/user/:id", getUsers);


module.exports = router;
