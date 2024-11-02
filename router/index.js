import { Router } from 'express'
import routerCity from "./routerCity.js";
import routerItinerary from "./routerItinerary.js";

const routerIndex = Router()

routerIndex.use('/cities',routerCity)
routerIndex.use('/itineraries',routerItinerary)

export default routerIndex;