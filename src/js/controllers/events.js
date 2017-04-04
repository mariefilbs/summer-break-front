function EventController ($scope, $http, $state, $stateParams, $rootScope, SERVER) {
  //console.log('in the event controller');
  $scope.activities = [];

  $scope.generalEvents = [];
  $scope.volunteer = [];
  $scope.camps = [];
  $scope.educational = [];
  $scope.jobs = [];
  //console.log($scope.activities);

  function init () {
    $http.get(`${SERVER}/activities`).then(resp => {
      $scope.activities = resp.data;
      console.log(resp.data);
      console.log(resp.data);

      $scope.generalEvents = $scope.activities.filter((data) => {return data.category === 'generalEvent';});
      $scope.volunteer = $scope.activities.filter((data) => {return data.category === 'volunteer';});
      $scope.camps= $scope.activities.filter((data) => {return data.category === 'camps';});
      $scope.educational = $scope.activities.filter((data) => {return data.category === 'educational';});
      $scope.jobs = $scope.activities.filter((data) => {return data.category === 'jobs';});

    });
  }

  init();


  $scope.create = function (data) {
    $http.post(`${SERVER}/activities`, data).then(resp => {
      $state.go('root.events');
    });
  };

  $scope.rsvp = function (id) {

  };



  $scope.deactivate = () => {
    $state.go('transparent.home');
  };
}
EventController.$inject = ['$scope', '$http', '$state', '$stateParams', '$rootScope', 'SERVER'];

export default EventController;
