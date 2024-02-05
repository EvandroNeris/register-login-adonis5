import { CreateUserUseCaseContract } from 'App/Application/user/create-user.usecase.contract'

export class UserController {
  static async create(
    { request, response },
    createUserUseCase: CreateUserUseCaseContract
  ) {
    const payload = request.body()

    await createUserUseCase.execute(payload)

    return response.status(201).json({ message: 'User created' })
  }
}