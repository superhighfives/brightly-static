"use strict"

angular.module('BrightlyApp').directive 'ngGridItem', ($http, isTouch) ->
  (scope, elem, attr) ->

    scope.$on "deactivateAll", ->
      scope.deactivate()

    scope.activate = ->
      if !isTouch()
        scope.status = 'is-activated'

    scope.deactivate = ->
      scope.status = ''

    scope.touch = ($event) ->
      if isTouch()
        unless scope.status is "is-activated"
          $event.preventDefault()
          scope.resetTouches()
          scope.status = "is-activated"