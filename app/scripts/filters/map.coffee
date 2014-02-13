angular.module('BrightlyApp').filter 'map', ->
  (input, propName) ->
    console.log input
    input.map (item) ->
      item[propName]