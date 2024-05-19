import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

const connection = async () =>{
    try{
        mongoose.connect(process.env.URL)
        console.log("Connect");
    }catch(e){console.log("Error"+e);}
}

connection()