/**
 * Created by @qyyw/plugin-node-create@1.0.7 on 2018/11/29 03:25
 */
module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    window: true,
    document: true,
    localStorage: true,
    sessionStorage: true,
  },
};
