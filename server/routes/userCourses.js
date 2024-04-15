import express from "express";
//import mongoose from "mongoose";
//import jwt from "jsonwebtoken";
//import bcrypt from "bcrypt";
import { UserCourseModel } from "../models/UserCourse.js";
import { UserModel } from "../models/User.js";

const router=express.Router();

router.get("/",async(req,res)=>{
    try{
        const response=await UserCourseModel.find({});
        res.json(response);
    }catch(err){
        res.json(err);
    }
});

router.get("/mycourses",async(req,res)=>{
    try{
        const response=await UserCourseModel.find({});
        res.json(response);
    }catch(err){
        res.json(err);
    }
});

router.post("/",async(req,res)=>{
    const userCourse =new UserCourseModel(req.body);
    try{
        const response=await userCourse.save();
        res.json(response);
    }catch(err){
        res.json(err);
    }
});

router.put("/",async(req,res)=>{
    try{
        const userCourse =await UserCourseModel.findById(req.body.userCourseID);
        const user =await UserModel.findById(req.body.userID);
        user.registeredCourses.push(userCourse);
        await user.save();
        res.json({registeredCourses:user.registeredCourses});
    }catch(err){
        res.json(err);
    }
});

router.get("/registeredCourses/ids",async(req,res)=>{
    try{
        const user=await UserModel.findById(req.body.userID);
        res.json({registeredCourses:user?.registeredCourses});
    }catch(err){
        res.json(err);
    }
});

router.get("/registeredcourses/:userID",async(req,res)=>{
    try{
        
        /*const user=await UserModel.findById(req.params.userID);
        const registeredCourses=await UserCourseModel.find({
            _id:{$in:user.registeredCourses},
        });
        res.json({registeredCourses});*/
        const userID = req.params.userID;
        const user = await UserCourseModel.find({ userOwner: userID});
        const registeredCourses=await UserCourseModel.find({
            _id:{$in:user},
        });
        res.json({registeredCourses});
        //res.json(courses);

    }catch(err){
        res.json(err);
    }
});

router.get("/coursedetails/:courseID",async(req,res)=>{
    try{
        
        /*const user=await UserModel.findById(req.params.userID);
        const registeredCourses=await UserCourseModel.find({
            _id:{$in:user.registeredCourses},
        });
        res.json({registeredCourses});*/
        const courseID = req.params.courseID;
        const courseDetails = await UserCourseModel.findById(courseID);
        res.json(courseDetails);
        //res.json(courses);

    }catch(err){
        res.json(err);
    }
});

router.put("/updatecourses/:courseID",async(req,res)=>{
    try{
        const courseID = req.params.courseID;
        const updatedData = req.body; 

        const updatedCourse = await UserCourseModel.findByIdAndUpdate(courseID, updatedData, { new: true });

        res.json(updatedCourse);

    }catch(err){
        res.json(err);
    }
});

router.delete("/deletecourses/:courseID",async(req,res)=>{
    try{
        const courseID = req.params.courseID;
        //const updatedData = req.body; 

        const deletedCourse = await UserCourseModel.findByIdAndDelete(courseID);

        res.json({ message: 'User deleted successfully' });

    }catch(err){
        res.json(err);
    }
});

export{router as userCoursesRouter};