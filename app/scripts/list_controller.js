
(function (){
  angular.module('HoodList')
  .controller('GiftsController',
            ['giftsFactory','$scope','$location','$rootScope',
    function( giftsFactory,  $scope,  $location,  $rootScope){

     giftsFactory.getHoods().success(function(data){
       $scope.hoods = data;

          });
     $scope.addHood = function(hood) {
       giftsFactory.addHood(hood);
       $rootScope.$on('hood:added', function(){
         $location.path('/');
       });



     }

  }]);


}());
