import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'
const PORT = 5000

const URL = "mongodb+srv://user:user@cluster0.ul2p0ce.mongodb.net/"



const app = express()

app.use(express.json())
app.use("/streamers", router)

const connectDB = async () => { 
    try {
        await mongoose.connect(URL)
    } catch (error) {
        console.log(error)
    }
}
async function startApp() {
    try {
        app.listen(PORT, (() => {
        console.log("server started")
}))
        
    } catch (e) {
       console.log(e) 
    }
    
}

connectDB().then(startApp())

