import { Category } from "../../entities/category";
import { ICategoryDTO, ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = new Category();

        Object.assign(category, {
            name,
            description,
        });

        this.categories.push(category);
    }

    async list(): Promise<Category[]> {
        return this.categories;
    }


    async findByName(name: string): Promise<Category | undefined> {
        const category = this.categories.find(category => category.name = name)
        return category
    };
}

export { CategoryRepositoryInMemory };
