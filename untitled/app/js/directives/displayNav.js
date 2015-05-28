app.directive('displayNav', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/displayNav.html',
    link: function(scope, element, attrs) { 
      scope.currId = 0;

      scope.onClick = function(clickedId) { 
        scope.currId = clickedId;
      } 
    }
  };
});