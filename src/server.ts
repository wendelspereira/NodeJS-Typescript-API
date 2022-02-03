import express from 'express'
import {categoriesRoutes} from './routers/categories.routes'
import {specificationsRoutes} from './routers/specifications.routes'
const app = express()


app.use(express.json())


app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.use("/categories", categoriesRoutes)
app.use("/specifications", specificationsRoutes)


app.listen(3333, ()=>"App is running")