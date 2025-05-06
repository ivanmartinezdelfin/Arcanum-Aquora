import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import alertRoutes from './routes/alertRoutes,js'
import { startPriceMonitor} from './jobs/priceMonitor.js'

dotenv.config()
const app = express()
app.use(express.json())

// Rutas para alertas
app.use('/api/alerts', alertRoutes)

// Iniciar DB y servidor
const PORT = process.env.PORT || 3000
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor escuchando en puerto ${PORT}`)
        startPriceMonitor()
    })
})