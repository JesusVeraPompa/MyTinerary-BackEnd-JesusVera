import City from '../../models/City.js'

let create = async (req, res,next) => {
    try {
        let valueCity = req.body
        let createCity = await City.create(valueCity)
        return res.status(201).json({
            success: true,
            message: 'City created with SUCCESS',
            data: createCity,
        })
    } catch (error) {
        next(error)
    }
}

let createAll = async (req, res,next) => {
    try {
        let valueCity = req.body
        let insertManyCity = await City.insertMany(valueCity)
        return res.status(201).json({
            success: true,
            message: 'All the Cities created with SUCCESS',
            data: insertManyCity,
        })
    } catch (error) {
        next(error)
    }
}

export { create, createAll }