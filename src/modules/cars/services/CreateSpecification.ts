import { ISpecificationDTO, ISpecificationRepository } from "../repository/ISpecificationRepository";

class CreateSpecificationService {
    
    constructor(private specificationRepository: ISpecificationRepository){}
    
    execute({ name, description }: ISpecificationDTO){
        const specificationAlreadyExists = this.specificationRepository.findByName(name)
        if(specificationAlreadyExists){
            throw new Error("Specification already exists!")
        }
        this.specificationRepository.create({ name, description })
    }
}

export {CreateSpecificationService}