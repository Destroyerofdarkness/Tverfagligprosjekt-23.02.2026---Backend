const router = require("express").Router();

const controller = require("../controllers/comment_controller");

router.post("/publish",controller.publish_comment)

module.exports = router;