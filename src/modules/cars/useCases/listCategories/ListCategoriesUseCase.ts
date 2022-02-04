import { ICategoryRepository } from "../../repository/ICategoryRepository";

class ListCategoriesUseCase {
    constructor(private categoryRepository: ICategoryRepository) {}

    execute() {
        const all = this.categoryRepository.list();
        return all;
    }
}

export { ListCategoriesUseCase };
