import express from "express";
import axios from 'axios';
import path from "path";
import bodyParser from "body-parser";
import mongoose from "./db/dbConnection.js";


const app=express();
const port=3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get('/', (req, res) => {  
      res.render("home.ejs");
})

app.listen(port,()=>{
      console.log(`app is listining on the port ${port}`);
})