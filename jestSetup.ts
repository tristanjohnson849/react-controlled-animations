// In your own jest-setup.js (or any other name)
import '@testing-library/jest-dom'

import { mockAnimationsApi } from 'jsdom-testing-mocks';

mockAnimationsApi();