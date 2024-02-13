
import { Router } from "express";
import * as userController from './user.controller.js';
import { auth } from "../../middlewares/auth.middleware.js";
import { endPointsRoles } from "./user.endpoints.js";
import expressAsyncHandler from "express-async-handler";
const userRouter = Router();



userRouter.put('/update-profile',auth(endPointsRoles.NORMALUSER), expressAsyncHandler(userController.updateProfile))





export default userRouter;