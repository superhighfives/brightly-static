"use strict"

app = angular.module('BrightlyApp', ['angularMoment'])

moment.tz.add
  zones:
    "Etc/UTC": ["0 - UTC"]
  rules: {}
  links: {}

# Cross-browser scroll amount calc from https://developer.mozilla.org/en-US/docs/Web/API/window.scrollY
if window.pageYOffset isnt `undefined`
  app.value "viewportYOffset", ->
    window.pageYOffset

else
  app.value "viewportYOffset", ->
    document.documentElement.scrollTop

app.value "isTouch", ->
  Modernizr.touch

app.value "viewportHeight", ->
  document.documentElement.clientHeight

app.factory "onScrollChange", ($document, viewportYOffset) ->
  raf = window.requestAnimationFrame or window.mozRequestAnimationFrame or window.webkitRequestAnimationFrame or window.msRequestAnimationFrame
  callbacks = []
  oldYOffset = undefined
  animate = ->
    newYOffset = viewportYOffset()
    if newYOffset isnt oldYOffset
      oldYOffset = newYOffset
      i = 0
      n = callbacks.length

      while i < n
        callbacks[i] newYOffset
        i++
    raf animate  if raf isnt `undefined`

  raf animate  if raf isnt `undefined`
  $document.bind "scroll", animate
  $document.bind "touchmove", animate
  attach: (callback) ->
    callbacks.push callback

  detach: (callback) ->
    callbacks.splice callbacks.indexOf(callback), 1

app.controller 'MainCtrl', [
  '$scope', '$http'
  ($scope, $http) ->

    $scope.getIcon = (type) ->
      switch type
        when "instagram" then "&#xF641;"
        when "twitter" then "&#xF611;"

    $scope.$watch 'toggle', ->
      if $scope.toggle
        $scope.view = true
      else
        setTimeout ->
          $scope.view = false
          $scope.$apply()
        , 300

    $scope.latest_gig = []

    base_url = if window.location.toString().match(/localhost/) and not window.location.toString().match(/\?live=1/)
      "http://localhost:5000"
    else
      "http://brightly-server.herokuapp.com"

    $scope.latest_gig_endpoint = "#{base_url}/latest_gig.json?jsoncallback=JSON_CALLBACK"

    $scope.feeds = []
    $scope.feeds_endpoint = "#{base_url}/feeds.json?jsoncallback=JSON_CALLBACK"
]
