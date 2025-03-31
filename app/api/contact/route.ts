import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

async function verifyCaptcha(token: string) {
    try {
        if (!process.env.RECAPTCHA_SECRET_KEY) {
            console.error('RECAPTCHA_SECRET_KEY is not set')
            return false
        }

        const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
        });

        const data = await response.json();

        if (!data.success) {
            console.error('CAPTCHA verification failed:', data['error-codes'])
            return false
        }

        return true
    } catch (error) {
        console.error('Error verifying CAPTCHA:', error);
        return false;
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, company, subject, message, captchaToken } = body;

        // Validate required fields
        if (!name || !email || !subject || !message || !captchaToken) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Verify CAPTCHA
        const isValidCaptcha = await verifyCaptcha(captchaToken);
        if (!isValidCaptcha) {
            return NextResponse.json(
                { error: 'Invalid CAPTCHA. Please try again.' },
                { status: 400 }
            );
        }

        // Email content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: 'info@tarasolutions.cloud',
            subject: `Contact Form: ${subject}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        };

        // Send email
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email' },
            { status: 500 }
        );
    }
} 