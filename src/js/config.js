function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.tpl.html',
    controller: 'LayoutController'
  })
  .state('transparent', {
    abstract: true,
    templateUrl: 'templates/transparent.tpl.html',
    controller: 'LayoutController'
  })
   .state('transparent.home', {
     url: '/home',
     templateUrl: 'templates/landing-page.tpl.html',
     controller: 'LayoutController'
   })
    .state('transparent.login', {
      url: '/users',
      templateUrl: 'templates/login.tpl.html',
      controller: 'UserController'
    })
    .state('root.home.about', {
      url: '/about',
      templateUrl: 'templates/main-content.tpl.html',
      controller: 'LayoutController'
    })
    .state('transparent.addevent', {
      url: '/addevent',
      templateUrl: 'templates/addevent.tpl.html',
      controller: 'EventController'
    })
    .state('root.events', {
      url: '/events',
      templateUrl: 'templates/events.tpl.html',
      controller: 'EventController'
    })
    .state('page-not-found', {
      url: '/not-found',
      template: `<h2>So sorry! Unable to find that URL.</h2>`
    })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config
