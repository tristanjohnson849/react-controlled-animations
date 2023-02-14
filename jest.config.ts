
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.(j|t)sx?$': 'esbuild-jest',
  },
  testEnvironment: "jsdom",
  silent: false,
  setupFilesAfterEnv: ['./jestSetup.ts'],
};
export default config;
