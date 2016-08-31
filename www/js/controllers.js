angular.module('phase10-scorecard.controllers', ['phase10-scorecard.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $location) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Create the logout modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modals/confirmLogout.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.logoutModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogout = function() {
    $scope.logoutModal.hide();
  };

  // Open the logout modal
  $scope.logout = function() {
    $scope.logoutModal.show();
  };

  // Perform the logout action when the user submit logout
  $scope.doLogout = function() {
    console.log('Doing logout');

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogout();
      $location.path('/login');
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('LoginCtrl', function($scope, $ionicSideMenuDelegate, $timeout, $location, LoginService) {
  $scope.loginData = {};
  $scope.invalidLogin = false;

  $ionicSideMenuDelegate.canDragContent(false);

  $scope.$on('$ionicView.leave', function() {
    $ionicSideMenuDelegate.canDragContent(true);
  });

  $scope.doLogin = function() {
    $scope.invalidLogin = false;
    LoginService.login($scope.loginData).then(function(res) {
      console.log('login response:', res);
      $location.path('/app/home');
    }, function (err) {
      $scope.invalidLogin = true;
      console.log('login error:', err);
    });
  };
})

.controller('HomeCtrl', function($scope) {

});
