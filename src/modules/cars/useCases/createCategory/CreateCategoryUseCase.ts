
import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { ICategoryDTO, ICategoryRepository } from "@modules/cars/repository/ICategoryRepository";

@injectable()
class CreateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}
    async execute({ description, name }: ICategoryDTO): Promise<void> {
        const categoryAlreadyExists = await this.categoryRepository.findByName(
            name
        );
        if (categoryAlreadyExists) {
            throw new AppError("Category already exists!");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
