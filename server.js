import express from 'express'
import 'dotenv/config.js'
import './config/database.js'
import cors from 'cors'
import morgan from 'morgan'
import routerIndex from './router/index.js'
import not_found_handler from './middlewares/not_found_handler.js'
import error_handler_response from './middlewares/error_handler_response.js'
import searchIP from './middlewares/searchIP.js'

const server = express()

const PORT = process.env.PORT

const ready = () => console.log('Server ready in port: ' + PORT)

server.use(express.json()) // Permite trabajar con JSON
server.use(express.urlencoded({ extended: true })) // Captura consultas complejas
server.use(cors()) // Habilita CORS para orígenes cruzados
server.use(morgan('dev')) // Registra peticiones HTTP

server.use(searchIP) // Middlewares Propio para saber de donde realizan la peticion

server.use('/api', routerIndex) // Ruta Inicial de API
server.use(not_found_handler) // Middlewares Manejo de Errores en la URL de la Peticion HTTP
server.use(error_handler_response) // Middlewares Manejo de Errores en respuesta de la Peticion HTTP

server.listen(PORT, ready)
