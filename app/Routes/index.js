'use strict';

require('./auth.route');
require('./users.route');
require('./profile.route');

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => {
  return {
    name: 'API para o aplicativo do Studyneo',
    version: '0.0.1',
  };
});

module.exports = Route;
