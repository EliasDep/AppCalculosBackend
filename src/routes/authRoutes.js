import { Router } from 'express'
import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'


const router = Router()

router.post ('/login', (req, res) => {

    const { password } = req.body

    if (!password) return res.status(400).json ({ message: 'Falta la contraseña' })

    if (password !== config.appPassword) return res.status(401).json ({ message: 'Contraseña incorrecta' })

    const token = jwt.sign ({ access: true }, config.jwtSecret, { expiresIn: '8h' })
    return res.json ({ token })
    
})

export default router
