import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Konfigurasi transporter (contoh pakai Gmail)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // email kamu
        pass: process.env.EMAIL_PASSWORD // App Password Gmail
      }
    });

    // Email untuk kamu (menerima pesan dari visitor)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'aqeelfathurrahman@gmail.com', // email kamu
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Message from Portfolio</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}

