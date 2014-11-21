
(function (){
   var app = angular.module('HoodList', ['ngRoute']);

   app.config( ['$routeProvider',
       function ($routeProvider){


     $routeProvider.when('/', {
       templateUrl: 'templates/home.html',
       controller: 'GiftsController'
     });

     $routeProvider.when('/single/:id',{
       templateUrl: 'templates/viewsingle.html',
       controller:  'GiftsController'
     });

     $routeProvider.when('/add', {
       templateUrl:'templates/add.html',
       controller:'GiftsController'
     });

     $routeProvider.when('/edit/:id', {
       templateUrl: 'templates/single.html',
       controller: 'SingleController'
     });

   }]);

// t = miles per day
// d = workdays per month
// g = mpg
//p = $price per gallon
//k = monthly parking

//gas expense per month= [(t*d)(g*p)+k]

}());

(function (){
  angular.module('HoodList')
  .factory('giftsFactory',
  ['$rootScope','$http', function
   ($rootScope,  $http) {

    var url ="http://tiy-atl-fe-server.herokuapp.com/collections/magsholidaylist2/";

    function getHoods () {
      return $http.get(url);
      }

      function getHood (id) {
        return $http.get(url + id);
      }

      function addHood(hood) {
        return $http.post(url, hood).then(function(){
          $rootScope.$broadcast('hood:added');
        });
      }

      function editHood(hood) {
        return $http.put(url + hood._id, hood).then(function(){
          $rootScope.$broadcast('hood:edited');
        });
      }

      function deleteHood(hood) {
        return $http.delete(url + hood._id, hood);
      };

      return {

        getHoods: getHoods,
        getHood: getHood,
        addHood: addHood,
        editHood: editHood,
        deleteHood: deleteHood
      };

  }]);

}());


(function (){
  angular.module('HoodList')
  .controller('GiftsController',
            ['giftsFactory','$scope','$location','$rootScope',
    function( giftsFactory,  $scope,  $location,  $rootScope){

     giftsFactory.getHoods().success(function(data){
       console.log(data);
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
