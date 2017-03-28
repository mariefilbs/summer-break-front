import $ from 'jquery';

function UserController ($scope, $http, $state, SERVER) {
  $scope.notifications = [];

  $scope.removeMsg = (msg) => {
    var removed = $scope.notifications.filter(x => x != msg);
    $scope.notifications = removed;
  }

  $scope.register = (user) => {
    $http.post(`${SERVER}/register`, user).then(resp => {
      var message = `Created new user: ${resp.data.username}`;
      $scope.notifications.push(message);
    }).catch(error => {
       console.log(error);
    });
  }

  $scope.login = (user) => {
    $http.post(`${SERVER}/login`, user).then(resp => {
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

UserController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default UserController;
