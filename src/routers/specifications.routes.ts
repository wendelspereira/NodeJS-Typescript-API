import { Router } from "express";
import { SpecificationRepository } from "../modules/cars/repository/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecification";
const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository()

specificationsRoutes.post('/', (request, response)=> {
    const {name, description} = request.body

    const createSpecificationService = new CreateSpecificationService(specificationRepository);
    createSpecificationService.execute({ name, description })

    response.status(201).send()
})

specificationsRoutes.get('/', (request, response)=> {
    const all = specificationRepository.list()
    
    response.json(all)
})

export {specificationsRoutes}