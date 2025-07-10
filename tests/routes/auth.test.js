const request = require('supertest'),
      app = require('../../app'),
      baseUrl = '/api/auth/'

const loginUrl = `${baseUrl}login`
describe(`POST ${loginUrl}`, () => {
  it('should return 401 with wrong credentials', async () => {
    const res = await request(app).post(`${loginUrl}`).send({
      email: 'admin@example.com',
      password: 'password'
    })

    expect(res.statusCode).toBe(401)
    expect(res.body.error.message).toBe('Invalid email / password')
  })

  it('should return 200 with correct credentials', async () => {
    const res = await request(app).post(`${loginUrl}`).send({
      email: 'admin@mail.com',
      password: 'password123'
    })

    expect(res.statusCode).toBe(200)
    expect(res.body.body).toHaveProperty('token')
  })
})

const refreshTokenUrl = `${baseUrl}refresh_token`
describe(`GET ${refreshTokenUrl}`, () => {
  it('should return 401 without header token', async () => {
    const res = await request(app).get(`${refreshTokenUrl}`)

    expect(res.statusCode).toBe(401)
    expect(res.body.error.message).toBe('Not Authenticated')
  })

  it('should return 401 with header token but without refresh_token cookie', async () => {
    const resLogin = await request(app).post(`${loginUrl}`).send({
      email: 'admin@mail.com',
      password: 'password123' 
    })

    let token = resLogin.body.body.token

    const res = await request(app).get(`${refreshTokenUrl}`).set('Authorization', `Bearer ${token}`)
    expect(res.statusCode).toBe(401)
    expect(res.body.error.message).toBe('Token not found')
  })
})