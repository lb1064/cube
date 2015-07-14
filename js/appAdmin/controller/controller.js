define(['admin_app'], function(admin_app) {
    admin_app.controller('AdminController', ['$scope', 'pubSubService',
        function($scope, pubSubService) {




            $scope.addText = function() {
                pubSubService.publish('addText');
            };
            $scope.addTable = function() {
                pubSubService.publish('addTable');
            };
            $scope.addImg = function() {
                pubSubService.publish('addImg');
            };


        }
    ]);
});