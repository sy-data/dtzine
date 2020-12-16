const serverless = require('serverless-http');
const app = require('./bin/www')

module.exports.handler = serverless(app);