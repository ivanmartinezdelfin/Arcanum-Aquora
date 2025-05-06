import { Router } from 'express'
import { createAlert, listAlerts } from '../controllers/alertController.js'
const router = Router()

router.post('/', createAlert)
router.get('/', listAlerts)

export default router