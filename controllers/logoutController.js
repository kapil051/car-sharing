import user from "../models/signupmodel.js"

  const logoutController={

        handleLogout: async(req,res)=>{
              res.render('authentication.ejs');
        }
  };

  export default logoutController