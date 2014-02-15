"use strict"

angular.module('BrightlyApp').directive 'ngParallax', ($document, $window, onScrollChange, isTouch) ->
  (scope, elem, attr) ->

    oldString = undefined
    yCalc = (scale) ->
      value = -(scale / 4)
      if value > 0 then 0 else -(Math.min -value, 100)

    opacityCal = (scale) ->
      return Math.max 0.5, 1 - scale / 350

    setBackgroundPosition = (scale) ->
      translateString = "translate3d(0," + yCalc(scale) + "px, 0"
      if oldString isnt translateString
        oldString = translateString
        elem.css "-webkit-transform", translateString
        elem.css "-moz-transform", translateString
        elem.css "-ms-transform", translateString
        elem.css "-o-transform", translateString
        elem.css "transform", translateString
        elem.css "opacity", opacityCal scale

    setBackgroundPosition 0

    if !isTouch()
      onScrollChange.attach setBackgroundPosition