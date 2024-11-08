import City from '../../models/City.js'
import '../../models/Itinerary.js'

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
                message: `No Record Found in Database`,
                registers_found: `${result.length}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

let citiesByName = async (req, res, next) => {
    try {
        let nameValue = req.params.nameValue
        let array = {}
        if (nameValue) {
            array.name = { $regex: '^' + nameValue, $options: 'i' }
        }
        let resultado = await City.find(array).populate('itineraries', '').exec()
        if (resultado.length > 0) {
            return res.status(200).json({
                success: true,
                message: 'Records found with SUCCESS',
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No Record Found in Database with: ${nameValue}`,
                registers_found: `${resultado.length}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

let citiesById = async (req, res, next) => {
    try {
        let valueID = req.params.id
        let resultado = await City.findById(valueID)
        if (resultado) {
            return res.status(200).json({
                success: true,
                message: 'Records found with SUCCESS',
                data: resultado,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `No Record Found in Database with: ${valueID}`,
                data: resultado,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { allCity, citiesByName, citiesById }
