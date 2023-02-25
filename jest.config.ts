
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        useESM: true,
      },
    ],
  },
  moduleNameMapper: {
    "(.+)\\.js": "$1"
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'],
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.*",
    "!src/**/*.test.*",
  ],
  setupFilesAfterEnv: ['./jestSetup.ts'],
  testMatch: ["<rootDir>/src/**/*.test.ts(x)?"],
  coverageReporters: ["text", "json", "html", "lcov"],
  coverageThreshold: {
    global: {
      functions: 80,
      branches: 80,
      lines: 50,
      statements: 50,
    }
  }
};
export default config;
