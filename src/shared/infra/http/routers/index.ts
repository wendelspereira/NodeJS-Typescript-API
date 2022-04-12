import express from "express";
const routes = express();

import { categoriesRoutes } from "./categories.routes";
import { carsRoutes } from "@shared/infra/http/routers/car.routes";
import { specificationsRoutes } from "./specifications.routes";
import { userRoutes } from "./user.routes";
import { authenticateRoutes } from './authenticate.routes'

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/accounts", userRoutes);
routes.use(authenticateRoutes);
routes.use('/cars', carsRoutes);

export { routes };
