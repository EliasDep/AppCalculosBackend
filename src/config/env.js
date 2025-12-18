import dotenv from 'dotenv'


dotenv.config()

export const config = {

    port: process.env.PORT || 8080,
    appPassword: process.env.APP_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    mongoUri: process.env.MONGO_URI
    
}
