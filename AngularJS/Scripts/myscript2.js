angular.module('myapp') //extending from previously created angular module MyApp
    //another controller we can add many controllers to angular application
.controller('OrderController', function ($scope, OrderService) { //inject OrderService
    $scope.Order = null;
    OrderService.GetData().then(function (d) {
        $scope.Order = d.data; // Success        
    }, function () {
        alert('Failed'); // Failed
    });
})
.factory('OrderService', function ($http) { // here I have created a factory which is a populer way to create and configure services
    var fac = {};                               //using factory method i am configuring service.
    fac.GetData = function () {
        return $http.get('/Home/GetData');      //gets data from GetData Action in HomeController
    }
    return fac;
});