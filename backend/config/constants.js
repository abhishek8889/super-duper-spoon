const path = require('path');
const CONSTANTS = {
    // PORT: 8080,
    BASE_DIR: path.resolve(__dirname, '../..'),
    PUB_PATH: path.resolve(__dirname, '../../public/'),
    // API_VERSION: 'v1',
    // DB_CONNECTION_STRING: 'mongodb://localhost:27017/mydb',
    // JWT_SECRET: 'your_jwt_secret_key',
  };
  
  module.exports = CONSTANTS;