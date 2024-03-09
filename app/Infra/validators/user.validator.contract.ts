export type UserSchema = {
  name: string
  email: string
  phone: string
  password: string
}

export interface UserValidatorContract {
  validate(): Promise<UserSchema>
}
