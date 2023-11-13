import Rides from '../models/rideDetailsModel.js';


   const usersRideController={
  
    handleUsersRide:async (req,res)=>{

         const src=req.body.source;
         const dest=req.body.destination;

         try {
            // Assuming your Ride model has a find method
            const allRidesFromSourceToDestination = await Rides.find({
              source: src,
              destination: dest,
            });
      
                  //console.log(allRidesFromSourceToDestination);
      
                res.render('ridesDetails.ejs',{allRidesFromSourceToDestination});

                   // res.json(allRidesFromSourceToDestination);
          } catch (error) {
               console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }

    }


   };


     export default usersRideController;

