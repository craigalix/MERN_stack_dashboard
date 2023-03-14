import express from "express";
import { getAllUsers } from "../controllers/general.js";
import { getUsers, validate} from "../controllers/login.js";

const router = express.Router();

router.get("/login", getUsers);

// router.post("/",async (req,res) => {
//     try{
//         const{error} = validate(req.body);
//         if(error)
//             return res.status(400).send()
//     }
// })

router.get("/login", getAllUsers);

export default router;