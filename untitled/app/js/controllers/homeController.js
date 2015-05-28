/**
 * Created by maddie.stigler on 5/27/15.
 */

app.controller('HomeController', ['$scope', 'content', function($scope, content) {
    content.success(function(data) {
        $scope.content = data;
    });
}]);

app.controller('CategoryController', ['$scope', 'category', '$routeParams', function($scope, category, $routeParams) {
    content.success(function(data) {
        $scope.category = data[$routeParams.id];
    });
}]);