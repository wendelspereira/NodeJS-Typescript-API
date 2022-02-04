import { ICategoryDTO, ICategoryRepository } from "../../repository/ICategoryRepository"


class CreateCategoryUseCase {
    constructor(private categoryRepository: ICategoryRepository){}
    execute({description, name}: ICategoryDTO): void{
        const categoryAlreadyExists = this.categoryRepository.findByName(name)
        if(categoryAlreadyExists){
            throw new Error("Category already exists!")
        }
        this.categoryRepository.create({name, description})
    }
}

export { CreateCategoryUseCase }