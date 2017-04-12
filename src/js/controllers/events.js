import $ from 'jquery';
import { googleTOKEN } from '../token.js';

function EventController ($scope, $http, $state, $stateParams, $rootScope, SERVER, EventService) {
  //console.log('in the event controller');
  $scope.activities = [];

  $scope.generalEvents = [];
  $scope.volunteer = [];
  $scope.camps = [];
  $scope.educational = [];
  $scope.jobs = [];
  $scope.userRsvp = [];

  $scope.attendees = [];

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
      //console.log($scope.userRsvp);

    });

    // $http.get(`${SERVER}/activities/${id}/rsvp`).then(resp => {
    //      console.log(resp.data)
    // })

    let googleMapsHTML = `
        <p class="map">
          <iframe src="https://www.google.com/maps/d/embed?mid=1fCTiwFyox-v_GHKcbrfCBFiLmQs" width="600" height="400"></iframe>
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
        //console.log(resp.data);
    }).then($state.reload());
  }




  $scope.liked = (id) => {
    $http.post(`${SERVER}/activities/${id}/likes`).then(resp => {
      //console.log(resp.data);
    }).then($state.reload());
      // modify the event to have more likes or more rsvps or whatever


  }

  $scope.deleteEvent = (id) => {
    $http.delete(`${SERVER}/activities/${id}`).then(resp => {
      //console.log(resp.data);
    }).then($state.reload());
  }


  $scope.deactivate = () => {
    $state.go('root.home');
  };
}
EventController.$inject = ['$scope', '$http', '$state', '$stateParams', '$rootScope', 'SERVER', 'EventService'];

export default EventController;
