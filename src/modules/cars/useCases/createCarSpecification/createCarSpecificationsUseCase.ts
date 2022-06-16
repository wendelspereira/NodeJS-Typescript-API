import { ICarRepository } from "@modules/cars/repository/ICarRepository";
import { ISpecificationRepository } from "@modules/cars/repository/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Car } from "@modules/cars/infra/typeorm/entities/Car";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

@injectable()
class CreateCarSpecificationsUseCase {
    constructor(
        @inject("CarRepository")
        private carRepository: ICarRepository,

        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const car = await this.carRepository.findById(car_id);
        if (!car) {
            throw new AppError("Cars does't exists!");
        }

        const specifications = await this.specificationRepository.findByIds(
            specifications_id
        );

        car.specifications = specifications;
        
        await this.carRepository.create(car);

        return car;
    }
}

export { CreateCarSpecificationsUseCase };
