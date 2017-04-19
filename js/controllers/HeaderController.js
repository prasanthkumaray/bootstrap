angular.module('myApp').controller('HeaderController', ['$scope', '$location', function($scope, $location) {
    var parallax = document.querySelectorAll(".parallax"),
        speed = 0.5;
    window.onscroll = function() {
        [].slice.call(parallax).forEach(function(el, i) {
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            el.style.backgroundPosition = elBackgrounPos;
        });
    };
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $(".navbar.navbar-default").addClass("navbar-fixed-top");
            $(".navbar.navbar-default img").show();
        } else {
            $(".navbar.navbar-default").removeClass("navbar-fixed-top");
            $(".navbar.navbar-default img").hide();
        }
    });
    $('a[href^="#!'+$location.path()+'"]').parent().addClass('active');
    $scope.$on('$routeChangeStart', function(next, current) {
      $(".nav.navbar-nav li").removeClass("active");
      $('a[href^="#!'+$location.path()+'"]').parent().addClass('active');
    });
}]);