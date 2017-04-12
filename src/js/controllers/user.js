import $ from 'jquery';

function UserController ($scope, $http, $cookies, $state, SERVER, $stateParams, $rootScope) {
    //console.log($cookies);

  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  }

  $scope.register = (user) => {
    //console.log(user);
    $http.post(`${SERVER}/users`, user).then(resp => {
      $state.reload();
      var message = `Thanks for registering, ${resp.data.firstName}! Please login.`;
 +    $scope.notifications.push(message);
    }).catch(error => {
    console.log(error);
    });
  }

  $scope.login = (user) => {
    //console.log(user);
    $http.post(`${SERVER}/login`, user).then(resp => {
      $rootScope.loggedIn = true;
      $cookies.put('access-token', resp.data.token);
      $http.defaults.headers.common['access-token'] = resp.data.token;
      let userInfo = resp.data.user;
      console.log(userInfo);


      $cookies.putObject('userInfo', userInfo);
      $rootScope.userInfo = userInfo;
      console.log(userInfo.firstName);

      $state.go('root.home');
      // console.log($rootScope.welcome);

    }).catch(error => {
    console.log(error);
    });
  }

  $scope.deactivate = () => {
    $state.go('root.home');
  };

  $scope.switchForms = () => {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  };
}

UserController.$inject = ['$scope', '$http', '$cookies', '$state', 'SERVER', '$stateParams', '$rootScope'];

export default UserController;
