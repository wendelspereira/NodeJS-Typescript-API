import { SpecificationRepository } from "../../repository/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateCategoryController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(
    specificationRepository
);
const createSpecificationController = new CreateSpecificationController(
    createSpecificationUseCase
);

export { createSpecificationController };
