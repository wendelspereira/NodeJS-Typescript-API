import { Router } from "express";
import { CategoryRepository } from "../modules/cars/repository/CategoryRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();
categoriesRoutes.post("/", (request, response) => {
    createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
    listCategoriesController.handle(request, response);
});

export { categoriesRoutes };
