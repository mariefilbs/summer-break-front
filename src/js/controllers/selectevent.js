function SelectEventController ($scope, $http, $state, $stateParams, SERVER) {
  $scope.comments = [];

  function init () {
    var id = $stateParams.id;
    $http.get(`${SERVER}/activities/${id}`).then(resp => {
      $scope.event = resp.data;
      $scope.comments = resp.data.Comments;
    });
  }

  init();

  $scope.addComment = function (data) {
    var id = $stateParams.id;
    var comment = { description : data.description };
    $http.post(`${SERVER}/activities/${id}/comments`, comment).then(resp => {
      $scope.liveComment = resp.data;
    }).then($state.reload());
  }
  $scope.deactivate = function () {
    $state.go('root.events');
  };

}

SelectEventController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default SelectEventController;
