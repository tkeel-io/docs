const { merge } = require('webpack-merge');

const configType = 'tkeel'; // tkeel, qingcloud

const baseConfig = require('./docusaurus.config.base');
const tkeelConfig = require('./docusaurus.config.tkeel');
const qingcloudConfig = require('./docusaurus.config.qingcloud');

let config = null;

if (configType === 'qingcloud') {
  config = merge({}, baseConfig, qingcloudConfig);
} else {
  config = merge({}, baseConfig, tkeelConfig);
}

module.exports = config;
