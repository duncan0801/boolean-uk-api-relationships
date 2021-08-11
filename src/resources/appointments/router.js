const router = require("express").Router();
const { getAll, postOne } = require("./controller");

router.get("/", getAll);
router.post("/", postOne);

module.exports = router;
