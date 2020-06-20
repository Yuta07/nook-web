type ProcessEnv = {
  [key: string]: string | undefined;
};

// Base URL
let config: ProcessEnv = {
  baseURL: '',
};

switch (process.env.NODE_ENV) {
  // For Production
  case 'production':
    config = {
      baseURL: '',
    };
    break;
  // For Development
  case 'development':
    config = {
      baseURL: 'http://localhost:3000/api/v1',
    };
    break;
  default:
    break;
}

export default config;
