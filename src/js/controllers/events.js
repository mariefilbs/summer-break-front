function EventController ($scope, $http, $cookies, $state, SERVER, $rootScope) {

  $scope.deactivate = () => {
    $state.go('transparent.home');
  };
}

export default EventController;
