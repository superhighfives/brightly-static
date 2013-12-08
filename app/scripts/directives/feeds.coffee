"use strict"

angular.module('BrightlyApp').directive 'ngFeeds', ($http) ->
  (scope, elem, attr) ->
    $http.jsonp(scope.feeds_endpoint).success (data) ->
      posts = data
      posts.map (post) ->
        icon = scope.getIcon(post.service)
        post.icon = icon
      scope.feeds = posts

      setTimeout (->
        container = document.querySelector(".posts-wrapper")
        msnry = new Masonry(container,
          columnWidth: ".post-wrapper",
          itemSelector: ".post-wrapper",
          transitionDuration: 0
        )
      ), 5000