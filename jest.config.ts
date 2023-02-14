
import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
<<<<<<< HEAD
  testEnvironment: "jsdom"
=======
>>>>>>> 9a1e3ae (New config and test utils)
};
export default config;
