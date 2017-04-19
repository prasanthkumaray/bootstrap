var app = angular.module("myApp", ["ngRoute",'oc.lazyLoad']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Partials/home.html"
    })
    .when("/jackets", {
        templateUrl : "Partials/jackets.html"
    })
    .when("/jeans", {
        templateUrl : "Partials/jeans.html"
    })
    .when("/tshirts", {
        templateUrl : "Partials/tshirts.html"
    })
    .when("/shirts", {
        templateUrl : "Partials/shirts.html"
    })
    .when("/blazers", {
        templateUrl : "Partials/blazzers.html"
    })
    .when("/item", {
        templateUrl : "Partials/item.html"
    });
});