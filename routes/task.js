import express from 'express'
import { deleteTask, getTask, newTask, updateTask } from '../controller/task.js'

const router = express.Router()

router.post("/create",newTask)
router.get("/get/:id",getTask)
router.put("/update/:id",updateTask)
router.delete("/delete/:id",deleteTask)

export default router