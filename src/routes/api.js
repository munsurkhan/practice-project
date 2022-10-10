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
router.get("/SelectToDo",AuthVarifyMiddleware,ToDoListController.SelectToDo)
router.post("/UpdateToDo",AuthVarifyMiddleware,ToDoListController.UpdateToDo)
router.post("/UpdateStatusToDo",AuthVarifyMiddleware,ToDoListController.UpdateStatusToDo)
router.post("/RemoveToDo",AuthVarifyMiddleware,ToDoListController.RemoveToDo)
router.post("/SelectToDoByStatus",AuthVarifyMiddleware,ToDoListController.SelectToDoByStatus)
router.post("/SelectToDoByDate",AuthVarifyMiddleware,ToDoListController.SelectToDoByDate)


module.exports=router;