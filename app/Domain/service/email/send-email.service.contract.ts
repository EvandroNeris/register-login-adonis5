export interface SendEmailContract {
  send(email: string, name: string): Promise<void>
}