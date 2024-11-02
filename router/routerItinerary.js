import { Router } from 'express'
import {
    allItinerary,itinerariesByName,itinerariesById
} from '../controllers/itineraries/readItinerary.js'
import { create, createAll } from '../controllers/itineraries/createItinerary.js'
import { update } from '../controllers/itineraries/updateItinerary.js'
import { destroy } from '../controllers/itineraries/deleteItinerary.js'

const routerItinerary = Router()

// readItinerary
routerItinerary.get('/all', allItinerary)
routerItinerary.get('/name/:nameValue', itinerariesByName)
routerItinerary.get('/id/:id', itinerariesById)

// createItinerary
routerItinerary.post('/create',create)
routerItinerary.post('/createAll',createAll)

// updateItinerary
routerItinerary.put('/update/:id', update)

// deleteItinerary
routerItinerary.delete('/destroy/:id', destroy)

export default routerItinerary