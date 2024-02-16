import RegisterSche from "../../Module/RegisterSche.js";
import bcrypt from 'bcrypt';

const AuthRegisterCon = async (req, res) => {
    try {
        const { username, contact, email, password } = req.body;
        const user = await RegisterSche.findOne({ email });
        if (user) {
            res.send({ message: "User Already Exists...!" });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const data = new RegisterSche({
                username: username,
                contact: contact,
                email: email,
                password: hashPassword
            })
            const result = await data.save();
            if (result) {
                res.status(200).send({
                    success: true,
                    message: "Auth Register Successfully..."
                })
            } else {
                res.status(501).send({
                    success: false,
                    message: "Auth Not Register..."
                })
            }
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error From Auth Register Controller",
            Error: `${error}`
        })
    }
}

export default AuthRegisterCon;