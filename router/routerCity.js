import { Router } from 'express'
import { allCity, citiesByName, citiesById } from '../controllers/cities/readCity.js'
import { create, createAll } from '../controllers/cities/createCity.js'
import { update } from '../controllers/cities/updateCity.js'
import { destroy } from '../controllers/cities/deleteCity.js'
import passport from '../middlewares/passport.js'

const routerCity = Router()

// readCity
routerCity.get('/all', passport.authenticate('jwt', { session: false }), allCity)
routerCity.get('/name/:nameValue', passport.authenticate('jwt', { session: false }), citiesByName)
routerCity.get('/id/:id', passport.authenticate('jwt', { session: false }), citiesById)

// createCity
routerCity.post('/create', passport.authenticate('jwt', { session: false }), create)
routerCity.post('/createAll', passport.authenticate('jwt', { session: false }), createAll)

// updateCity
routerCity.put('/update/:id', passport.authenticate('jwt', { session: false }), update)

// deleteItinerary
routerCity.delete('/destroy/:id', passport.authenticate('jwt', { session: false }), destroy)

export default routerCity
