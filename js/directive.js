angular.module("myApp").directive('appHeader', function() {
  return {
    restrict: 'E',
    templateUrl: 'Partials/header.html'
  };
});
angular.module("myApp").directive('appFooter', function() {
  return {
    restrict: 'E',
    templateUrl: 'Partials/footer.html'
  };
});