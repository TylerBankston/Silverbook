(function () {
  'use strict';

  angular
    .module('silverbook')
    .controller('searchController', searchController);

  function searchController() {
    var vm = this;

    vm.query = '';
  }
    
})();