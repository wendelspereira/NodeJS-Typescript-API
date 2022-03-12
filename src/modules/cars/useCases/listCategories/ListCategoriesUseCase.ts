import { ICategoryRepository } from "../../repository/ICategoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListCategoriesUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository
    ) {}

    async execute() {
        const all = await this.categoryRepository.list();
        return all;
    }
}

export { ListCategoriesUseCase };
