import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UserController } from '../controllers/user.controller'
import { CreateUserUseCase } from 'App/Application/user/create-user.usecase'
import { CreateUserLucidRepository } from '../repositories/lucid/user/create-user.repository'

export default class MakeCreateUserController {
  async create(ctx: HttpContextContract) {
    await UserController.create(
      ctx,
      new CreateUserUseCase(
        new CreateUserLucidRepository()
      )
    )
  }
}