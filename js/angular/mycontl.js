angular.module('ctApp', []).controller('personCtrl', function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fullName = function() {
        return $scope.firstName + " " + $scope.lastName;
    }
    $scope.quantity = 10;
    $scope.price = 12.5;
});
