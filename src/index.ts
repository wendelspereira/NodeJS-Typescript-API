import express from "express";
const routes = express();

import { categoriesRoutes } from "./shared/infra/http/routers/categories.routes";
import { carsRoutes } from "@shared/infra/http/routers/car.routes";
import { specificationsRoutes } from "./shared/infra/http/routers/specifications.routes";
import { userRoutes } from "./shared/infra/http/routers/user.routes";
import { authenticateRoutes } from './shared/infra/http/routers/authenticate.routes'

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/accounts", userRoutes);
routes.use(authenticateRoutes);
routes.use('/cars', carsRoutes);

export { routes };
