angular.module('BrightlyApp').directive 'ngGigs', ($http) ->
  (scope, elem, attr) ->
    $http.jsonp(scope.latest_gig_endpoint).success (data) ->
      scope.latest_gig = data