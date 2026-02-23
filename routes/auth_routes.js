const router = require("express").Router();

const controller = require("../controllers/auth_controllers");


router.post("/registrer",controller.sign_up_user)

router.post("/loggInn", controller.sign_in_user)

router.get("/verifyJwt/:token", controller.verify_jwt)

router.get("/sendBackUser/:token", controller.sendBackUser)


module.exports = router