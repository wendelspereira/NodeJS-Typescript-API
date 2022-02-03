import { Router } from "express";
import {CategoryRepository} from "../repository/CategoryRepository";

const categoriesRoutes = Router();
const categoryRepository = new CategoryRepository();

categoriesRoutes.post("/", (request, response) => {
    const {name, description} = request.body

    const categoryAlreadyExists = categoryRepository.findByName(name)
    if(categoryAlreadyExists){
        return response.status(400).send({error: "Category already exists!"})
    }

    categoryRepository.create({name, description})
    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoryRepository.list()
    response.json(all)
});

export { categoriesRoutes };
