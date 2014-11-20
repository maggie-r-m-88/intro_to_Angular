(function (){

  angular.module('PeopleList', ['ngRoute'])

  .constant ({
    'appUrl': 'http://tiy-atl-fe-server.herokuapp.com/collections/magpeople22/'
  })

  .config( function ($routeProvider) {

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'ListController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'templates/add.html',
      controller: 'AddController'
    });

    $routeProvider.when('/single/:pid', {
      templateUrl: 'templates/single.html',
      controller: 'SingleController'
    });

  });

}());
