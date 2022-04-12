import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

interface ICarRepository {
    create: (data: ICreateCarDTO) => Promise<Car>;
    findByLicensePlate: (license_plate: string) => Promise<Car | undefined>;
}

export { ICarRepository };
