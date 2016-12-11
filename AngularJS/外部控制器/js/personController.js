/**
 * Created by 12 on 2016/12/9.
 */
var app = angular.module("myApp",[]);
app.controller("myCtrl",function ($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function () {
        return this.firstName + " " +this.lastName;
    }
})