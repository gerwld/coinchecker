const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://'+process.env.CORE_HOST+':8000',
            changeOrigin: true,
        })
    );
};

// module.exports = function(app) {
//     app.use(proxy('/api',
//         {
//             target: 'http://localhost:8000/api',
//             changeOrigin: true,
//         }
//     ));
// };