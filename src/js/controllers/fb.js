function FBController ($cookies, $state, $stateParams, $http) {

  let fbtoken = $stateParams.token;
  $cookies.put('access-token', fbtoken);
  $http.defaults.headers.common['access-token'] = fbtoken;
  console.log(fbtoken);

  $http.get('/me').then(resp => {
    console.log(resp.data);
    let myObject = {
      firstName: resp.data.name,
      email: resp.data.email
    };
    $cookies.putObject('userInfo', myObject);
    $state.go('root.home');
  });


}

FBController.$inject = ['$cookies', '$state', '$stateParams', '$http'];

export default FBController;
