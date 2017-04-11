import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-scroll';

import Config from './config';
import SERVER from './server'
import setup from './setup';


import UserController from './controllers/user';
import LayoutController from './controllers/layout';
import EventController from './controllers/events';
import SelectEventController from './controllers/selectevent';
import PendingEventsController from './controllers/pendingevents';
import FBController from './controllers/fb';
import EventService from './services/event';

angular
  .module('app', ['ui.router', 'ngCookies', 'duScroll'])
  .config(Config)
  .run(setup)
  .constant('SERVER', SERVER)
  .service('EventService', EventService)
  .controller('UserController', UserController)
  .controller('LayoutController', LayoutController)
  .controller('EventController', EventController)
  .controller('SelectEventController', SelectEventController)
  .controller('PendingEventsController', PendingEventsController)
  .controller('FBController', FBController)
  .value('duScrollOffset', 125);
