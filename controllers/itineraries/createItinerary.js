import Itinerary from '../../models/Itinerary.js'

let create = async (req, res,next) => {
    try {
        let valueItinerary = req.body
        let createItinerary = await Itinerary.create(valueItinerary)
        return res.status(201).json({
            success: true,
            message: 'Itinerary created with SUCCESS',
            data: createItinerary,
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res,next) => {
    try {
        let valueItinerary = req.body
        let insertManyItinerary = await Itinerary.insertMany(valueItinerary)
        return res.status(201).json({
            success: true,
            message: 'All the Itinerary created with SUCCESS',
            data: insertManyItinerary,
        })
    } catch (error) {
        next(error)
    }
}

export { create, createAll }