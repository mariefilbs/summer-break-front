import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import Config from './config';
import SERVER from './server'
import setup from './setup';

import UserController from './controllers/user';
import LayoutController from './controllers/layout';
import EventController from './controllers/events';

angular
  .module('app', ['ui.router', 'ngCookies'])
  .config(Config)
  .run(setup)
  .constant('SERVER', SERVER)
  .controller('UserController', UserController)
  .controller('LayoutController', LayoutController)
  .controller('EventController', EventController);
