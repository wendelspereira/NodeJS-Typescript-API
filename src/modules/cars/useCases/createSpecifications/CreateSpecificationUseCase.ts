import { SpecificationRepository } from "../../repository/implementations/SpecificationRepository";
import { ISpecificationDTO } from "../../repository/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateSpecificationUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: SpecificationRepository
    ) {}

    async execute({ name, description }: ISpecificationDTO): Promise<void> {
        const specificationAlreadyExists =
            await this.specificationRepository.findByName(name);

        if (specificationAlreadyExists) {
            throw new Error("Specification already exists");
        }

        await this.specificationRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };
