import mongoose from "mongoose";

const UserCourseSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    dob:{
        type:Date,
        required:true,
    },
    country:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    courseName:{
        type:String,
        required:true,
    },
    userOwner:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:"users", 
        required:true,
    },
});

export const UserCourseModel = mongoose.model("userCourses", UserCourseSchema);