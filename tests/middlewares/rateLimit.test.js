const { advancedLimiter } = require('../../middlewares/rateLimit.middleware'),
      httpMock = require('node-mocks-http')

test('rate limiter allows request', async () => {
  const req = httpMock.createRequest(),
        res = httpMock.createResponse(),
        next = jest.fn()

  await advancedLimiter(req, res, next)
  expect(next).toHaveBeenCalled()
})

