function PendingEventsController ($scope, $http, $state, $stateParams, SERVER) {
  $scope.pendingEvents = [];

  function init () {
    $http.get(`${SERVER}/activities/all/pending`).then(resp => {
      $scope.pendingEvents = resp.data;
      console.log(resp.data);
    })
  }
  init();

  $scope.addEvent = (data) => {
    $http.post(`${SERVER}/activities`, data).then(resp => {
      console.log(resp.data);
      $scope.isActivity = true;
    })
  }

  $scope.editEvent = (id) => {
    $http.put(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
    })
  }

  $scope.deleteEvent = (id) => {
    $http.delete(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
    })
  }
}


PendingEventsController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default PendingEventsController;
