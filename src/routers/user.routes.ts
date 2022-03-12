import { CreateUserController } from "../modules/accounts/useCases/createUser/createUserController";
import { Router } from "express";
const accountsRoutes = Router();

const createUserController = new CreateUserController()

accountsRoutes.post('/', createUserController.handle)


export {accountsRoutes}