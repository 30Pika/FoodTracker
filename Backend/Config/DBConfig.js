import mongoose from "mongoose";

const DBConfig =async (MongoDb_URL)=>{
    try {
        await mongoose.connect(MongoDb_URL);
    } catch (error) {
        console.log(`Error From Database Connection : ${error}`)
    }
}

export default DBConfig;