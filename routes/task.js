import express from 'express'
import { deleteTask, getAllTask, getTask, newTask, updateTask } from '../controller/task.js'

const router = express.Router()

router.post("/create",newTask)
router.get("/get/:id",getTask)
router.put("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)
router.get("/api/v1/:id",getAllTask)

export default router