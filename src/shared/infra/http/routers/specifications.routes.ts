import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import  {CreateSpecificationController}  from "@modules/cars/useCases/createSpecifications/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController  = new ListSpecificationsController()

specificationsRoutes.post('/',  ensureAuthenticated, createSpecificationController.handle)

specificationsRoutes.get('/', listSpecificationsController.handle)

export {specificationsRoutes}