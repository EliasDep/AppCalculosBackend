import jwt from 'jsonwebtoken'
import { config } from '../config/env.js'


export const auth = (req, res, next) => {

    const header = req.headers.authorization
    if (!header) return res.status(401).json ({ message: 'No autorizado' })

    const token = header.split(' ')[1]
    if (!token) return res.status(401).json ({ message: 'No autorizado' })

    try {

        const payload = jwt.verify (token, config.jwtSecret)
        req.user = payload

        next()

    } catch (err) {

        return res.status(401).json ({ message: 'Token inválido' })

    }
    
}
