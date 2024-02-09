import type { EventsList } from '@ioc:Adonis/Core/Event'
import { SendEmail } from 'App/Infra/services/email/send-email.service'

export default class User {
  public async sendWelcomeEmail(user: EventsList['new:user']) {
    const mailService = new SendEmail()

    await mailService.send(user.email, user.name)
  }
}
