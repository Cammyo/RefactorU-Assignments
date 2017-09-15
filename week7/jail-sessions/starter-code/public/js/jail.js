angular.module('app', [])
    .controller('mainController', ['$scope', '$http', function($scope, $http){
        $http({
            method : 'GET',
            url    : '/api/me',
        }).then(function(res){
            console.log(res)
            if (res.data) {
                $scope.user = res.data;
            }
        }, function(err) {
            console.error(err);
        });
    }]);
