"use strict"

angular.module('BrightlyApp').directive 'ngPackery', ->
  (scope, elem, attr) ->
    imagesLoaded elem[0].parentElement, ->
      if scope.packery is undefined or scope.packery is null
        scope.packery = new Packery(elem[0].parentElement,
          isOriginTop: false,
          columnWidth: ".grid-sizer"
        )
        scope.packery.bindResize()
        scope.packery.appended elem[0]
      else
        scope.packery.appended elem[0]
      scope.packery.layout()