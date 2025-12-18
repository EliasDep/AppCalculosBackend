import express from 'express'
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'
import clientRoutes from './routes/clientRoutes.js'
import calculationRoutes from './routes/calculationRoutes.js'


const app = express()

app.use (cors())
app.use (express.json())

app.use ('/api/auth', authRoutes)
app.use ('/api/clients', clientRoutes)
app.use ('/api/calculations', calculationRoutes)


export default app
