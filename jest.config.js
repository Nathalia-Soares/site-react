module.exports = {
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/__tests__/**/*.test.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  }
};