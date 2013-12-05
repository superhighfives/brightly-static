angular.module('BrightlyApp').filter 'unsafe', ($sce) ->
  (value) ->
    $sce.trustAsHtml value