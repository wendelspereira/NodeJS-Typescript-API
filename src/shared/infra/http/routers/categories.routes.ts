import { Router } from "express";
import { CreateCategoryController } from "@modules/cars/useCases/createCategory/CreateCategoryController";
import { InputCategoryController } from "@modules/cars/useCases/inputCategory/inputCategoryController";
import { ListCategoriesController } from "@modules/cars/useCases/listCategories/ListCategoriesController";
import multer from "multer";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { ensureIsAdmin } from "../middleware/ensureIsAdmin";

const categoriesRoutes = Router();
const upload = multer({ dest: "./tmp" });

const createCategoryController = new CreateCategoryController();
const inputCategoryController = new InputCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post(
    "/",
    ensureAuthenticated,
    ensureIsAdmin,
    createCategoryController.handle
);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
    "/import",
    ensureAuthenticated,
    ensureIsAdmin,
    upload.single("file"),
    inputCategoryController.handle
);

export { categoriesRoutes };
