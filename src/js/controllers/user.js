import $ from 'jquery';

function UserController ($scope, $http, $cookies, $state, SERVER, $rootScope) {
  console.log($cookies);

  $scope.register = (user) => {
    console.log(user);
    $http.post(`${SERVER}/users`, user).then(resp => {
      $state.go('root.login');
    }).catch(error => {
       console.log(error);
    });
  }

  $scope.login = (user) => {
    console.log(user);
    $http.post(`${SERVER}/login`, user).then(resp => {
      $rootScope.loggedIn = true;
      $cookies.put('access-token', resp.data.token);
      $state.go('root.home');
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

UserController.$inject = ['$scope', '$http', '$cookies', '$state', 'SERVER', '$rootScope'];

export default UserController;
