function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('root', {
    abstract: true,
    templateUrl: 'templates/root.tpl.html',
    controller: 'LayoutController'
  })
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
    .state('page-not-found', {
      url: '/not-found',
      template: `<h2>So sorry! Unable to find that URL.</h2>`
    })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config
