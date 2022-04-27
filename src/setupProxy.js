const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://'+process.env.CORE_SERVICE_HOST+':8000',
            changeOrigin: true,
        })
    );
};
