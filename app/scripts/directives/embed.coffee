"use strict"

angular.module('BrightlyApp').directive 'ngEmbed', ($http, $sce) ->
  (scope, elem, attr) ->
    scope.embed_url = $sce.trustAsResourceUrl(attr.ngEmbed);