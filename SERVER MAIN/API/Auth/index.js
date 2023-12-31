import express from "express";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import passport from "passport";

const Router = express.Router();

//Models
import { UserModel } from "../../database/user"

//validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

/*
Route               /signup
Description         Signup with email and pssword
Params              None
Access              Public
Method              POST
*/

Router.post("/signup",async(req,res) => {
    try {
    await ValidateSignup(req.body.credentials);
     
    await UserModel.findEmailAndPhone(req.body.credentials);
        //DB
    const newUser = await UserModel.create(req.body.credentials )

    //JWT Auth Token
    const token = newUser.generateJwtToken();

    return res.status(200).json({token: token, user: newUser, status: "success" })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


/*
Route               /signin
Description         Signin with email and pssword
Params              None
Access              Public
Method              POST
*/

Router.post("/signin",async(req,res) => {
    try {
        await ValidateSignin(req.body.credentials);
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);    
        
    //JWT Auth Token
    const token = user.generateJwtToken();

    return res.status(200).json({token,status: "success" })

    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})


/*
Route               /google
Description         google Signin 
Params              None
Access              Public
Method              GET
*/

Router.get("/google", passport.authenticate("google", {
 scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
    
 ]
})
)

/*
Route               /google/callback
Description         google Signin callback
Params              None
Access              Public
Method              GET
*/

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    return res.redirect(`http://localhost:4000/google/${req.session.passport.user.token}`);

})

export default Router;