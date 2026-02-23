const router = require("express").Router();

const controller = require("../controllers/default_controllers");

router.get("/", controller.send_message);

module.exports = router;
