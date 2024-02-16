import mongoose from "mongoose";

const RegisterSche = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
})

export default mongoose.model("registers", RegisterSche);