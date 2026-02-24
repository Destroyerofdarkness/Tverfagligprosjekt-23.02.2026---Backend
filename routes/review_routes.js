const router = require("express").Router();

const controller = require("../controllers/review_controllers");

router.post("/publish", controller.publish_review);

module.exports = router;
