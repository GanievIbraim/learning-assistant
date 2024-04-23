const Router = require("express");
const router = new Router();
const cardRouter = require("./cardRouter");
const blockRouter = require("./blockRouter");
const userRouter = require("./userRouter");
const groupRouter = require("./groupRouter");
const categoryRouter = require("./categoryRouter");

router.use("/block", blockRouter)
router.use("/user", userRouter);
router.use("/card", cardRouter);
router.use("/group", groupRouter);
router.use("/category", categoryRouter);

module.exports = router;
