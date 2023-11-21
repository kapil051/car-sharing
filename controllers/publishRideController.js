import Rides from '../models/rideDetailsModel.js';


     const publishRideController={

            addRide: async (req,res)=>{
                
                 try{
                     const newRide=new Rides(req.body);
                     const savedRide=await newRide.save();
      
                      res.status(200).json({message:'ride saved successfully',ride:savedRide});     

                 }catch(e){
                          console.error(e);
                    res.staus(404).json({error:e,message:'error to add ride'});      
                 }  

            }
     }


     export default publishRideController;