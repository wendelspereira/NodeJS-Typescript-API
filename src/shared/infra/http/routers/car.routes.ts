import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureIsAdmin } from "../middleware/ensureIsAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ListCarsController } from "@modules/cars/useCases/listCars/listCarsController";

const carsRoutes = Router();

const createCarController = new CreateCarController()
const listCarsController = new ListCarsController()

carsRoutes.post('/', ensureAuthenticated, ensureIsAdmin, createCarController.handle)
carsRoutes.get('/', listCarsController.handle)

export {carsRoutes}