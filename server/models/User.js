import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {type:String,required:true,unique:true},
    registeredCourses:[{type:mongoose.Schema.Types.ObjectId, ref:"usercourses"}],
});

export const UserModel = mongoose.model("users", UserSchema);

