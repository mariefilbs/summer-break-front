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
    let id = $stateParams.id;
    $http.put(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
    $scope.isActivity = true;
  })
}


  $scope.updateEvent = (id) => {
    $http.put(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
    })
  }

  $scope.enableEditor = (pending) => {
    pending.editing = true;
  };

  $scope.disableEditor = function (pending) {
    pending.editing = false;
  };

  $scope.save = function() {
    $scope.disableEditor();
  };

  $scope.deleteEvent = (id) => {
    $http.delete(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
    })
  }
}


PendingEventsController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default PendingEventsController;
