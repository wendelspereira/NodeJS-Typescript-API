import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController";
import { Router } from "express";
import { ensureIsAdmin } from "../middleware/ensureIsAdmin";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ListCarsController } from "@modules/cars/useCases/listCars/listCarsController";
import { CreateCarSpecificationsController } from "@modules/cars/useCases/createCarSpecification/createCarSpecificationsController";

const carsRoutes = Router();

const createCarController = new CreateCarController();
const listCarsController = new ListCarsController();
const createCarSpecificationsController =
    new CreateCarSpecificationsController();

carsRoutes.post(
    "/",
    ensureAuthenticated,
    ensureIsAdmin,
    createCarController.handle
);
carsRoutes.get("/available", listCarsController.handle);
carsRoutes.post(
    "/specifications/:id",
    ensureAuthenticated,
    ensureIsAdmin,
    createCarSpecificationsController.handle
);

export { carsRoutes };
