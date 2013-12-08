"use strict"

angular.module('BrightlyApp').directive 'ngFeeds', ($http) ->
  (scope, elem, attr) ->
    $http.jsonp(scope.feeds_endpoint).success (data) ->
      scope.feeds = data

      container = document.querySelector(".posts-wrapper")
      
      setTimeout (->
        msnry = new Masonry(container,
          columnWidth: ".post-wrapper",
          itemSelector: ".post-wrapper",
          transitionDuration: 0
        )
      ), 5000