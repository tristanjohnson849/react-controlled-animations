
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  silent: false,
  setupFilesAfterEnv: ['./jestSetup.ts']
};
export default config;
