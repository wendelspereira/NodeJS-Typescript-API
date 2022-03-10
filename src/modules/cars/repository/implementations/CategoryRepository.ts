import { Category } from "../../entities/category";
import { getRepository, Repository } from "typeorm";
import { ICategoryDTO, ICategoryRepository } from "../ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = await this.repository.create({ name, description });

        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category | undefined> {
        const category = await this.repository.findOne({ name });
        return category;
    }
}

export { CategoryRepository };
