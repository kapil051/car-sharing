import User from '../models/signupmodel.js';

const userController = {
    registerUser: async (req, res) => {

        try {

            const {username,email, password } = req.body;
            
            const existingUser = await User.findOne({email});

             if(existingUser){
                return res.status(400).json({error:"User already exists. Please log in."});
             }

           const existingUsername = await User.findOne({username});

             if(existingUsername){
                 return res.status(400).json({error:"username already taken change your username"});  
             }

            const newUser = new User(req.body);
            const savedUser = await newUser.save();
                res.render("home.ejs")
        } catch (error) {
             console.error('User registration failed:', error);
            res.status(500).json({ error: 'User registration failed' });
        }
    },
};

export default userController;


