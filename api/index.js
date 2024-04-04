import express from 'express';
import dotenv from "dotenv"
import mongoose, { get } from 'mongoose';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute  from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import Hotel from './models/Hotel.js';
import Room from './models/Room.js';
import cors from 'cors';

const app = express();
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connect to mongoDB")
    } catch (error) {
        throw(error);
    }
};



// middlewares


app.use(cors())
app.use(cookieParser())

app.use(express.json())

app.use("/api/auth", authRoute);   
app.use("/api/users", usersRoute);   
app.use("/api/hotels", hotelsRoute);   
app.use("/api/rooms", roomsRoute); 

app.use((err, req, res, next) => {
    // console.log("Hi i am a middleware!")
    // next();
    const errorStatus = err.status || 200
    const errorMessage = err.message || "Somthing went wrong! "
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
});


// app.get('/hotels',async (req,res) =>{


//     const data = await Hotel.findById('65e436db3b4741ca7beb6a42');
//     res.send(data);


// })

// app.get('/rooms/:id',async (req,res) =>{

//     console.log(req.params.id);
//     const data = await Room.findById(req.params.id);
//     res.send(data);


// })

// app.get('hotels/:id', async(req, res) => {
//     console.log(req.params.id);
//     const data = await Hotel.findById(req.params.id);
//     res.send(data);
// })

app.listen(8080, () => {
    connect()
    console.log("Connect to backend")
})