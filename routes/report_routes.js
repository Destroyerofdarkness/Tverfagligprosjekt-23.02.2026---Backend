const router = require("express").Router();

const controller = require("../controllers/report_controller");


router.post("/publish",controller.publish_report);

router.get("/send_out",controller.send_out_reports);

router.delete("/delete",controller.delete_report)

module.exports = router;
