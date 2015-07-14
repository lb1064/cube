define(['admin_app', 'angular'], function (admin_app, angular) {
    admin_app.controller('PageController', ['$scope', '$sce', '$compile', 'pubSubService',
        function ($scope, $sce, $compile, pubSubService) {
            $scope.curPage = '';


            pubSubService.subscribe(function (event, data) {
                $scope.curPage = $scope.curPage +
                    '<div class="wx_btn_warp" ng-include="\'templete/text.html\'" ng-controller="TextController" ng-drag>'
                    + '</div>';

            }, null, 'addText');

            pubSubService.subscribe(function (event, data) {
                $scope.curPage = $scope.curPage +
                    '<div class="wx_table_warp" ng-include="\'templete/table.html\'" ng-controller="TableController" ng-drag>'
                    + '</div>';

            }, null, 'addTable');

            pubSubService.subscribe(function (event, data) {
                $scope.curPage = $scope.curPage +
                    '<div class="wx_img_warp" ng-include="\'templete/img.html\'" ng-controller="ImgController" ng-drag>'
                    + '</div>';

            }, null, 'addImg');




            $scope.dropped = function (dragEl, dropEl) {

                $(dragEl).offset({
                    top: $scope.dargPos.top - $scope.dargPos.clickTop,
                    left: $scope.dargPos.left - $scope.dargPos.clickLeft
                });

                $scope.curPage = angular.element(dropEl).html();

                $scope.$apply();

            };


        }
    ]);
});