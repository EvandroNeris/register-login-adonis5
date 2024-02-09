import { SendEmailContract } from 'App/Domain/service/email/send-email.service.contract'
import Mail from '@ioc:Adonis/Addons/Mail'

export class SendEmail implements SendEmailContract {
  public async send(email: string, name: string): Promise<void> {
    await Mail.sendLater((message) => {
      message
        .from(process.env.FROM_EMAIL || 'suport@company.com', 'Company')
        .to(email)
        .subject('Welcome to Example')
        .htmlView('emails/welcome', { name })
    })
  }
}