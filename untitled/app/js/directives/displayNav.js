app.directive('displayNav', ['$location', '$window', function($location, $window){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/displayNav.html',
    link: function(scope, element, attrs) { 
      scope.onClick = function(clickedId) { 
        //$route.reload();
        $location.path("/content/" + clickedId );
        $window.location.reload();
        
      } 
    }
  };
}]);