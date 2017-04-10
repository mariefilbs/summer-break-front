
function LayoutController ($scope, $rootScope, $state, $cookies, $http, SERVER) {
  $rootScope.welcome = '';


  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $cookies.remove('userInfo');
    $http.defaults.headers.common['access-token'] = null;


    $state.go('transparent.home');
  };

  $scope.featured = [];
  $http.get(`${SERVER}/activities/all/feature`).then(resp => {
    console.log(resp.data);
    $scope.featured = resp.data;
  })

}

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$cookies', '$http', 'SERVER'];

export default LayoutController;
