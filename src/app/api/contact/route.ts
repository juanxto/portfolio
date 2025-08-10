import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Todos os campos são obrigatórios." }), { status: 400 });
    }

    // Configura o transporte de e-mail
    const transporter = nodemailer.createTransport({
      service: "gmail", // pode trocar por outro serviço
      auth: {
        user: process.env.EMAIL_USER, // seu e-mail
        pass: process.env.EMAIL_PASS, // senha de app (não a senha normal)
      },
    });

    // Envia o e-mail
    await transporter.sendMail({
      from: `"Portfólio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // envia para você mesmo
      replyTo: email,
      subject: `Novo contato: ${name}`,
      text: message,
      html: `
        <h3>Novo contato recebido</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Erro ao enviar e-mail:", err);
    return new Response(JSON.stringify({ error: "Erro ao enviar mensagem." }), { status: 500 });
  }
}
