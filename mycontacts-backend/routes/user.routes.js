const router = require("express").Router();

const{registerUsers,
    loginUser,
    currentUserInfo} = require("../Controllers/user.controller");

router.route("/signup").post(registerUsers);

router.route("/login").post(loginUser);

router.route("/current").get(currentUserInfo);


module.exports = router;