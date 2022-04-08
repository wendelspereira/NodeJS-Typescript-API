import { ICreateCarDTO } from "@modules/cars/dtos/ICreateCarDTO";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";
import { ICarRepository } from "../ICarRepository";

class CarRepositoryInMemory implements ICarRepository {
    cars: Car[] = [];

    async create({
        name,
        description,
        daily_rate,
        license_plate,
        fine_amount,
        brand,
        category_id,
    }: ICreateCarDTO): Promise<Car> {
        const car = new Car();
        
        Object.assign(car, {
            name,
            description,
            daily_rate,
            license_plate,
            fine_amount,
            brand,
            category_id,
        });

        this.cars.push(car);

        return car
    }

    async findByLicensePlate(license_plate: string): Promise<Car | undefined> {
        const car = await this.cars.find(
            (car) => car.license_plate === license_plate
        );
        return car;
    }
}

export { CarRepositoryInMemory };
