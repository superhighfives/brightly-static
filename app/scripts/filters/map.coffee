angular.module('BrightlyApp').filter 'map', ->
  (input, propName) ->
    input.map (item) ->
      item[propName]