function Config ($stateProvider, $urlRouterProvider) {

  $stateProvider
   .state('home', {
     url: '/home',
     //templateUrl: '',
     //controller: 'LayoutController'
   })
    // .state('login', {
    //     url: '/users',
    //     templateURL: 'templates/login.tpl.html',
    //     controller: 'UserController'
    // })
    .state('page-not-found', {
      url: '/not-found',
      template: `<h2>So sorry! Unable to find that URL.</h2>`
    })

  $urlRouterProvider.when('', '/home');
  $urlRouterProvider.otherwise('/not-found');
}

Config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default Config
