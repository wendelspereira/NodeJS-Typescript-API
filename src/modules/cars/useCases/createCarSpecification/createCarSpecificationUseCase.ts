import { Specification } from "@modules/cars/infra/typeorm/entities/Specification";
import { ICarRepository } from "@modules/cars/repository/ICarRepository";
import { ISpecificationRepository } from "@modules/cars/repository/ISpecificationRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

interface IRequest {
    car_id: string;
    specifications_id: string[];
}

class CreateSpecificationUseCase {
    constructor(
        @inject("CarRepository")
        private carRepository: ICarRepository,

        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository
    ) {}

    async execute({ car_id, specifications_id }: IRequest): Promise<void> {
        const car = await this.carRepository.findById(car_id);

        if (!car) {
            throw new AppError("Cars does't exists!");
        }

        const specifications = await this.specificationRepository.findByIds(
            specifications_id
        );

        car.specifications = specifications as Specification[];

        await this.carRepository.create(car);
    }
}

export { CreateSpecificationUseCase };
