/**
 * Created by maddie.stigler on 5/27/15.
 */
app.controller('ContentController', ['$scope', 'SingleCatService', '$routeParams', function($scope, SingleCatService, $routeParams) {
    SingleCatService.success(function(data) {
    $scope.content = data;
        $scope.detail = data[$routeParams.id];
    });
}]);

