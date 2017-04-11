function FBController ($cookies, $state, $stateParams, $http, $rootScope) {

  let fbtoken = $stateParams.token;
  $cookies.put('access-token', fbtoken);
  $http.defaults.headers.common['access-token'] = fbtoken;
  console.log(fbtoken);

  $http.get('/me').then(resp => {
    console.log(resp.data);
    let myObject = {
      firstName: resp.data.name,
      email: resp.data.email,
      isAdmin: resp.data.isAdmin
    };
    $cookies.putObject('userInfo', myObject);
    $rootScope.userInfo = myObject;
    $state.go('root.home');
  });


}

FBController.$inject = ['$cookies', '$state', '$stateParams', '$http', '$rootScope'];

export default FBController;
