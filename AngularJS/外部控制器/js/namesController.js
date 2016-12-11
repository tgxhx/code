/**
 * Created by 12 on 2016/12/9.
 */
angular.module("myApp", []).controller("namesCtrl", function ($scope) {
    $scope.names = [
        {name: 'Jani', country: 'Norway'},
        {name: 'Hege', country: 'Sweden'},
        {name: 'Kai', country: 'Denmark'}
    ];
})