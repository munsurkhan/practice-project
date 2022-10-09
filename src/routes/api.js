const express = require('express');
const ProfileController = require("../controllers/ProfileController");
const ToDoListController = require("../controllers/ToDoListController");
const AuthVarifyMiddleware = require("../middleware/AuthVarifyMiddleware")

const router = express.Router();

router.post("/CreateProfile",ProfileController.CreateProfile)
router.post("/UserLogin",ProfileController.UserLogin)

router.get("/SelectProfile",AuthVarifyMiddleware,ProfileController.SelectProfile)
router.post("/UpdateProfile",AuthVarifyMiddleware,ProfileController.UpdateProfile)



router.post("/CreateToDo",AuthVarifyMiddleware,ToDoListController.CreateToDo)


module.exports=router;