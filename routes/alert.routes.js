import { Router } from 'express';
import { createAlert, getAlerts} from '../controllers/alert.controller.js';

const router = Router();
//Ruta para crear una alerta (POST)
router.post('/', createAlert);

// Ruta para obtener todas las alertas (GET)
router.get('/', getAlerts);
export default router;