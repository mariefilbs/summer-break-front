
function LayoutController ($scope, $rootScope, $state, $cookies, $http) {
  $rootScope.welcome = '';


  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $cookies.remove('userInfo');
    $http.defaults.headers.common['access-token'] = null;


    $state.go('transparent.home');
  };

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$cookies', '$http'];

export default LayoutController;
