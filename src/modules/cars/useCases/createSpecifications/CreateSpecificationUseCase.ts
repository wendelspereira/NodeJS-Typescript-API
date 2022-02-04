import { SpecificationRepository } from "../../repository/implementations/SpecificationRepository";
import { ISpecificationDTO } from "../../repository/ISpecificationRepository";

class CreateSpecificationUseCase{

    constructor(private specificationRepository: SpecificationRepository){}

    execute({ name, description }: ISpecificationDTO){
        const specificationAlreadyExists = this.specificationRepository.findByName(name)

        if(specificationAlreadyExists){
            throw new Error("Specification already exists")
        }

        this.specificationRepository.create({ name, description })
    }
}

export {CreateSpecificationUseCase}