angular.module("HIDE-A-FORM", [])
  .controller("HIDDEN", hideFunc)


hideFunc.$inject = ['$scope'];

function hideFunc($scope){
  var hide = this;
  
  hide.btnShow = false;
  
  $scope.$watch('hide.btnShow', function(){
    hide.btnName = hide.btnShow ? 'Hide Form' : 'Show Form'
  });
  
  hide.profile = {
    name : "",
    bio  : "",
    books: "",
    jsLib: ""
  }
  
  
}