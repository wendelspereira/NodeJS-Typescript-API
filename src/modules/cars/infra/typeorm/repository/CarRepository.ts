import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarRepository } from "@modules/cars/repository/ICarRepository";
import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";

class CarRepository implements ICarRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car);
    }

    async create(data: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({ ...data });
        await this.repository.save(car);
        return car;
    }

    async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
        const car = await this.repository.findOne(license_plate);
        return car
    }
}

export { CarRepository };
