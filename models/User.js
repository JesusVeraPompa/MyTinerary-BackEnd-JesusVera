import { Schema, model } from 'mongoose'

let collection = 'users'
let schema = new Schema(
    {
        name: { type: String, required: true },
        surname: { type: String },
        email: { type: String, required: true },
        photo: { type: String, required: true },
        country: { type: String },
        role: { type: String, required: true },
        password: { type: String, required: true },
        online: { type: Boolean },
    },
    {
        timestamps: true,
    }
)

let User = model(collection, schema)
export default User