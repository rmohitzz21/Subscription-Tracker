import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error('Please Define the MONgodb_URI environment variable inside .env.<development/production>.local');
}

const connectTODatabse = async () => {
    try{
        await mongoose.connect(DB_URI);

        console.log(`Connected to Database in ${NODE_ENV} mode`);
        
    }catch (error) {
        console.error('Error Connecting to databse ',error);
        process.exit(1);
    }
}

export default connectTODatabse;