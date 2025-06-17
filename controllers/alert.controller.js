import Alert from '../models/alert.model.js';

// Crear nueva alerta
export const createAlert = async (req, res) => {
    const { symbol, targetPrice, email } = req.body;

    try {
        const alert = new Alert({ symbol, targetPrice, email });
        const savedAlert = await alert.save();
        return res.status(201).json(savedAlert);
    } catch (error) {
      res.status(400).json({ error: error.message });
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