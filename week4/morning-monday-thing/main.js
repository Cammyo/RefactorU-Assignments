angular.module("COFFEESHOP", ['ngRoute'])
  .controller("CoffeeController", CoffeeFunc)

angular.module("COFFEESHOP")
  .config(Router)

Router.$inject = ['$routeProvider'];

function Router($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl : '/home.html',
    controller  : 'CoffeeController',
    controllerAs: 'coffee'
  })
  .when('/menu', {
    templateUrl : '/menu.html',
    controller  : 'CoffeeController',
    controllerAs: 'coffee'
  })
}

function CoffeeFunc (){
  
  var coffee = this;
  
}