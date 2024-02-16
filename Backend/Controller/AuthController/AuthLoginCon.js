import RegisterSche from "../../Module/RegisterSche.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import dotenv from "dotenv";
dotenv.config();

const AuthLoginCon = async (req, res) => {
    try {
        const admin_email = process.env.admin_email;
        const admin_pass = process.env.admin_pass;
        const admin = { admin_email, admin_pass };
        const { email, password } = req.body;
        if ((email === process.env.admin_email) && (password === process.env.admin_pass)) {
            jwt.sign(
                { email: email },
                process.env.JWT_Secret_Key,
                { expiresIn: process.env.JWT_Key_ExpireIn },
                (error, token) => {
                    if (token) {
                        res.status(200).send({
                            success: true,
                            admin,
                            token
                        })
                    } else {
                        res.send({
                            success: false,
                            message: "Error From Admin Login Token",
                            Error: `${error}`
                        });
                    }
                }
            )
        } else {
            const user = await RegisterSche.findOne({ email });
            if (user) {
                const IsMatch = await bcrypt.compare(password, user.password);
                if (IsMatch) {
                    jwt.sign(
                        { _id: user._id },
                        process.env.JWT_Secret_Key,
                        { expiresIn: process.env.JWT_Key_ExpireIn },
                        (error, token) => {
                            if (token) {
                                res.status(200).send({
                                    success: true,
                                    user,
                                    token
                                })
                            } else {
                                res.send({
                                    success: false,
                                    message: "Error From Auth Login Token",
                                    Error: `${error}`
                                });
                            }
                        }
                    )
                }
            }
        }
    } catch (error) {
        res.status(501).send({
            success: false,
            message: "Error From Auth Login Controller",
            Error: `${error}`
        })
    }
}

export default AuthLoginCon;