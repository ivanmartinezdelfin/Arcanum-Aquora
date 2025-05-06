import cron from 'node-cron'
import Alert from '../models/Alert.js'
import { fetchPrice } from '../services/priceService.js'
import { sendAlert } from '../services/notificationServices.js'

export const startPriceMonitor = () => {
    cron.schedule('* * * * *', async ()=> {
        try {
            console.log('Comprobando alertas activas..')
            const alerts = await Alert.find({ triggered: false})
            
            for (const alert of alerts) {
                const currentPrice = await fetchPrice(alert.symbol)
                if (currentPrice && currentPrice >= alert.targetPrice) {
                    await sendAlert({
                        to: alert.email,
                        subject: `${alert.symbol} ha alcanzado el precio objetivo`,
                        text: `El activo ${alert.symbol} alcanzó tu objetivo de ${alert.targetPrice}. Precio actual: ${currentPrice}` 
                    })
                    alert.triggered = true
                    await alert.save()
                    console.log(`Alerta activada para ${alert.symbol}`)
                }
            }
        } catch (error) {
            console.error('Error en job de monitoreo:', error)
        }
    })
    console.log('Monitor de precios activado')
}