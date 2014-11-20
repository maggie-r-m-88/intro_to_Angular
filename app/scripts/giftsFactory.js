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
