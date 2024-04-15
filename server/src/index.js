import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());


app.listen(3002,()=>{
    console.log("SERVER RUNS PERFECTLY!");
});