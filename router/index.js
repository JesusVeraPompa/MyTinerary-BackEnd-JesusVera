import { Router } from 'express'
import routerCity from "./routerCity.js";

const routerIndex = Router()

routerIndex.use('/cities',routerCity)

export default routerIndex;