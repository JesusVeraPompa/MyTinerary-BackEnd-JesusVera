import { Schema, model } from 'mongoose'

let collection = 'Itineraries'
let schema = new Schema({
    name_itinerary: { type: String, required: true },
    name_user: { type: String, required: true },
    photo: { type: String, required: true },
    img_itinerary: { type: String, required: true },
    price: { type: String, required: true },
    duration: { type: String, required: true },
    likes: { type: Number, required: true },
    hashtags: { type: String, required: true },
},{
    timestamps: true,
})

let Itinerary = model(collection, schema)

export default Itinerary