import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { AuthController } from '../controllers/auth.controller'

export default class MakeAuthController {
  async auth(ctx: HttpContextContract) {
    await AuthController.auth(ctx)
  }
}