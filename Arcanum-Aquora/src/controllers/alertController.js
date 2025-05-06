import Alert from '../models/Alert.js'

export const createAlert = async (req, res) => {
    try {
        const alert = await Alert.create(req.body)
        res.status(201).json(alert)
    }   catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export const listAlerts = async (req, res) => {
    try {
        const alerts = await Alert.find()
        res.json(alerts)
    } catch (error) {
        res.status(500).json()
    }
}
