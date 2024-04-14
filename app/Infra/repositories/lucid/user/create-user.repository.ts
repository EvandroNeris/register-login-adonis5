import { CreateUserRepositoryContract } from 'App/Domain/repository/user/create-user.repository.contract'
import { InputCreateUserRepositoryDTO } from 'App/Domain/repository/user/create-user.repository.dto'
import User from 'App/Models/User'

export class CreateUserLucidRepository implements CreateUserRepositoryContract {
  async create(params: InputCreateUserRepositoryDTO): Promise<void> {
    await User.create(params)
  }
}