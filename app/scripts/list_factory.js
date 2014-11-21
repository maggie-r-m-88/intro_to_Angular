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
