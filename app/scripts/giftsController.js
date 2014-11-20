(function () {

  angular.module('CelebList')
    .controller('CelebsController',
      ['celebsFactory', '$scope', '$location', '$rootScope',
        function (celebsFactory, $scope, $location, $rootScope) {

        celebsFactory.getCelebs().then( function (results) {
          $scope.celebs = results;
        });

        $scope.addCeleb = function (celeb) {
          celebsFactory.addCeleb(celeb);

          $rootScope.$on('celeb:added', function () {
            $location.path('/');
          });


          $scope.viewMore = function (celeb) {
            $location.path('/single/' + celeb._id);
          };

        }


    }]);
}());
