const { merge } = require('webpack-merge');

const baseConfig = require('./docusaurus.config.base');
const tkeelConfig = require('./docusaurus.config.tkeel');

const config = merge({}, baseConfig, tkeelConfig);

module.exports = config;
