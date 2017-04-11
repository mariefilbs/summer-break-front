function PendingEventsController ($scope, $http, $state, $rootScope, $stateParams, SERVER, EventService) {
  $scope.pendingEvents = [];


  function init () {
    // EventService.fetchPending().then(resp => { $scope.pendingEvents = resp.data })
    $http.get(`${SERVER}/activities/all/pending`).then(resp => {
      $scope.pendingEvents = resp.data;
      console.log(resp.data.length);
      $rootScope.numberOfPending = resp.data.length;

    })
  }
  init();

  $scope.approve = (id) => {
    $http.put(`${SERVER}/activities/${id}`, { isActivity: true }).then(resp => {
      $scope.isActivity = true;
    })

  }


  $scope.enableEditor = (pending) => {
    pending.isEditing = true;
  };

  $scope.disableEditor = function (pending) {
    pending.isEditing = false;
  };

  $scope.save = function(pending) {
    pending.isEditing = false;
    EventService.updateEvent(pending).then(
      function successCallback(res){
        console.log('success!');
      },
      function errorCallback(res){
        console.log('error');
      }
    );
  };

  $scope.deleteEvent = (id) => {
    $http.delete(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
      $state.reload();
    })
  }
}


PendingEventsController.$inject = ['$scope', '$http', '$state', '$rootScope', '$stateParams', 'SERVER', 'EventService'];

export default PendingEventsController;
