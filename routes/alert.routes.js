import { Router } from 'express';
import Alert from '../models/alert.model.js';

const router = Router();

router.post('/', async (requestAnimationFrame, res) => {
    const alert = new Alert(req,body);
    await alert.save();
    res.status(201).json(alert);
});

router.get('/', async (req, res) => {
    const alerts = await Alert.find();
    res.status(200).json(alerts);
});

export default router;