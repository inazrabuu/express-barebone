module.exports = {
  testEnvironment: "node",
  testMatch: ['**/tests/**/*.test.js'],
  forceExit: true,
  verbose: true,
  collectCoverageFrom: [
    'routes/**/*.js',
    'controllers/**/*.js',
    'middleware/**/*.js',
    'utils/**/*.js',
    'app.js'
  ],
}