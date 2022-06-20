import { ICarRepository } from "@modules/cars/repository/ICarRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    category_id?: string;
    name?: string;
    brand?: string;
}

@injectable()
class ListCarsUseCase {
    constructor(
        @inject("CarRepository")
        private carRepository: ICarRepository
    ) {}


    async execute({category_id, name, brand}: IRequest) {
        

        const cars = await this.carRepository.findAvailable({category_id, name, brand});
        return cars;
    }
}

export { ListCarsUseCase };
