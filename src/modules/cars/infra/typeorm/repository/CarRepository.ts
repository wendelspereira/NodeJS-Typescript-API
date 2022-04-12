import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { ICarRepository } from "@modules/cars/repository/ICarRepository";
import { getRepository, Repository } from "typeorm";
import { Car } from "../entities/Car";

interface IRequest {
    category_id?: string;
    name?: string;
    brand?: string;
}

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
        return car;
    }

    async findAvailable({
        category_id,
        name,
        brand,
    }: IRequest): Promise<Car[]> {
        const carsQuery = this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true });

        if (category_id) {
            carsQuery.andWhere("category_id = :category_id", { category_id });
        }

        if (brand) {
            carsQuery.andWhere("brand = :brand", { brand });
        }

        if (name) {
            carsQuery.andWhere("name = :name", { name });
        }
        const cars = await carsQuery.getMany();

        return cars;
    }
}

export { CarRepository };
