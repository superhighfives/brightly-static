"use strict"

angular.module('BrightlyApp').directive 'ngFeeds', ($http) ->
  (scope, elem, attr) ->
    $http.jsonp(scope.feeds_endpoint).success (data) ->
      scope.feeds = data