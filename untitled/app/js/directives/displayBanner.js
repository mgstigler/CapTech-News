app.directive('displayBanner', function(){
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/displayBanner.html',
    link: function(scope, element, attrs) { 
      scope.buttonText = "Click to expand", 
      scope.clicked = false, 

      scope.onClick = function() { 
        element.toggleClass('btn-active'); 
        if(scope.clicked) { 
          scope.buttonText = "Click to expand"; 
          scope.clicked = false; 
        } else { 
          scope.buttonText = "Click to hide"; 
          scope.clicked = true; 
        } 
      } 
    }
  };
});