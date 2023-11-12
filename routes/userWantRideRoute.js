import express from "express";
import usersRideController from "../controllers/usersRideController.js";


   const router=express.Router();

  router.post("/users-wants-ride",usersRideController.handleUsersRide);

  export default router;