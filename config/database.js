import mongoose from 'mongoose'

let url = process.env.URI_MONGO

console.log(url)

async function conexionDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Consulta a la Base de Datos EXITOSA')
    } catch (error) {
        console.log(error)
    }
}

conexionDataBase()