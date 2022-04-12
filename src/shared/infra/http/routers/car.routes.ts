import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureIsAdmin } from "../middleware/ensureIsAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const carsRoutes = Router();

const createCarController = new CreateCarController()

carsRoutes.post('/', ensureAuthenticated, ensureIsAdmin, createCarController.handle)

export {carsRoutes}