import Itinerary from '../../models/Itinerary.js'

let allItinerary = async (req, res, next) => {
    try {
        let result = await Itinerary.find()
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

let itinerariesByName = async (req, res, next) => {
    try {
        let nameValue = req.params.nameValue
        let array = {}
        if (nameValue) {
            array.name_itinerary = { $regex: nameValue, $options: 'i' }
        }
        let resultado = await Itinerary.find(array)
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

let itinerariesById = async (req, res, next) => {
    try {
        let valueID = req.params.id
        console.log(valueID)
        let resultado = await Itinerary.findById(valueID)
        console.log(resultado);
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

export { allItinerary, itinerariesByName, itinerariesById }
