(() => {
  'use strict';
  angular
  .module('funeraria')
  .controller('controladorInicioSesion', controladorInicioSesion);

  controladorInicioSesion.$inject = ['$stateParams', '$state','servicioCliente']

  function controladorInicioSesion($stateParams, $state,servicioCliente){
    let vm = this;

    // aqui validamos que el paramatero exista, en caso de que no exista nos redijirá al estado anterior
    if(!$stateParams.objUsuarioTemp){
      $state.go('signup');
    }

    let objSinFormatoUsuario = JSON.parse($stateParams.objUsuarioTemp);

    let objUsuario = new Cliente(objSinFormatoUsuario.nombre, objSinFormatoUsuario.apellidos, objSinFormatoUsuario.cedula, objSinFormatoUsuario.provincia, objSinFormatoUsuario.canton,objSinFormatoUsuario.distrito,objSinFormatoUsuario.edad,objSinFormatoUsuario.genero,objSinFormatoUsuario.email,objSinFormatoUsuario.password);
    

    vm.logIn = function(objUsuario){
      if (objSinFormatoUsuario.email != null && objSinFormatoUsuario.password != null) {
        let newLog = {
          email : objSinFormatoUsuario.email,
          password : objSinFormatoUsuario.password
        }
        let isLogged = servicioCliente.logInUser(newLog);
        if (isLogged) {
          $state.go('profile');
        }else {
          swal("Inicio Sesion Invalido", "Invalid username and/or password", "danger", {
            button: "Aceptar",
          });
          // $scope.errorMessage = "Invalid username and/or password";
        }

      }
    }


  }
})();