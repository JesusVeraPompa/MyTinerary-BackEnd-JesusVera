import User from "../models/User.js";

export default async (req,res,next) => {
    try {
        let account = await User.findOne({email: req.body.email})
        if (account) {
            req.user ={
                name : account.name,
                surname: account.surname,
                email : account.email,
                password: account.password,
                role: account.role,
                photo: account.photo
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            message: "User does not exits"
        })      
    } catch (error) {
        next(error)
    }
}