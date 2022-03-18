import { parse } from "csv-parse";
import fs from "fs";
import { CategoryRepository } from "../../repository/implementations/CategoryRepository";
import { inject, injectable } from "tsyringe";
import { AppError } from './../../../../errors/AppError';

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
class InputCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: CategoryRepository
    ) {}

    loadCategories(
        file: Express.Multer.File | undefined
    ): Promise<IImportCategory[]> {
        if (!file) {
            throw new AppError("Error on load file");
        }
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);
            const parseFile = parse();
            const categories: IImportCategory[] = [];

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line: any) => {
                    const [name, description] = line;
                    categories.push({ name, description });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    return resolve(categories);
                })
                .on("error", (err) => {
                    return reject(err);
                });
        });
    }

    async execute(file: Express.Multer.File | undefined): Promise<void> {
        const categories = await this.loadCategories(file);

        categories.map(async (item) => {
            const { name, description } = item;
            const categoryAlreadyExists =
                await this.categoryRepository.findByName(name);
            if (!categoryAlreadyExists) {
                await this.categoryRepository.create({ name, description });
            }
        });
    }
}

export { InputCategoryUseCase };
