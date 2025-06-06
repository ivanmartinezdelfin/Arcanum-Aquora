import { Router } from 'express';
import Alert from '../models/alert.model.js';

const router = Router();

//Ruta para crear una alerta (POST)
router.post('/', createAlert);

// Ruta para obtener todas las alertas (GET)
router.get('/', getAlerts);
export default router;