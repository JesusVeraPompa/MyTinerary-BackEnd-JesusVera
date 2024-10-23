import City from '../../models/City.js'

let allCity = async (req, res, next) => {
    try {
        let result = await City.find()
        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Records found with SUCCESS',
                registers_found: `${result.length}`,
                data: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No City Record Found in Database`,
                registers_found: `${result.length}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

let citiesByName = async (req, res,next) => {
    try {
        let nameValue = req.params.nameValue
        let resultado = await City.find({ name: nameValue })
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Registro encontrado con EXITO',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No se encontro Registro en la Base de Datos con: ${nameValue}`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allCity,citiesByName }
