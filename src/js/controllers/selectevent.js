function SelectEventController ($scope, $http, $state, $stateParams, SERVER) {
   console.log('In select event controller.');
  $scope.comments = [];

  function init () {
    var id = $stateParams.id;
    $http.get(`${SERVER}/activities/${id}`).then(resp => {
      console.log(resp.data);
      $scope.event = resp.data;
      $scope.comments = resp.data.Comments;


      console.log($scope.comments);
    });
  }

  init();

  $scope.addComment = function (data) {
    var id = $stateParams.id;
    var comment = {comment: data};
    $http.post(`${SERVER}/activities/${id}/comment`, comment).then(resp => {
      $scope.comment = resp.data;
      $scope.liveComment = resp.data;
    }).then($state.reload());
  }
  $scope.deactivate = function () {
    $state.go('root.events');
  };

}

SelectEventController.$inject = ['$scope', '$http', '$state', '$stateParams', 'SERVER'];

export default SelectEventController;
