

import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

 const Connection=()=>{


    mongoose.connect(process.env.MONGODB_ );

    mongoose.connection.on('connected',()=>{
        console.log('DAtabase connected Successfully');

    })
    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })
    mongoose.connection.on('error',()=>{
        console.log('Error while connecting',error.message);
    })
}
export default Connection  