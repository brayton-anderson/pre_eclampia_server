'use strict';

/**
 * health-data service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::health-data.health-data');
