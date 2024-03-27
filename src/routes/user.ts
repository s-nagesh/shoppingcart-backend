import express from "express";
import { createUser,getAllUsers,getUser,deleteUser } from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";
const router = express.Router();

router.post("/createuser", createUser);
router.get('/all', adminOnly, getAllUsers);
router.get('/:id', getUser)

// route chaining
router.route('/:id').get(getUser).delete(adminOnly,deleteUser);


export default router;
