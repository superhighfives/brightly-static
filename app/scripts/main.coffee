"use strict"

app = angular.module('BrightlyApp', ['angularMoment'])

# Cross-browser scroll amount calc from https://developer.mozilla.org/en-US/docs/Web/API/window.scrollY
if window.pageYOffset isnt `undefined`
  app.value "viewportYOffset", ->
    window.pageYOffset

else
  app.value "viewportYOffset", ->
    document.documentElement.scrollTop

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

    $scope.latest_gig = []
    $scope.latest_gig_endpoint = "http://localhost:5000/latest_gig.json?jsoncallback=JSON_CALLBACK"

    $scope.feeds = []
    $scope.feeds_endpoint = "http://localhost:5000/feeds.json?jsoncallback=JSON_CALLBACK"

]

