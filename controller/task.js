import { TASK } from "../model/task.js"

//create task
export const newTask = async (req, res) => {
    try {
        const {title,description} = req.body
        await TASK.create({
            title,
            description
        })

        res.status(201).json({
            success:true,
            message:"Task created successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

//get task
export const getTask = async(req,res)=>{
    try {
        const task = await TASK.findById(req.params.id)
        if(!task) return res.status(404).json({
            success:false,
            message:"no task found"
        })

        res.status(200).json({
            success:true,
            task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })  
    }
}

export const getAllTask = async(req,res)=>{
    try {
        const task = await TASK.find({})
        if(!task) return res.status.json({
            success:false,
            message:"task not found"
        })

        res.status(200).json({
            success:true,
            task
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })  
    }
}

//update task
export const updateTask= async(req,res)=>{
    try {
        const task = await TASK.findByIdAndUpdate(req.params.id,req.body)
        if(!task) return res.status(404).json({
            success:false,
            message:"task not found"
        })
        await task.save()
        res.status(200).json({
            success:true,
            message:"task updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })  
    }
}
//delete task
export const deleteTask = async(req,res)=>{
    try {
        const task =await TASK.findByIdAndDelete(req.params.id)
        if(!task) return res.status(404).json({
            success:false,
            message:"task not found"
        })

        res.status(200).json({
            success:true,
            message:"task deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })  
    }
}