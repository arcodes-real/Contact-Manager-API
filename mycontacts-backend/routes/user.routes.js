const router = require("express").Router();
const validateToken = require("../middlewares/validateTokenHandler");

const{registerUsers,
    loginUser,
    currentUserInfo} = require("../Controllers/user.controller");

router.route("/signup").post(registerUsers);

router.route("/login").post(loginUser);

router.get("/current", validateToken, currentUserInfo);


module.exports = router;