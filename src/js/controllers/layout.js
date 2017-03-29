import $ from 'jquery';

function LayoutController ($scope, $rootScope, $state, $cookies, $http) {

  $scope.signOut = () => {
    $rootScope.loggedIn = false;
    $cookies.remove('access-token');
    $http.defaults.headers.common['access-token'] = null;
    $state.go('transparent.home');
  };

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

LayoutController.$inject = ['$scope', '$rootScope', '$state', '$cookies', '$http'];

export default LayoutController;
