function EventController ($scope, $http, $state, SERVER, $rootScope) {
  $scope.activities = [];

  function init () {
    $http.get(`${SERVER}/activities`).then(resp => {
      $scope.activities = resp.data;
      console.log(resp.data);
    });
  }

  init();

  $scope.create = function (data) {
    $http.post(`${SERVER}/activities`, data).then(resp => {
      $state.go('root.events');
    });
  };

  $scope.deactivate = () => {
    $state.go('transparent.home');
  };
}
EventController.$inject = ['$scope', '$http', '$state', 'SERVER'];

export default EventController;
