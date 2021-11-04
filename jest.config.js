module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  moduleNameMapper: {
    /* Handle CSS imports (with CSS modules)
    https://jestjs.io/docs/webpack#mocking-css-modules */
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // Handle CSS imports (without CSS modules)
    '^.+\\.(css|sass|scss)$': '<rootDir>/src/__mocks__/styleMock.js',

    /* Handle image imports
    https://jestjs.io/docs/webpack#handling-static-assets */
    '^.+\\.(jpg|jpeg|png|gif|webp|avif|svg)$':
      '<rootDir>/src/__mocks__/fileMock.js',

    /* Handle typescript custom absolute imports */
    '@/react-testing-library': '<rootDir>/src/utils/test-utils.tsx',
    '@/components/(.*)': '<rootDir>/src/components/$1',
    '@/pages/(.*)': '<rootDir>/src/pages/$1',
    '@/hooks/(.*)': '<rootDir>/src/hooks/$1',
    '@/database': '<rootDir>/src/utils/db-utils.ts',
    '@/models/(.*)': '<rootDir>/src/models/$1',
    '@/redux-store': '<rootDir>/src/redux/store',
    '@/redux-types': '<rootDir>/src/redux/types',
    '@/redux-types/(.*)': '<rootDir>/src/redux/types/$1',
    '@/redux-action-creators': '<rootDir>/src/redux/action-creators'
  },
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
