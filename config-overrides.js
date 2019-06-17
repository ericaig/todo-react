var path = require("path");
module.exports = (config, env) => {
    config.module.rules.push({
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components/'),
                Views: path.resolve(__dirname, 'src/views/'),
                Images: path.resolve(__dirname, 'src/images/'),
                Styles: path.resolve(__dirname, 'src/styles/')
            }
        }
    });

    return config;
};