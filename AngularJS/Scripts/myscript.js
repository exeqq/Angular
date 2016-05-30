(function () {
    //creating module in angular
    var app = angular.module("myapp", ['ngRoute']);//it uses the ngRoute if we implement routing

    //creating controller on angular
    //here $scope object is used to share data between Controller and view.

    app.controller("HomeController", function ($scope) {
        $scope.Message = "Bienvenido a Angular JS!";
        //$scope.Message = "Hi this is Two";
    })
})();