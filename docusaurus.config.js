const _ = require('lodash');

const configType = 'tkeel';

const baseConfig = require('./docusaurus.config.base');
const tkeelConfig = require('./docusaurus.config.tkeel');
const qingcloudConfig = require('./docusaurus.config.qingcloud');

let config = null;

if (configType === 'qingcloud') {
  config = _.merge({}, baseConfig, qingcloudConfig);
} else {
  config = _.merge({}, baseConfig, tkeelConfig);
}

module.exports = config;
