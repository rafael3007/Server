import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../adapters/mail-adapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6b0792d3c89094",
      pass: "69c15b509f89ed"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com> ',
            to: 'rafael Brito <Rafael.brito.1422@gmail.com>',
            subject,
            html:body,
        })
    }
}