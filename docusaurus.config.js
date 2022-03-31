const { merge } = require('webpack-merge');

const baseConfig = require('./docusaurus.config.base');
const tkeelConfig = require('./docusaurus.config.tkeel');
const qingcloudConfig = require('./docusaurus.config.qingcloud');

const configType = 'tkeel'; // tkeel, qingcloud

let config = null;

if (configType === 'qingcloud') {
  config = merge({}, baseConfig, qingcloudConfig);
} else {
  config = merge({}, baseConfig, tkeelConfig);
}

module.exports = config;
