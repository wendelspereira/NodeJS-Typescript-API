import { Category } from "../model/Category";
import { ICategoryDTO, ICategoryRepository } from "./ICategoryRepository";


class CategoryRepository implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICategoryDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    } 

    findByName(name: string): Category | undefined {
        const category = this.categories.find(category => category.name === name)
        return category
    }
}

export { CategoryRepository };
