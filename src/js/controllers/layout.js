import $ from 'jquery';

function LayoutController ($scope, $rootScope, $stateParams, $state, $cookies, $http, SERVER) {
 //console.log('in the layout controller');
  $rootScope.welcome = '';


  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('transparent.home');
  };

  // $scope.$on('userInfo', (event, username) => {
  //   console.log(username, "from layout controller");
  //   //$scope.$broadcast('userInfo', (event, username));
  // });

  // $scope.moveDown = () => {
  //   $state.go('root.home.about');
  // }

// console.log( () => {return window.scrollY()} );
  // var mn = $('.nav');
  //    mns = 'main-nav-scrolled';
  //    hdr = $('landing-container').height();
  //
  // $(window).scroll(function() {
  //   if($(this).scrollTop() > 100) {
  //     mn.addClass(mns);
  //   } else {
  //     mn.removeClass(mns);
  //   }
  // });


}

LayoutController.$inject = ['$scope', '$rootScope', '$stateParams', '$state', '$cookies', '$http', 'SERVER'];

export default LayoutController;
