import { CategoryRepository } from "../../repository/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriescontroller";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoryRepository = new CategoryRepository()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);
 
export {listCategoriesController}