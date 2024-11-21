import { token } from "morgan";
import User from "../../models/User.js";

export default async(req,res,next) => {
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        console.log(req);
        console.log(req.user.name);
        
        return res.status(200).json({
            success: true,
            message : "signed In",
            user:{
                name: req.user.name,
                surname: req.user.surname,
                email: req.user.email,
                role: req.user.role,
                photo: req.user.photo
            },
            token: req.token
        })

    } catch (error) {
       next(error) 
    }
}