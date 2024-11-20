import { Router } from 'express'
import {
    allItinerary,
    itinerariesByName,
    itinerariesById,
} from '../controllers/itineraries/readItinerary.js'
import { create, createAll } from '../controllers/itineraries/createItinerary.js'
import { update } from '../controllers/itineraries/updateItinerary.js'
import { destroy } from '../controllers/itineraries/deleteItinerary.js'
import passport from '../middlewares/passport.js'

const routerItinerary = Router()

// readItinerary
routerItinerary.get('/all', passport.authenticate('jwt', { session: false }), allItinerary)
routerItinerary.get(
    '/name/:nameValue',
    passport.authenticate('jwt', { session: false }),
    itinerariesByName
)
routerItinerary.get('/id/:id', passport.authenticate('jwt', { session: false }), itinerariesById)

// createItinerary
routerItinerary.post('/create', passport.authenticate('jwt', { session: false }), create)
routerItinerary.post('/createAll', passport.authenticate('jwt', { session: false }), createAll)

// updateItinerary
routerItinerary.put('/update/:id', passport.authenticate('jwt', { session: false }), update)

// deleteItinerary
routerItinerary.delete('/destroy/:id', passport.authenticate('jwt', { session: false }), destroy)

export default routerItinerary
