module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleNameMapper: {
    '^(\\.{1,2}/.*?)\\.[jt]s$': '$1'
    }
  };