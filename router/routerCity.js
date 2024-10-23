import { Router } from 'express'
import {
    allCity,citiesByName
} from '../controllers/cities/readCity.js'

const routerCity = Router()

routerCity.get('/all', allCity)
routerCity.get('/city/:nameValue', citiesByName)

export default routerCity