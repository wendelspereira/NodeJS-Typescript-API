import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repository/ICategoryRepository";
import { CategoryRepository } from "../../modules/cars/repository/implementations/CategoryRepository";
import { SpecificationRepository } from "../../modules/cars/repository/implementations/SpecificationRepository";
import { ISpecificationRepository } from "../../modules/cars/repository/ISpecificationRepository";
import { IUserRepository } from "../../modules/accounts/repository/IUserRepository";
import { UserRepository } from "../../modules/accounts/repository/implementations/UserRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository",
    SpecificationRepository
);

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
