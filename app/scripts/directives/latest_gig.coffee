"use strict"

angular.module('BrightlyApp').directive 'ngLatestGig', ($http) ->
  (scope, elem, attr) ->
    $http.jsonp(scope.latest_gig_endpoint).success (data) ->
      scope.latest_gig = data