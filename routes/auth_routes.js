const router = require("express").Router();

const controller = require("../controllers/auth_controllers");


router.post("/registrer",controller.sign_up_user)


module.exports = router