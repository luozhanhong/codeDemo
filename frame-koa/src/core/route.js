const fs = require('../utils/filesystem');
const route = require('koa-router');

module.exports = (ctx, next) => {

  return route.routes();
}
