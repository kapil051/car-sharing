import mongoose from "mongoose";

  const rideSchema=mongoose.mongoose.Schema({
      source:{type:String,required:true},
      destination:{type:String,required:true},
      price:{type:Number,required:true},
      time:{type:String,required:true},
      carName:{type:String,required:true},
      instruction:{type:String,required:true},
  })

 const RideDetails=mongoose.model("RideDetails",rideSchema);

    export default RideDetails;