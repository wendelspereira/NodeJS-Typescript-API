// import { ISpecificationDTO, ISpecificationRepository } from "../repository/ISpecificationRepository";

// class CreateSpecificationService {
    
//     constructor(private specificationRepository: ISpecificationRepository){}
    
//     async execute({ name, description }: ISpecificationDTO){
//         const specificationAlreadyExists = await this.specificationRepository.findByName(name)
//         if(specificationAlreadyExists){
//             throw new Error("Specification already exists!")
//         }
//         await this.specificationRepository.create({ name, description })
//     }
// }

// export {CreateSpecificationService}