"use strict"

app = angular.module('BrightlyApp', [])

app.config ($interpolateProvider) ->
  $interpolateProvider.startSymbol('#{')
  $interpolateProvider.endSymbol('}')

app.controller 'MainCtrl', [
  '$scope', '$http'
  ($scope, $http) ->



]

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
