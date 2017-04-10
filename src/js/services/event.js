function EventService ($http, SERVER) {

  let vm = this;
  vm.updateEvent = updateEvent;

  function updateEvent (event) {
    return $http.put(`${SERVER}/activities/${event.id}`, event);
  }

}

EventService.$inject = ['$http', 'SERVER'];

export default EventService;
