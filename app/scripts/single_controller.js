
(function () {

  angular.module('HoodList')
  .controller('SingleController',
          ['$scope','$routeParams','$location','giftsFactory','$rootScope',
  function ($scope,  $routeParams,  $location,  giftsFactory,  $rootScope) {

    giftsFactory.getHood($routeParams.id).success( function (data) {
      $scope.hood = data;
    });

    $scope.editHood = function(hood) {
      giftsFactory.editHood(hood);
      $rootScope.$on('hood:edited', function (){
        $location.path('/');
      });
    }

    $scope.deleteHood = function(hood) {
      giftsFactory.deleteHood(hood);
        $location.path('/');
      };



  }]);

}());
