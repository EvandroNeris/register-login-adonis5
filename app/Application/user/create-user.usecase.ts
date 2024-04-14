import { CreateUserRepositoryContract } from 'App/Domain/repository/user/create-user.repository.contract'
import { CreateUserUseCaseContract } from './create-user.usecase.contract'
import { InputCreateUserUseCaseDTO } from './create-user.usecase.dto'

export class CreateUserUseCase implements CreateUserUseCaseContract {
  constructor(
    private readonly createUserRepository: CreateUserRepositoryContract
  ) {}

  async execute(params: InputCreateUserUseCaseDTO): Promise<void> {
    await this.createUserRepository.create(params)
  }
}