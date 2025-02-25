import User from "../models/User.js ";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import createError from 'http-errors';

export const register  = async (req, res, next) => {
    try{


        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);


        const newUser = new User({
            ...req.body,
            password: hash,
        })

        await newUser.save()
        res.status(200).send("User has been created. ")
    }catch (err) {
        next(err);
    }
};




// export const login = async (req, res, next) => {
//     try {
//         // Find the user by username
//         const user = await User.findOne({ username: req.body.username });
//         if (!user) {
//             return next(createError(404, "User not found!"));
//         }
        
//         // Check if the password is correct
//         const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
//         if (!isPasswordCorrect) {
//             return next(createError(400, "Wrong password or username!"));
//         }

//         // Sign JWT token
//         const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

//         // Extract sensitive user details
//         const { password, isAdmin, ...otherDetails } = user._doc;

//         // Set cookie with JWT token
//         res.cookie("access_token", token, {
//             httpOnly: true,
//         });

//         // Send user details in response
//         res.status(200).json({ details: {...otherDetails}, isAdmin });
//     } catch (err) {
//         // Handle errors
//         next(err);
//     }
// };


export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) return next(createError(404, "User not found!"));
  
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!isPasswordCorrect)
        return next(createError(400, "Wrong password or username!"));
  
      const token = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.JWT
      );
  
      const { password, isAdmin, ...otherDetails } = user._doc;
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json({ details: { ...otherDetails }, isAdmin });
    } catch (err) {
      next(err);
    }
  };