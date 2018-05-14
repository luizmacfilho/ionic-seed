var chalk = require("chalk");
var fs = require('fs');
var path = require('path');
var useDefaultConfig = require('@ionic/app-scripts/config/webpack.config.js');

var env = process.env.IONIC_ENV;

if (env !== 'prod' && env !== 'dev') {
    // Default to dev config
    useDefaultConfig[env] = useDefaultConfig.dev;
}

useDefaultConfig[env].resolve.alias = {
    "@actions": path.resolve('./src/actions/'),
    "@app": path.resolve('./src/app/'),
    "@assets": path.resolve('./src/assets/'),
    "@effects": path.resolve('./src/effects/'),
    "@env": path.resolve(environmentPath(env)),
    "@models": path.resolve('./src/models/'),
    "@pages": path.resolve('./src/pages/'),
    "@reducers": path.resolve('./src/reducers/'),
};

function environmentPath(env) {
    var filePath = './src/environments/environment' + (env === 'prod' ? '' : '.' + env) + '.ts';
    if (!fs.existsSync(filePath)) {
        console.log(chalk.red('\n' + filePath + ' does not exist!'));
    } else {
        return filePath;
    }
}

module.exports = function () {
    return useDefaultConfig;
};