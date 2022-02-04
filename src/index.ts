import express from "express";
const routes = express();

import { categoriesRoutes } from "./routers/categories.routes";
import { specificationsRoutes } from "./routers/specifications.routes";

routes.use("/categories", categoriesRoutes);
routes.use("/specifications", specificationsRoutes);

export { routes };
