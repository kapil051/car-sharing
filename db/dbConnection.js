import mongoose from "mongoose";


const dbUrl="mongodb+srv://kapilkant:kapilkant@cluster0.7atje7n.mongodb.net/CARSHARING";

   mongoose.connect(dbUrl)
   .then(()=>{
      console.log("connected to remote db");
   })
   .catch((e)=>{
      console.log("error",e);
 })

 
export default  mongoose;