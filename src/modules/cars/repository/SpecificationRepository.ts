import { Specification } from "../model/specification";
import {
    ISpecificationDTO,
    ISpecificationRepository,
} from "./ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private specifications: Specification[]
    
    constructor() {
        this.specifications = [];
    }

    create({ name, description }: ISpecificationDTO) {
        const specification = new Specification();

        Object.assign(specification, {
            name,
            description,
            created_at: new Date(),
        });

        this.specifications.push(specification);
    }

    findByName(name: string) {
        const specification = this.specifications.find(
            (specification) => specification.name === name
        );
        return specification;
    }

    list() {
        const all = this.specifications;
        return all;
    }
}

export { SpecificationRepository };
