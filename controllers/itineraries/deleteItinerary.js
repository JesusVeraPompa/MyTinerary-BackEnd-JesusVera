import Itinerary from '../../models/Itinerary.js'

let destroy = async (req, res, next) => {
    try {
        let result = await Itinerary.findOneAndDelete(
            { _id: req.params.id }
        )
        if (result) {
            return res.status(200).json({
                success: true,
                message: 'Deleted document with SUCCESS',
                registers_found: `${result._id}`,
                data: result,
            })
        } else {
            return res.status(200).json({
                success: false,
                message: `could not delete document`,
                registers_found: `${result._id}`,
                data: result,
            })
        }
    } catch (error) {
        next(error)
    }
}

export { destroy }