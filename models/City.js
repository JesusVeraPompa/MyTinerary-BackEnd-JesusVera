import { Schema, model } from 'mongoose'

let collection = 'Cities'
let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    photo2: { type: String, required: true },
    country: { type: String, required: true },
    flag_country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    population: { type: Number, required: true },
    language: { type: String, required: true },
    currency: { type: String, required: true },
    img_currency: { type: String, required: true },
    time_zone: { type: String, required: true },
    ensign: { type: String, required: true },
    flag_cities: { type: String, required: true },
    itineraries: [{ type: Schema.Types.ObjectId, ref: 'Itineraries'}],

},{
    timestamps: true,
})

let City = model(collection, schema)

export default City

