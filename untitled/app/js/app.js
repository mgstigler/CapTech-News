/*Angular Javascript with app*/
var app = angular.module('NewsApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'HomeController',
    templateUrl: 'views/home.html'
  })
      .when('/content/:id', {
        controller: 'ContentController',
        templateUrl: 'views/content.html'
      })
      .otherwise({
        redirectTo: '/'
      });

});


