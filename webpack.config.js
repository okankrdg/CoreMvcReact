const path = require('path');
module.exports = {
    mode: 'development',
    entry:
    {
        msgApp: './coremvcreact.web/wwwroot/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, './CoreMvcReact.Web/wwwroot/webpack'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react','@babel/preset-env']
                    }
                }
            }
        ]
    }
};