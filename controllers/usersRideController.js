import Rides from '../models/rideDetailsModel.js';


   const usersRideController={
  
    handleUsersRide:async (req,res)=>{

         const src=req.body.source;
         const dest=req.body.destination;

            const allRidesFromSourceToDestination=await Rides.findMany({source:src,destination:dest});

            //         console.log(src,dest);
            //   console.log(allRidesFromSourceToDestination);

    }


   };


     export default usersRideController;

