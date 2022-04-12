import { CarRepositoryInMemory } from "@modules/cars/repository/in-memory/CarRepositoryInMemory";
import { ICarRepository } from "@modules/cars/repository/ICarRepository";

let carsRepositoryInMemory: ICarRepository;

describe("List cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarRepositoryInMemory();
    });

    it("should be able to list all cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Gol",
            description: "Semi-novo",
            daily_rate: 150,
            license_plate: "43aaf688-3f87-446c-b236-7e0917678276",
            fine_amount: 100,
            brand: "Toyota",
        });

        const cars = await carsRepositoryInMemory.findAvailable();

        expect(cars).toEqual([car]);
    });
});
