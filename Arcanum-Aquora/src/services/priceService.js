import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

export const fetchPrice = async (symbol) => {
    const url = `https://www.alphavantage.com/query`
    const params = {
        function: 'GLOBAL_QUOTE',
        symbol,
        apikey: process.env.ALPHA_VANTAGE_KEY
    }
    const { data } = await axios.get(url, { params })
    const price = parseFloat(data['Global Quote']['05.price'])
    return price
}