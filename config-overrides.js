/**
 * Created by ZZQ on 2019/4/4 14:37
 * Develop by ZZQ on 2019/4/4 14:37
 */
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
