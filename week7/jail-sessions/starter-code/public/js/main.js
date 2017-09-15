angular.module('app', [])

angular.module('app')
    .controller('mainController', ['$scope', '$http', function($scope, $http){

    $scope.loginForm = {};

    $scope.users = [
        { name : 'alice',   role : 'warden'   },
        { name : 'bob',     role : 'guard'    },
        { name : 'carlos',  role : 'visitor'  },
        { name : 'eve',     role : 'prisoner' },
        { name : 'mallory', role : 'prisoner' },
    ];

    $scope.logInAs = function(user){
        $scope.loginForm.username = $scope.loginForm.password = user.name
    };

    $scope.signup = function(){
        $http({
            method : 'POST',
            url    : '/signup',
            data   : $scope.signupForm
        }).then(function(res){
            console.log(res);
            if ( res.data.success ){
                window.location.href="/jail";
            }
        }, function(err) {
            console.error(err);
        });
    };

    $scope.login = function(){
        $http({
            method : 'POST',
            url    : '/login',
            data   : $scope.loginForm
        }).then(function(res){
            if (res.data.success) {
                window.location.href='/jail';
            } else {
                console.log(res);
            }
        }, function(err) {
            console.error(err);
        });
    };
    
}]);
