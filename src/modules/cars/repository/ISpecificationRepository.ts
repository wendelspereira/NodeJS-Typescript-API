import { Specification } from "../model/specification";

interface ISpecificationDTO {
    name: string;
    description: string;
}

interface ISpecificationRepository {
    create: ({ name, description }: ISpecificationDTO) => void;
    findByName: (name: string) => Specification | undefined
    list: () => Specification[]
}

export { ISpecificationDTO, ISpecificationRepository}