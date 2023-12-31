import express from "express";
import axios from 'axios';
import path from "path";
import bodyParser from "body-parser";
import mongoose from "./db/dbConnection.js";
import signupRoutes from './routes/signupRoute.js';
import signinRoute from './routes/signinRoute.js';
import logoutRoute from './routes/logoutRoute.js';
import homeRoute from './routes/homeRoute.js';
import userWantRide from './routes/userWantRideRoute.js'
import publishRideRoute from './routes/publishRideRoute.js'
 

const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use('/',signupRoutes);
app.use('/',signinRoute);
app.use('/',logoutRoute);
app.use('/',homeRoute);
app.use('/',userWantRide);
app.use('/',publishRideRoute);


app.get('/publishRide',(req,res)=>{
        res.render('publishRide.ejs');
})

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