import {
    ICategoryDTO,
    ICategoryRepository,
} from "../../repository/ICategoryRepository";
import { inject, injectable } from "tsyringe";

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
            throw new Error("Category already exists!");
        }
        this.categoryRepository.create({ name, description });
    }
}

export { CreateCategoryUseCase };
