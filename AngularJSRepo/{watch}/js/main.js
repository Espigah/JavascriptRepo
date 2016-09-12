
function MyController($scope) {
    $scope.greeting = 'Hola!';
   $scope.myVar = 1;

   $scope.$watch('myVar', function() {
        $scope.greeting = 'hey, myVar has changed!' + $scope.myVar;
   });

   $scope.buttonClicked = function() {
      $scope.myVar = 2; // This will trigger $watch expression to kick in
   };

}
var app = angular.module('app', []);
app.controller('GreetingController', ['$scope', MyController]);
