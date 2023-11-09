import user from '../models/signupmodel.js';
import {currentUser}   from "../controllers/signinController.js"

const homerRouteController={
        handleHome:async (req,res)=>{
           res.render("home.ejs",{user:currentUser});
        }
};


export default homerRouteController;