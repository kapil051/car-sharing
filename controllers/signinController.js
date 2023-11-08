import User from "../models/signupmodel.js"

   const signinController={ 

         findUser: async (req,res)=>{

               const {email,password}=req.body;
                  

              try{
              
                   const userEmail=await User.findOne({email}); 
                   const userPassword=await User.findOne({password});

                      if(userEmail&&userPassword){
                        res.render("home.ejs",{user:userEmail});
                      } 

                     else if(userEmail&&!userPassword){
                      return res.status(500).json({error:"Enter correct Password"});
                     }

                    else{
                        console.error("user is not present first regiter yourself");
                        return res.status(500).json({error:"registration please"});
                    }  

              }catch(e){
                   console.error("user registration failed!");
                  return res.status(500).json({error:"user registration failed"});
              }
         },

   };

export default signinController; 