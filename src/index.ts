import express from "express";
const routes = express();

import { categoriesRoutes } from "./routers/categories.routes";
import { specificationsRoutes } from "./routers/specifications.routes";
import { userRoutes } from "./routers/user.routes";
import { authenticateRoutes } from './routers/authenticate.routes'

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);
routes.use("/accounts", userRoutes);
routes.use(authenticateRoutes);

export { routes };
