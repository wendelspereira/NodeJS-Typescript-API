import { SpecificationRepository } from "../../repository/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateCategoryController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
    const specificationRepository = new SpecificationRepository();
    const createSpecificationUseCase = new CreateSpecificationUseCase(
        specificationRepository
    );
    const createSpecificationController = new CreateSpecificationController(
        createSpecificationUseCase
    );
    return createSpecificationController;
};
