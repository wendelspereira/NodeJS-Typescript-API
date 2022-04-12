import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import  {CreateSpecificationController}  from "@modules/cars/useCases/createSpecifications/CreateSpecificationController";
import { ListSpecificationsController } from "@modules/cars/useCases/listSpecifications/ListSpecificationsController";
import { ensureIsAdmin } from "../middleware/ensureIsAdmin";
const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()
const listSpecificationsController  = new ListSpecificationsController()

specificationsRoutes.post('/',  ensureAuthenticated, ensureIsAdmin, createSpecificationController.handle)

specificationsRoutes.get('/', listSpecificationsController.handle)

export {specificationsRoutes}