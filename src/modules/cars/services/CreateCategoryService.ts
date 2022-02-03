import { ICategoryDTO, ICategoryRepository } from "../repository/ICategoryRepository";

class CreateCategoryService {
    constructor(private categoryRepository: ICategoryRepository){}
    execute({description, name}: ICategoryDTO): void{
        const categoryAlreadyExists = this.categoryRepository.findByName(name)
        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
        this.categoryRepository.create({name, description})
    }
}

export { CreateCategoryService }