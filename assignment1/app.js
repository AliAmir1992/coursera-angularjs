(function () {
    'use strict';

    angular.module('assignment1', [])

    .controller('lunchItemsCount', lunchItemsCount);

    lunchItemsCount.$inject = ['$scope'];

    function lunchItemsCount($scope) {
        $scope.itemsCSV = "";
        $scope.countItems = function () {
            if ($scope.itemsCSV == "") {
                $scope.lunch_status = "Please enter data first";
                return;
            }
            var items = $scope.itemsCSV.split(',');

            $scope.lunch_status = items.length <= 3 ? "Enjoy!" : "Too much!";
        };
    }
})();