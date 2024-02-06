export class AuthController {
  static async auth(
    { auth, request, response },
  ) {
    const { email, password } = request.body()

    if (!email || !password) {
      return response.status(400).json({
        message: 'Email and password are required'
      })
    }

    const result = await auth.use('api').attempt(email, password)

    return response.status(200).json({
      body: {
        token: result.token
      },
      message: 'User authenticated'
    })
  }
}