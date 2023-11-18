import express from "express"
import publishRideController from '../controllers/publishRideController.js'

    const router=express.Router();

    router.post('/publish-ride',publishRideController.addRide);

 export default router;
