import express from "express";
import axios from 'axios';
import path from "path";
import bodyParser from "body-parser";
import mongoose from "./db/dbConnection.js";
import signupRoutes from './routes/signupRoute.js';


const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/',signupRoutes);

app.get('/', (req, res) => {  
      res.render("authentication.ejs");
})

app.get('/signup',(req,res)=>{
      res.render('signup.ejs');
})

app.get('/signin',(req,res)=>{
       res.render('signin.ejs');
})

app.listen(port,()=>{
      console.log(`app is listining on the port ${port}`);
})