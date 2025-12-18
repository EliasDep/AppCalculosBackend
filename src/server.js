import mongoose from 'mongoose'
import app from './app.js'
import { config } from './config/env.js'


const start = async () => {

    try {
        
        await mongoose.connect (config.mongoUri)

        console.log ('MongoDB conectado')

        app.listen (config.port, () => {
            console.log (`Servidor escuchando en puerto ${config.port}`)
        })

    } catch (err) {

        console.error ('Error al iniciar servidor', err)
        process.exit(1)

    }

}

start()
