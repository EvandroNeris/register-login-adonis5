import { InputCreateUserRepositoryDTO } from './create-user.repository.dto'

export interface CreateUserRepositoryContract {
  create(params: InputCreateUserRepositoryDTO): Promise<void>
}