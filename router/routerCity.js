import { Router } from 'express'
import { allCity, citiesByName, citiesById } from '../controllers/cities/readCity.js'
import { create,createAll } from '../controllers/cities/createCity.js'
import { update } from '../controllers/cities/updateCity.js'
import { destroy } from '../controllers/cities/deleteCity.js'

const routerCity = Router()

// readCity
routerCity.get('/all', allCity)
routerCity.get('/name/:nameValue', citiesByName)
routerCity.get('/id/:id', citiesById)

// createCity
routerCity.post('/create', create)
routerCity.post('/createAll', createAll)

// updateCity
routerCity.put('/update/:id', update)

// deleteItinerary
routerCity.delete('/destroy/:id', destroy)

export default routerCity
