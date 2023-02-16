
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  // @ts-ignore jest hasn't declared this value yet
  extensionsToTreatAsEsm: ['.ts', '.jsx'],
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.stories.*",
    "!src/**/*.test.*",
  ],
  coverageReporters: ["text", "json", "html", "lcov"],
  coverageThreshold: {
    global: {
      function: 80,
      branch: 80,
      line: 50,
      statement: 50,
    }
  }
};
export default config;
