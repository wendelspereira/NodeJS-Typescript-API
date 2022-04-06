import { Category } from "../infra/typeorm/entities/category";

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create: ({name, description}: ICategoryDTO) => Promise<void>;
    list: () => Promise<Category[]>;
    findByName: (name: string) => Promise<Category | undefined>;
}

export {ICategoryDTO, ICategoryRepository}