import { CarRepositoryInMemory } from "@modules/cars/repository/in-memory/CarRepositoryInMemory";
import { AppError } from "@shared/errors/AppError";
import { CreateCarUseCase } from "./CreateCarUseCase";

let createCarUseCase: CreateCarUseCase;
let createCarRepositoryInMemory: CarRepositoryInMemory;

describe("Create car", () => {
    beforeEach(() => {
        createCarRepositoryInMemory = new CarRepositoryInMemory();
        createCarUseCase = new CreateCarUseCase(createCarRepositoryInMemory);
    });

    it("should be able to create a new car", async () => {
        const car = {
            name: "Gol",
            description: "Semi-novo",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Volkswagen",
        };

        await createCarUseCase.execute({
            name: car.name,
            description: car.description,
            daily_rate: car.daily_rate,
            license_plate: car.license_plate,
            fine_amount: car.fine_amount,
            brand: car.brand,
        });

        const carCreated = await createCarRepositoryInMemory.findByLicensePlate(
            car.license_plate
        );

        expect(carCreated).toHaveProperty("id");
    });

    it("should not be able to create a already exists car", async () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Carro 1",
                description: "Semi-novo",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Volkswagen",
            });

            await createCarUseCase.execute({
                name: "Carro 2",
                description: "Semi-novo",
                daily_rate: 100,
                license_plate: "ABC-1234",
                fine_amount: 60,
                brand: "Volkswagen",
            });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be able to create car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Carro 2",
            description: "Semi-novo",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "Volkswagen",
        });

        expect(car.available).toBe(true)
    });
});
