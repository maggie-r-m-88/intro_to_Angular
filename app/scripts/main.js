
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