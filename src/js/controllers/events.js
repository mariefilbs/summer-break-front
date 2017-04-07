import $ from 'jquery';
import { googleTOKEN } from '../token.js';

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
    $http.get(`${SERVER}/activities/all/live`).then(resp => {
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
      console.log($scope.userRsvp);

    });



    let googleMapsHTML = `
        <p class="map">
          <iframe
            width="520"
            height="373"
            frameborder="0" style="border:0"
            src="https://www.google.com/maps/embed/v1/search?key=${googleTOKEN}&q={{Escape+The+Room,Atlanta+Georgia}}">
          </iframe>
        </p>
    `;

    $('#location').append(googleMapsHTML);

  })
}

  init();

  $scope.attendingStatus = (activity_id) => {
    return $scope.userRsvp.filter((data) => {
      let attending = activity_id == data.Activity.id && data.attending;
      return attending;
    }).length;
  }

  $scope.create = (data) => {
    $http.post(`${SERVER}/activities`, data).then(resp => {
      $state.go('root.events');
    });
  };

  $rootScope.rsvp = (id) => {
    //let id = $stateParams.id;
    $http.post(`${SERVER}/activities/${id}/rsvp`).then(resp => {
        console.log(resp.data);
    }).then($state.reload());
  }


  $scope.liked = (id) => {
    $http.post(`${SERVER}/activities/${id}/likes`).then(resp => {
      console.log(resp.data);
    }).then($state.reload());
  }


  $scope.deactivate = () => {
    $state.go('transparent.home');
  };
}
EventController.$inject = ['$scope', '$http', '$state', '$stateParams', '$rootScope', 'SERVER'];

export default EventController;
