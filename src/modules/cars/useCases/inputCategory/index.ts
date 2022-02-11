import { CategoryRepository } from "../../repository/implementations/CategoryRepository";
import { InputCategoryController } from "./inputCategoryController";
import { InputCategoryUseCase } from "./inputCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance()
const inputCategoryUseCase = new InputCategoryUseCase(categoryRepository)
const inputCategoryController = new InputCategoryController(inputCategoryUseCase)

export {inputCategoryController}