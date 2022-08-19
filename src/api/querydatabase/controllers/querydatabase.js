'use strict';

/**
 * A set of functions called "actions" for `querydatabase`
 */
 //const { createCoreController } = require('@strapi/strapi').factories;
  module.exports = {
  // Method 1: Creating an entirely custom action
  async index (ctx) {
    const { id } = ctx.params;
    const userhealth = await strapi.db.query('api::health-data.health-data').findMany({
      select: ['userId', 'water', 'distance', 'steps', 'babykicks', 'fatalheartrate', 'saturation', 'temprature', 'heartrate'],
      where: {userId: id},
      orderBy: {createdAt: 'DESC'},
     // limit: 1,
    });
    ctx.body = userhealth;
  },

  // Method 2: Wrapping a core action (leaves core logic in place)
  async find(ctx) {
    // some custom logic here
    ctx.query = { ...ctx.query, local: 'en' }
    
    // Calling the default core action
    const { data, meta } = await super.find(ctx);

    // some more custom logic
    meta.date = Date.now()

    return { data, meta };
  },

  // Method 3: Replacing a core action
  async findOne(ctx) {
    const { id } = ctx.params;

    const userhealth = await strapi.db.query('api::health-data.health-data').findOne({
      select: ['userId','createdAt', 'water', 'distance', 'steps', 'babykicks', 'fatalheartrate', 'saturation', 'temprature', 'heartrate'],
      where: {userId: id},
      orderBy: {createdAt: 'DESC'},
      //limit: 10,
    });

    //const entity = await strapi.service('api::querydatabase.querydatabase').findOne(id);
    //const sanitizedEntity = await this.sanitizeOutput(userhealth, ctx);
    ctx.body = userhealth;
    //return this.transformResponse(userhealth);
  }
};
