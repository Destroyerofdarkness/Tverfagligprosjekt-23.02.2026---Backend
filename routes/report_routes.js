const router = require("express").Router();

const controller = require("../controllers/report_controller");


router.post("/publish",controller.publish_report);

module.exports = router;
