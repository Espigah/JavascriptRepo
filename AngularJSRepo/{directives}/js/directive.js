function colorHandler($color) {
    'use strict';
   return function () {       
        return {
            restrict: 'E',
            template: '<p style="color:' + $color + '">{{text}}</p>',
            scope: {
                text: '@text'
            }
        };
    };
}
var app = angular.module('app', []);
app.directive('red', colorHandler('red'));
app.directive('greenColorTest', colorHandler('green'));
