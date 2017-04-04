function setup ($rootScope, $cookies, $http, SERVER) {


  var token = $cookies.get('access-token');
  if (token) {
    $rootScope.loggedIn = true;
    $http.defaults.headers.common['access-token'] = token;

    $rootScope.userInfo = $cookies.getObject('userInfo');
  
  }
}

setup.$inject = ['$rootScope', '$cookies', '$http', 'SERVER'];

export default setup;
