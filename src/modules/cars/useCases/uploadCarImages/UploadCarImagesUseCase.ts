import { ICarImagesRepository } from "@modules/cars/repository/ICarImagesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
    car_id: string;
    images_names: string[];
}

@injectable()
class UploadCarImagesUseCase {
    constructor(
        @inject("CarImageRepository")
        private carImagesRepository: ICarImagesRepository
    ) {}
    async execute({ car_id, images_names }: IRequest): Promise<void> {
        images_names.map(async (image) => {
            await this.carImagesRepository.create(car_id, image);
        });
    }
}

export { UploadCarImagesUseCase };
