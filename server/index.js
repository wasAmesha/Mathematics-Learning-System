import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();

/*const CourseModel = require("./models/Course");*/

import {userRouter} from "./routes/users.js";
import {userCoursesRouter} from "./routes/userCourses.js";

app.use(express.json());
app.use(cors());

app.use("/auth",userRouter);
app.use("/usercourses",userCoursesRouter);

mongoose.connect("mongodb+srv://ameshawahalathanthri:namaAmesha123@mathappcrud.apvezkd.mongodb.net/MathAppDB?retryWrites=true&w=majority",{
    useNewUrlParser:true,
});

/*
app.post("/insert",async(req,res)=>{

    const fullName=req.body.fullName;
    const dob=req.body.dob;
    const country=req.body.country;
    const email=req.body.email;
    const courseName=req.body.courseName;
    const course = new CourseModel({fullName:fullName,dob:dob,country:country,email:email,courseName:courseName});

    try{
        await course.save();
        res.send("inserted data");
    }catch(err){
        console.log(err);
    }
});*/

app.listen(3001,()=>{
    console.log("SERVER RUNS PERFECTLY!");
});