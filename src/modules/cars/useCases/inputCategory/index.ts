import { CategoryRepository } from "../../repository/implementations/CategoryRepository";
import { InputCategoryController } from "./inputCategoryController";
import { InputCategoryUseCase } from "./inputCategoryUseCase";
export default (): InputCategoryController => {
    const categoryRepository = new CategoryRepository();
    const inputCategoryUseCase = new InputCategoryUseCase(categoryRepository);
    const inputCategoryController = new InputCategoryController(
        inputCategoryUseCase
    );
    return inputCategoryController;
};
