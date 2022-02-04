import fs from "fs";
import csvParse from "csv-parse"
import { CategoryRepository } from "../../repository/implementations/CategoryRepository";

class InputCategoryUseCase {
    constructor(private categoryRepository: CategoryRepository) {}

    execute(file: Express.Multer.File) {
        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse()

        stream.pipe(parseFile)

        parseFile.on("data", async (line: any) => {
            console.log(line)
        })
    }
}

export { InputCategoryUseCase };
  
