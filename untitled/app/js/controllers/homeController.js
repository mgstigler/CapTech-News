/**
 * Created by maddie.stigler on 5/27/15.
 */

app.controller('HomeController', ['$scope', 'content', function($scope, content) {
    content.success(function(data) {
        $scope.content = data;
    });
}]);

app.controller('CategoryController', ['$scope', 'CategoriesService', '$routeParams', function($scope, CategoriesService, $routeParams) {

    $scope.displayName = "hello";

    CategoriesService.success(function(data) {
        $scope.categories = data;
    });

    //$scope.category = data[$routeParams.id];
    //content.success(function(data) {
    //
    //});
}]);