import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'please enter the title'],
        minLength:3
    },
    description:{
        type:String,
        required:[true,'Please enter the description'],
        maxLength:30,
        minLength:10
    }
},{timestamps:true})


export const TASK = mongoose.model('TASK',schema)