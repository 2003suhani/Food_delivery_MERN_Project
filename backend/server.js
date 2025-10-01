import dotenv from "dotenv"
dotenv.config()

import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"
import userRouter from "./routes/userRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();

// api end point
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/",(req,res)=>{
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Running on http://localhost:${port}`)
})


//mongodb+srv://shristikhot:Shristi2003@cluster0.rwkci3x.mongodb.net/?
// mongodb+srv://shristikhot:Shristi2003@cluster0.la7aqwz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0