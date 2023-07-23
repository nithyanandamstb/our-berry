'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('our-berry')
      .service('myService')
      .getWelcomeMessage();
  },
});
