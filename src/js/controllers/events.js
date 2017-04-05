function EventController ($scope, $http, $state, $stateParams, $rootScope, SERVER) {
  console.log('in the event controller');
  $scope.activities = [];

  $scope.generalEvents = [];
  $scope.volunteer = [];
  $scope.camps = [];
  $scope.educational = [];
  $scope.jobs = [];
  $scope.userRsvp = [];
  //console.log($scope.activities);

  function init () {
    $http.get(`${SERVER}/activities`).then(resp => {
      $scope.activities = resp.data;
      console.log(resp.data);

      $scope.generalEvents = $scope.activities.filter((data) => {return data.category === 'generalEvent';});
      $scope.volunteer = $scope.activities.filter((data) => {return data.category === 'volunteer';});
      $scope.camps= $scope.activities.filter((data) => {return data.category === 'camps';});
      $scope.educational = $scope.activities.filter((data) => {return data.category === 'educational';});
      $scope.jobs = $scope.activities.filter((data) => {return data.category === 'jobs';});



    let id = $rootScope.userInfo.id;
    //console.log($rootScope.userInfo);
    $http.get(`${SERVER}/users/${id}/events`).then(resp => {
      $scope.userRsvp = resp.data;
      //console.log($scope.userRsvp);
      //$scope.isAttending = $scope.userEvents.filter((data) => {return resp.data.Activities;});
      //console.log($scope.isAttending);
    });
  })
}

  init();


  $scope.create = function (data) {
    $http.post(`${SERVER}/activities`, data).then(resp => {
      $state.go('root.events');
    });
  };

  $scope.rsvp = (id) => {
    //let id = $stateParams.id;
    $http.post(`${SERVER}/activities/${id}/rsvp`).then(resp => {
        //console.log(resp.data);
      // $rootScope.varAttending = $scope.clickAttending.filter((activities)=> {return activities.attending = true;});
    })
  }

  $scope.liked = (id) => {
    $http.post(`${SERVER}/activities/${id}/likes`).then(resp => {
      console.log(resp.data);
    })
  }


  $scope.deactivate = () => {
    $state.go('transparent.home');
  };
}
EventController.$inject = ['$scope', '$http', '$state', '$stateParams', '$rootScope', 'SERVER'];

export default EventController;
