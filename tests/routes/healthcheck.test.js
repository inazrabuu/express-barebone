const request = require('supertest'),
      app = require('../../app')

describe('GET /api/healthz', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/api/healthz')
    
    expect(res.statusCode).toBe(200)
    expect(res.body.body.status).toBe('✅ OK')
  })
})