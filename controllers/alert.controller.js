import Alert from '../models/alert.model.js';

// Crear nueva alerta
export const createAlert = async (req, res) => {
    try {
        const alert = new Alert(req.body);
        await alert.save();
        res.status(201).json(alert);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

// Obtener todas las alertas
export const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find();
    res.status(200).json(alerts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};