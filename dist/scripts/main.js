(function () {


  var app = angular.module('CelebList', ['ngRoute', 'restangular']);

  app.config( function ($routeProvider, RestangularProvider) {

    RestangularProvider.setBaseUrl('http://tiy-atl-fe-server.herokuapp.com/collections/');


    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'CelebsController'
    });

    $routeProvider.when('/single/:id', {
      templateUrl: 'templates/single.html',
      controller: 'SingleController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add.html',
      controller: 'CelebsController'
    })

  });



}());

(function () {

  angular.module('CelebList')
    .factory('celebsFactory', ['$rootScope', 'Restangular', function ($rootScope, Restangular) {

      var celebsBase = Restangular.all('celeblist');

      function getCelebs () {
        // return $http.get(url);
        return celebsBase.getList();
      }

      function getCeleb (id) {
        //return $http.get(url + id);
        return celebsBase.get(id);
      }

      function addCeleb (celeb) {
        // $http.post(url, gift).success( function () {
        //   $rootScope.$broadcast('gift:added');
        // });
        celebsBase.post(celeb).then( function () {
          $rootScope.$broadcast('celeb:added');
        });
      }

      return {

        getCelebs: getCelebs,
        getCeleb: getCeleb,
        addCeleb: addCeleb

      };

    }]);

}());

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
