(() => {
  'use strict';
  angular
  .module('funeraria')
  .service('servicioCliente', servicioCliente);

  servicioCliente.$inject = ['$log','$http'];


  function servicioCliente($log, $http){

    let publicAPI = {
      addUsuario : _addUsuario,
      getUsuarios : _getUsuarios,
      logInUser : _logInUser
    }
    return publicAPI;

    // Funcion que almacena en el localStorage todos los usuarios
    function _addUsuario(pnuevoUsuario){
      let listaUsuarios = _getUsuarios();
      listaUsuarios.push(pnuevoUsuario);
      localStorage.setItem('usuariosLS', JSON.stringify(listaUsuarios));
    }


    function _getUsuarios(){
      let listaUsuarios = [];
      let listaUsuariosLocal = JSON.parse(localStorage.getItem("usuariosLS"));

      if(listaUsuariosLocal == null){
        listaUsuarios = [];
      }else{
        listaUsuariosLocal.forEach(obj => {
          
          let objUsuarios = new Cliente(obj.nombre, obj.apellidos, obj.cedula, obj.provincia, obj.canton,obj.distrito,obj.edad,obj.genero,obj.email,obj.password);

          listaUsuarios.push(objUsuarios);
        })
      }

      return listaUsuarios;
    }

    function _logInUser(user){
      var userLocal = _getUsuarios();
      for (var i = 0; i < userLocal.length; i++) {
        if (userLocal[i].email == user.email && userLocal[i].password == user.password) {
          return true;
        }

      }
    }



  }

})();