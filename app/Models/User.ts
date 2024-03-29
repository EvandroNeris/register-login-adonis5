import { DateTime } from 'luxon'
import { BaseModel, afterSave, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
import Hash from '@ioc:Adonis/Core/Hash'
import { uuid } from 'uuidv4'
import Event from '@ioc:Adonis/Core/Event'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public phone: string

  @column()
  public password: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    user.id = uuid()
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @afterSave() 
  public static async afterSaveHook (user: User) {
    Event.emit('new:user', {
      email: user.email,
      name: user.name
    })
  }
}
