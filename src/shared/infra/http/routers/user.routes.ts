import { Router } from "express";
import multer from "multer"

import { CreateUserController } from "@modules/accounts/useCases/createUser/createUserController";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import uploadConfig from '@config/upload'
import { UploadUserAvatarController } from "@modules/accounts/useCases/uploadAvatar/uploadUserAvatarController";

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload('./tmp/avatar'))
const createUserController = new CreateUserController();
const uploadUserAvatarController = new UploadUserAvatarController();

userRoutes.post("/", ensureAuthenticated, createUserController.handle);

userRoutes.patch(
    "/avatar",
    ensureAuthenticated,
    uploadAvatar.single("avatar"),
    uploadUserAvatarController.handle
);

export { userRoutes };
