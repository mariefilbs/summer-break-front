function FBController ($cookies, $state, $stateParams, $http) {

  let fbtoken = $stateParams.token;
  $cookies.put('access-token', fbtoken);
  $http.defaults.headers.common['access-token'] = fbtoken;

  $state.go('root.home');
}

FBController.$inject = ['$cookies', '$state', '$stateParams', '$http'];

export default FBController;


//take .token and store in cookies
//state.go to home
