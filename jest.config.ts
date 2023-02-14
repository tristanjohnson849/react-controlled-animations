
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testEnvironment: "jsdom",
  silent: false,
  setupFilesAfterEnv: ['./jestSetup.ts'],
  testMatch: ["<rootDir>/src/**/*.test.ts(x)?"]
};
export default config;
