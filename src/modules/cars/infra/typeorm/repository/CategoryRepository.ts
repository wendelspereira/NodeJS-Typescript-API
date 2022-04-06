import { getRepository, Repository } from "typeorm";
import { Category } from '@modules/cars/infra/typeorm/entities/category';
import { ICategoryDTO, ICategoryRepository } from "@modules/cars/repository/ICategoryRepository";

class CategoryRepository implements ICategoryRepository {
    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ name, description }: ICategoryDTO): Promise<void> {
        const category = this.repository.create({ name, description });

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
