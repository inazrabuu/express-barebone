const request = require('supertest'),
      app = require('../../app'),
      baseUrl = '/api/users/'

const userIdUrl = `${baseUrl}:id`
describe(`GET ${userIdUrl}`, () => {
  it('should return 404 if user not found', async () => {
    let id = 234
    const res = await request(app).get(`${baseUrl}${id}`)
    console.log(res)

    expect(res.statusCode).toBe(404)
    expect(res.body.error.message).toBe('User Not Found!')
  })

  it('should return 200 if user not found', async () => {
    let id = 123
    const res = await request(app).get(`${baseUrl}${id}`)
    console.log(res)

    expect(res.statusCode).toBe(200)
    expect(res.body.body.id).toBe(id.toString())
  })
})