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
