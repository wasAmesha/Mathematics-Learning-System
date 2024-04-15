import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { UserModel } from "../models/User.js";

const router=express.Router()

router.post("/signup",async(req,res)=>{
    const{username,password,email}=req.body;

    const userEmail=await UserModel.findOne({email});
    const user=await UserModel.findOne({username});

    if(userEmail){
        return res.json({message:"You have already registerd!"});
    }else{
        if(user){
            return res.json({message:"This username is already taken!"});
        }
    
        const hashedPassword=await bcrypt.hash(password,10)
    
        const newUser=new UserModel({username,password:hashedPassword,email}); //create new user
        await newUser.save();
    
        res.json({message:"You have registered Successfully!"});
    }
    
});

router.post("/login",async(req,res)=>{
    const{username,password}=req.body;
    const user= await UserModel.findOne({username});

    if(!user){
        return res.json({message:"User does not Exist!"});
    }
    const isPasswordValid =await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        return res.json({message:"Invalid Username or Password!"});
    }

    const token=jwt.sign({id:user._id},"secret");
    res.json({token,userID:user._id});
});


export{router as userRouter}