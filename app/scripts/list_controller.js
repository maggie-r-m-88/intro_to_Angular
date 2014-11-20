(function (){

  angular.module('CelebList')

  .controller('ListController',
    ['celebsFactory', '$scope', '$location',  '$rootScope', function (celebsFactory, $scope, $location, $rootScope) {

    celebsFactory.getCelebs().then( function (results){
      $scope.celebs = results;
    });

    $scope.viewMore = function (celeb) {
      $location.path('/single/' + person._id);
    };


  }]);

}());
