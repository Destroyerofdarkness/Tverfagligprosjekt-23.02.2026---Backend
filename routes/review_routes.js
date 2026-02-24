const router = require("express").Router();

const controller = require("../controllers/review_controllers");

router.post("/publish", controller.publish_review);

router.get("/sendOutReviews",controller.send_out_reviews);

router.get("/:id",controller.get_review_info)

router.delete("/delete",controller.delete_review)

module.exports = router;
