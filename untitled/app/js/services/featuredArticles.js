/**
 * Created by maddie.stigler on 5/27/15.
 */
 
app.factory('content', ['$http', function($http) {
    return $http.get('http://html5news.herokuapp.com/articles/featured')
        .success(function(data) {
            return data;
        })
        .error(function(data) {
            return data;
        });
}]);