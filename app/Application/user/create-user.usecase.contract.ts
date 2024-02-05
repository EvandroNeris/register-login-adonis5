import { InputCreateUserUseCaseDTO } from './create-user.usecase.dto'

export interface CreateUserUseCaseContract {
  execute(params: InputCreateUserUseCaseDTO): Promise<void>
}