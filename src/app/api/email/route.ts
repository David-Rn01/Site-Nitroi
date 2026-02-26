import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

//Método POST para enviar email
export async function POST(request: Request) {
    try {

        console.log('Config SMTP:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
            // Não logar a senha por segurança
        });

        // DEBUG: Ver o conteúdo bruto da requisição
        const text = await request.text();

        //Tentar converter o conteúdo para JSON
        let data;
        try {
            data = JSON.parse(text);
            console.log('Dados JSON convertidos:', data);
        } catch (erro) {
            console.error('Erro ao converter para JSON:', erro);
            return NextResponse.json({
                message: 'Erro ao converter para JSON',
                status: 400
            });
        }
        
        //pegar os dados do box no front end
        const { nome, email, payload} = data;

        //Criar o transporter, responsável por encaminhar as mensagens
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "587"),
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        //Criando o modelo de email
        const mailOptions = {
            from: `Nova proposta <${process.env.SMTP_USER}>`,
            to: process.env.EMAIL_NITROI,
            subject: `Nova proposta de ${nome}`,
            html: `
                <h1>Nova proposta de ${nome}</h1>
                <br>
                <p><strong>Email:</strong> ${email}</p>
                <br>
                <p><strong>Mensagem:</strong><br>${payload}</p>
            `,
            text: `Nova proposta de ${nome}\n\nEmail: ${email}\n\nMensagem:\n${payload}`,
        };

        //Enviar o email
        await transporter.sendMail(mailOptions);

        return NextResponse.json({
            message: 'Email enviado',
            status: 200
        });

    } catch (err) {
        console.error('Erro ao enviar email:', err);
        return NextResponse.json({
            message: 'Erro ao enviar email',
            status: 500
        });
    }
}