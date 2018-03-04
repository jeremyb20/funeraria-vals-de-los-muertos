(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorRegistro', controladorRegistro);

  controladorRegistro.$inject = ['$stateParams', '$state','servicioCliente']

  function controladorRegistro($stateParams, $state,servicioCliente){
    let vm = this;

    vm.nuevoUsuario = {};
    // vm.listaUsuarios = listarUsuarios();

    // listarUsuarios();
    // Función que es llamda desde el html para registra un nuevo usuario
    vm.registrarUsuario = (pnuevoUsuario) => {

      console.log(pnuevoUsuario);

      // Tomamos el objeto sin formato y lo comvertimos en una instancia de la clase cliente
      let objNuevoUsuario = new Cliente(pnuevoUsuario.nombre, pnuevoUsuario.apellidos, pnuevoUsuario.cedula, pnuevoUsuario.provincia, pnuevoUsuario.canton,pnuevoUsuario.distrito,pnuevoUsuario.edad,pnuevoUsuario.genero,pnuevoUsuario.email,pnuevoUsuario.password);

     
      // console.log('objeto con usuario');
      console.log(objNuevoUsuario);

      // Pasamos al servicio el nuevo obj de tipo cliente para ser almacenado en el localStorage
      servicioCliente.addUsuario(objNuevoUsuario);

      // Retroalimentación Visual para los usuarios
      swal("Registro exitoso", "El usuario ha sido registrado correctamente", "success", {
        button: "Aceptar",
      });

      $state.go('logIn', { objUsuarioTemp : JSON.stringify(objNuevoUsuario)});

      // Se limpia el formulario
      vm.nuevoUsuario = null;
      // listarUsuarios();
    }


    // function listarUsuarios() {
    //   vm.listaUsuarios = servicioCliente.getUsuarios();
    // }


  }
})();