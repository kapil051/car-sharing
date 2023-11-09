import express from "express"
import homerRouteController from '../controllers/homeRouteController.js'

const router=express.Router();

 router.get("/home",homerRouteController.handleHome);

  export default router;