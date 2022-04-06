import { Specification } from "../infra/typeorm/entities/specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create: ({name, description}: ISpecificationDTO) => Promise<void>;
    list: () => Promise<Specification[]>;
    findByName: (name: string) => Promise<Specification | undefined>;
}

export { ISpecificationDTO, ISpecificationRepository}