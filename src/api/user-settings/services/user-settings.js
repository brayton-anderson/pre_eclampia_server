'use strict';

/**
 * user-settings service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-settings.user-settings');
