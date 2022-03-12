import { ISpecificationRepository } from "../../repository/ISpecificationRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListSpecificationsUseCase {
    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute() {
        const all = await this.specificationRepository.list();
        return all;
    }
}

export { ListSpecificationsUseCase };
