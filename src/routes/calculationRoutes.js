import { Router } from 'express'
import { getStep, updateStep } from '../controllers/calculationController.js'
import { auth } from '../middlewares/auth.js'


const router = Router()

router.get ('/:id/step/:step', auth, getStep)
router.put ('/:id/step/:step', auth, updateStep)

export default router
