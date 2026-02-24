const router = require("express").Router();

const controller = require("../controllers/comment_controller");

router.post("/publish",controller.publish_comment)

router.get("/review/:id",controller.send_review_comments)

router.delete("/delete", controller.delete_comment)

module.exports = router;