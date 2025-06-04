import transporter from '../config/email.js';

const sendEmail = async (to, symbol, price) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to,
        subject: `Àlerta de precio: ${symbol}`,
        text: `El activo ${symbol} alcanzo el precio objetivo de ${price}`,
    });
};

export default sendEmail;