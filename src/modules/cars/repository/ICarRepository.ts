import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
    category_id?: string;
    name?: string;
    brand?: string;
}

interface ICarRepository {
    create: (data: ICreateCarDTO) => Promise<Car>;
    findByLicensePlate: (license_plate: string) => Promise<Car | undefined>;
    findAvailable: ({ category_id, name, brand }: IRequest) => Promise<Car[]>;
    findById: (id: string) => Promise<Car | undefined>;
}

export { ICarRepository };
