import User from "../models/signupmodel.js"

  let currentUser={};

   const signinController={ 

         findUser: async (req,res)=>{

               const {email,password}=req.body;
                  

              try{
              
                   const userEmail=await User.findOne({email}); 
                   const userPassword=await User.findOne({password});

                  //     console.log(userEmail,userPassword);

                      if(userEmail&&userPassword){

                            console.log("hello");

                        currentUser={
                              username:userEmail.username,
                        };

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
                   console.error("user registration failed!",e);
                  return res.status(500).json({error:"user registration failed"});
              }
         },

   };

export default signinController; 

   export {currentUser};