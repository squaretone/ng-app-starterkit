(function() {
  'use strict';

  angular
    .module('formioApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
