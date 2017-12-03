module.exports = require('./environment/' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'development') + '.js');
