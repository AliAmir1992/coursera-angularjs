(function () {
    'use strict';

    angular.module('assignment1', [])

    .controller('lunchItemsCount', lunchItemsCount);

    lunchItemsCount.$inject = ['$scope'];

    function lunchItemsCount($scope) {
        $scope.itemsCSV = "";
        $scope.changeColor = "red";
        $scope.changeBorderColor = "";
        $scope.countItems = function () {
            
            if ($scope.itemsCSV == "") {
                $scope.lunch_status = "Please enter data first";
                $scope.changeBorderColor = "borderRed";
                
                return;
            }
            var items = $scope.itemsCSV.split(',');

            $scope.lunch_status = items.length <= 3 ? "Enjoy!" : "Too much!";
            
            
            if($scope.lunch_status == "Enjoy!" || $scope.lunch_status == "Too much!")
                $scope.changeColor = "green";
            else
                $scope.changeColor = "red";
                
            if($scope.lunch_status == "Enjoy!" || $scope.lunch_status == "Too much!")
                $scope.changeBorderColor = "borderGreen";
            else
                $scope.changeBorderColor = "borderRed";
                
            
        };
    }
})();