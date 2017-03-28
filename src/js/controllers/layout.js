function LayoutController ($scope, $rootScope, $state, $http) {

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    // $cookies.remove('access-token');
    // $http.defaults.headers.common['access-token'] = null;
    $state.go('root.home');
  };

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$http'];

export default LayoutController;
