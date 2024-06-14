import mongoose from 'mongoose'

export const connect = async () => {
    await mongoose.connect("mongodb+srv://hishashankthisside:shashank%403781@cluster0.eewnxxa.mongodb.net/?retryWrites=true&w=majority",{
        dbName:"CRUD"
    })
        .then(() => {
            console.log("database connected successfully");
        })
}