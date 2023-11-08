import  express  from "express";
import signinController from "../controllers/signinController.js";

 const router=express.Router();

router.post('/signin', signinController.findUser);

 export default router;