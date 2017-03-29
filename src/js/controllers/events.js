function EventController ($scope, $http, $cookies, $state, SERVER, $rootScope) {

  $scope.deactivate = () => {
    $state.go('root.home');
  };
}

export default EventController;
