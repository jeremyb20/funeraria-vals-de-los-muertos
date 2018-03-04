(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorProfile', controladorProfile);

  controladorProfile.$inject = ['$stateParams', '$state','servicioCliente']

  function controladorProfile($stateParams,$state,servicioCliente){
    let vm = this;

   


  }

})();