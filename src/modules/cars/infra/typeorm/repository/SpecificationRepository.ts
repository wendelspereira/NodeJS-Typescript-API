import { Specification } from "../entities/Specification";
import {getRepository, Repository} from "typeorm"
import { ISpecificationDTO, ISpecificationRepository } from "@modules/cars/repository/ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {
    private repository: Repository<Specification>;

    constructor() {
        this.repository = getRepository(Specification);
    }

    async create({ name, description }: ISpecificationDTO): Promise<void> {
        const specification = this.repository.create({ name, description });

        await this.repository.save(specification);
    }

    async list(): Promise<Specification[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Specification | undefined> {
        const specification = await this.repository.findOne({ name });
        return specification;
    }

    async findByIds(ids: string[]): Promise<Specification[] | undefined>{
        const specifications = await this.repository.findByIds(ids)
        return specifications
    }
}

export { SpecificationRepository };
