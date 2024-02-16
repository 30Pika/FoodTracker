import express from "express"
import AuthRegisterCon from "../Controller/AuthController/AuthRegisterCon.js";
import AuthLoginCon from "../Controller/AuthController/AuthLoginCon.js";

// Router Object From Express for Creating Routes
const router = express.Router();

// Auth Register Routes Api
router.post("/auth/register", AuthRegisterCon);

//Auth Login Routes Api
router.post("/auth/login", AuthLoginCon);

export default router;