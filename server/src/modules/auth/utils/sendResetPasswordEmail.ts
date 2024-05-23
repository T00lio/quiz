import nodemailer from "nodemailer";

async function sendResetPasswordEmail(email: string, resetLink: string) {
  // Configura el transporte de nodemailer con tu proveedor de correo electrónico
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Puedes usar otros servicios como 'SendGrid', 'Mailgun', etc.
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Tu app password
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "My Quiz App - Password Reset Request",
    html: `
      <p>You requested a password reset. Click the link below to reset your password:</p>
      <a href="${resetLink}">Reset Password</a>
      <p>If you did not request this, please ignore this email.</p>
    `,
  };

  // Enviar el correo electrónico
  await transporter.sendMail(mailOptions);
}

export default sendResetPasswordEmail;
