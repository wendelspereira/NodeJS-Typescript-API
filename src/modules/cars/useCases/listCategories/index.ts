import { CategoryRepository } from "../../repository/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


const categoryRepository = CategoryRepository.getInstance()
const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)
const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);
 
export {listCategoriesController}