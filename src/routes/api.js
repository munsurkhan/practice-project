const express = require('express');
const ProfileController = require("../controllers/ProfileController");
const AuthVarifyMiddleware = require("../middleware/AuthVarifyMiddleware")

const router = express.Router();

router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)

router.get("/SelectProfile",AuthVarifyMiddleware,ProfileController.SelectProfile)


module.exports=router;