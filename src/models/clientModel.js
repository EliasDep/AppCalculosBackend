import mongoose from 'mongoose'


const ClientSchema = new mongoose.Schema ({

    name: { type: String, required: true, trim: true },
    company: { type: String, default: '', trim: true },
    calculations: {
        // guardamos por step (1..8)
        type: Map,
        of: mongoose.Schema.Types.Mixed,
        default: {}
    },
    createdAt: { type: Date, default: Date.now }

})

const Client = mongoose.model ('Client', ClientSchema)

export default Client
