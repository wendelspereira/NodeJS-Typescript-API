import { container } from "tsyringe";

import { UserRepository } from "../../modules/accounts/repository/implementations/UserRepository";
import { IUserRepository } from "../../modules/accounts/infra/typeorm/repository/IUserRepository";
import { CategoryRepository } from "@modules/cars/infra/typeorm/repository/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/infra/typeorm/repository/SpecificationRepository";
import { ICategoryRepository } from "@modules/cars/repository/ICategoryRepository";
import { ISpecificationRepository } from "../../modules/cars/repository/ISpecificationRepository";
import { CarRepository } from "@modules/cars/infra/typeorm/repository/CarRepository";
import { ICarRepository } from "@modules/cars/repository/ICarRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ICarRepository>("CarRepository", CarRepository);
