import { Router } from 'express'
import { createClient, listClients, getClient } from '../controllers/clientController.js'
import { auth } from '../middlewares/auth.js'


const router = Router()

router.get ('/', auth, listClients)
router.post ('/', auth, createClient)
router.get ('/:id', auth, getClient)

export default router
