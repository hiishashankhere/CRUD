import express from 'express'
import {connect} from './data/database.js'
import taskRouter from './routes/task.js'
import dotenv from 'dotenv'

const app = express()


dotenv.config({
    path:'./config/config.env'
})
//database
connect()

app.use(express.json())
app.use("/api/v1",taskRouter)
const PORT = process.env.PORT


app.listen(PORT ||5000,()=>{
    console.log("server started running");
})