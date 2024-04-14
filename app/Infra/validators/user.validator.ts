import { UserValidatorContract } from './user.validator.contract'

export default class UserValidator implements UserValidatorContract {
  constructor(
    private schema,
    private request,
    private rules
  ) {}

  async validate() {
    const schema = this.schema.create({
      name: this.schema.string(),
      email: this.schema.string({}, [
        this.rules.email(),
        this.rules.unique({ table: 'users', column: 'email' })
      ]),
      phone: this.schema.string({}, [
        this.rules.regex(/^[0-9]{11}$/)
      ]),
      password: this.schema.string({}, [
        this.rules.minLength(6)
      ])
    })

    return await this.request.validate({
      schema,
      messages: {
        required: 'The {{ field }} is required to create a user',
        'email.unique': 'The email is already in use',
        email: 'The email is invalid'
      }
    })
  }
}