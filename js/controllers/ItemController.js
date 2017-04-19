angular.module('myApp').controller('ItemController', ['$scope', function($scope) {
  
  $scope.item = localStorage.getItem('id');
  $scope.category = localStorage.getItem('category');

}]);