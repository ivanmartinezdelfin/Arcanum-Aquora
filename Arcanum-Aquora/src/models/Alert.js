import { Schema, model } from 'mongoose'

const AlertSchema = new Schema({
    symbol: { type: String, required: true},
    targetPrice: { type: Number, required: true},
    email: { type: String, required: true },
    triggered: {type: Boolean, default: false }
}, { timestamps: true})

export default model('Alert', AlertSchema)