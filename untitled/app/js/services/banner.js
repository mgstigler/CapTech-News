    app.factory('BannerService', ['$http', function($http) {
        return $http.get('http://html5news.herokuapp.com/banners')
            .success(function(data) {
                return data;
            })
            .error(function(data) {
                return data;
            });
    }]);