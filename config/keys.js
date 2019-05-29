if (process.env.NODE_ENV === 'production') {
    // we are in production environment
    module.exports = require('./prod.js');
}
else {
    // we are in development environment
    module.exports = require('./dev.js');
}