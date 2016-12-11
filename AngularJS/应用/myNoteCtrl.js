/**
 * Created by 12 on 2016/12/10.
 */
app.controller("myNoteCtrl", function ($scope) {
    $scope.message = "请输入笔记";
    $scope.left = function () {
        return 100 - $scope.message.length;
    }
    $scope.clear = function () {
        $scope.message = "";
    }
    $scope.save = function () {
        alert("Note Saved");
    }
})