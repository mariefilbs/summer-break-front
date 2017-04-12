function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.tpl.html',
    controller: 'LayoutController'
  })
  // .state('transparent', {
  //   abstract: true,
  //   templateUrl: 'templates/transparent.tpl.html',
  //   controller: 'LayoutController'
  // })
   .state('root.home', {
     url: '/home',
     templateUrl: 'templates/landing-page.tpl.html',
     controller: 'LayoutController'
   })
    .state('root.login', {
      url: '/users',
      templateUrl: 'templates/login.tpl.html',
      controller: 'UserController'
    })
    .state('root.fb', {
      url: '/fb/:token',
      controller: 'FBController',
      template: '<h1>Login Successful</h1>'
    })
    .state('root.about', {
      url: '/about',
      templateUrl: 'templates/aboutus.tpl.html',
      controller: 'LayoutController'
    })
    .state('root.terms', {
      url:'/terms',
      templateUrl: 'templates/terms.tpl.html',
      controller: 'LayoutController'
    })
    .state('root.addevent', {
      url: '/addevent',
      templateUrl: 'templates/addevent.tpl.html',
      controller: 'EventController'
    })
    .state('root.events', {
      url: '/events',
      templateUrl: 'templates/events.tpl.html',
      controller: 'EventController'
    })
    .state('root.events.select-event', {
      url: '/:id', // #!/home/photos/:id
      templateUrl: 'templates/select-event.tpl.html',
      controller: 'SelectEventController'
    })
    .state('pending-tank', {
      url: '/pending',
      templateUrl: 'templates/pendingevents.tpl.html',
      controller: 'PendingEventsController'
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
