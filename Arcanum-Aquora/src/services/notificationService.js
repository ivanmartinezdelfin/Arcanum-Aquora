import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

export const sendAlert = async ({ to, subject, text }) => {
    await transporter.sendEmail({
        from: `"Arcanum Aquora" <${process.env.EMAIL_USER}>`,
        to, subject, text
    })
}