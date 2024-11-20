import { Router } from 'express'
import routerCity from './routerCity.js'
import routerItinerary from './routerItinerary.js'
import routerAuth from './routerAuth.js'
import usersRouter from './routerUsers.js'

const routerIndex = Router()

routerIndex.use('/cities', routerCity)
routerIndex.use('/itineraries', routerItinerary)
routerIndex.use('/auth', routerAuth)
routerIndex.use('/users', usersRouter)

export default routerIndex
