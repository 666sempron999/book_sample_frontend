
'use strict';

var library = angular.module("library", [
        'ngResource'
    ]);

angular
    .module('SampleApplication', [
        'appRoutes',
        'library'
]);