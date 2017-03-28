function LayoutController ($scope, $rootScope, $state, $cookies, $http) {

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('root.home');
  };


}

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$cookies', '$http'];

export default LayoutController;
