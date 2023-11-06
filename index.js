import express from "express";
import axios from 'axios';
import path from "path";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app=express();
const port=3000;

app.set('view engine', 'ejs');1
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {  
      res.render("home.ejs");
})

app.listen(port,()=>{
      console.log(`app is listining on the port ${port}`);
})