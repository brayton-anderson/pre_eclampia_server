'use strict';

/**
 * health-data router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::health-data.health-data');
