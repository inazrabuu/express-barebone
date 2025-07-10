const userService = require('../../services/user.service')
jest.mock('../../config/prisma', () => ({
  user: {
    findUnique: jest.fn()
  }
}))

describe('getByEmail', () => {
  it('returns user if found', async () => {
    const mockUser = {
      id: 1,
      email: 'admin@mail.com'
    }
    require('../../config/prisma').user.findUnique.mockResolvedValue(mockUser)

    const result = await userService.getByEmail('admin@mail.com')
    expect(result).toEqual(mockUser)
  })
})