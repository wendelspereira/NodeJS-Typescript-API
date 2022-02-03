import { Category } from "../model/category";

interface ICategoryDTO {
    name: string;
    description: string;
}

interface ICategoryRepository {
    create: ({name, description}: ICategoryDTO) => void;
    list: () => Category[];
    findByName: (name: string) => Category | undefined;
}

export {ICategoryDTO, ICategoryRepository}