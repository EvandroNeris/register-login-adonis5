import { CreateUserUseCaseContract } from 'App/Application/user/create-user.usecase.contract'
import { UserValidatorContract } from '../validators/user.validator.contract'

export class UserController {
  static async create(
    { response },
    createUserUseCase: CreateUserUseCaseContract,
    userValidator: UserValidatorContract
  ) {
    const payload = await userValidator.validate()

    await createUserUseCase.execute(payload)

    return response.status(201).json({ message: 'User created' })
  }
}