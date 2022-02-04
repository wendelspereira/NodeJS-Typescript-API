import { Router } from "express";
import { createSpecificationController } from "../modules/cars/useCases/createSpecifications";
const specificationsRoutes = Router();

specificationsRoutes.post('/', (request, response)=> {
    createSpecificationController.handle(request, response)
})

// specificationsRoutes.get('/', (request, response)=> {
//     createSpecificationController.handle(request, response)
// })

export {specificationsRoutes}