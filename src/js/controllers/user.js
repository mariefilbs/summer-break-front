import $ from 'jquery';

function UserController ($scope, $http, $cookies, $state, SERVER, $rootScope) {
  $scope.notifications = [];
  console.log($cookies);

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  }

  $scope.register = (user) => {
    console.log(user);
    $http.post(`${SERVER}/users`, user).then(resp => {
      var message = `Created new user: ${resp.data.username}`;
      $scope.notifications.push(message);
    }).catch(error => {
       console.log(error);
    });
  }

  $scope.login = (user) => {
    console.log(user);
    $http.post(`${SERVER}/login`, user).then(resp => {
      $rootScope.loggedIn = true;
      $cookies.put('access-token', resp.data.token);
      $state.go('/home');
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
