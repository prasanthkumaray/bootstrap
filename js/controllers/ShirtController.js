angular.module('myApp').controller('ShirtController', ['$scope', function($scope) {
  $scope.products=[1,2,3,4,5,6,7,8,9,10];
    $scope.saveClicked = function(value){
  	localStorage.setItem('id',value);
  	localStorage.setItem('category','shirts');
  }
}]);