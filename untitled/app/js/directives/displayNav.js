app.directive('displayNav', ['$location', '$route', function($location, $route){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/displayNav.html',
    link: function(scope, element, attrs) { 
      scope.onClick = function(clickedId) { 
        $location.path("/content/" + clickedId );
        $route.reload();
      } 
    }
  };
}]);