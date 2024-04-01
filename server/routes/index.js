const Router = require("express");
const router = new Router();
const cardRouter = require("./cardRouter");
const blockRouter = require("./blockRouter");
const userRouter = require("./userRouter");

router.use("/block", blockRouter)
router.use("/user", userRouter);
router.use("/card", cardRouter);

module.exports = router;
