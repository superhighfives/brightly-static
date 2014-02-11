"use strict"

angular.module('BrightlyApp').directive 'ngPackery', () ->
  (scope, elem, attr) ->
    if scope.packery is `undefined` or scope.packery is null
      console.log "making packery!"
      scope.packery = new Packery(element[0].parentElement,
        columnWidth: ".item"
      )
      scope.packery.bindResize()
      scope.packery.appended element[0]
      scope.packery.items.splice 1, 1 # hack to fix a bug where the first element was added twice in two different positions
    else
      scope.packery.appended element[0]
    scope.packery.layout()
    return