(() => {
  // Se utiliza el modo estricto de JavaScript introducido en el ES5
  'use strict';
  // Por medio de una creacion de un modulo cuyo nombre es "appRoutes" se inyectan las dependencias de ui-roter, oc-lazyLoad y angular css
  angular
  .module('appRoutes', ['ui.router','oc.lazyLoad','angularCSS'])
  // asi mismo se configura el routing de la aplicacion
  .config(routing);

  // Se inyectan los stateProvider y urlRouterProvider quienes se encargan de cambiar las vistas con sus respectivos controladores y hojas de  estlos
  routing.$inject = ['$stateProvider', '$urlRouterProvider'];

  // Se crea la funcion routing (se debe llamar igual que el que está dentro del config)
  function routing($stateProvider, $urlRouterProvider, $ocLazyLoad){

    $stateProvider

    // se configran todos los estados (vistas) por medio del atrubuto .state que es una funcion dentro del stateProvider
    .state('landing', {
      // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
      url: '/',
      // Se convoca al html
      templateUrl: './components/landing-page/landing-page.view.html',
      // se convoca el controlador
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/landing-page/landing-page.controller.js')
        }]
      },
      // se convica el css
      css: './components/landing-page/landing-page.style.css',
      controller: 'MyCtrl',
		  controllerAs: 'vm'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: './components/signup/signup.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/signup/signup.controller.js')
        }]
      },
      // params:{
      //   objUsuarioTemp: ''
      // },
      css: './components/signup/signup.style.css',
      controller: 'controladorRegistro',
		  controllerAs: 'vm'
    })

    .state('logIn', {
      // Se le crea un url (por el cual se va a accesar a el medio de la ruta en el navegador)
      url: '/logIn',
      // Se convoca al html
      templateUrl: './components/logIn/login.view.html',
      // se convoca el controlador
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/logIn/logIn.controller.js')
        }]
      },
      params:{
        objUsuarioTemp: ''
      },
      // se convica el css
      css: './components/logIn/logIn.style.css',
      controller: 'controladorInicioSesion',
		  controllerAs: 'vm'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: './components/profile/profile.view.html',
      resolve: {
        load: ['$ocLazyLoad', ($ocLazyLoad) => {
          return $ocLazyLoad.load('./components/profile/profile.controller.js')
        }]
      },
      // params: {
      //   objUsuarioTemp: ''
      // },
      css: './components/profile/profile.style.css',
      controller: 'controladorProfile',
		  controllerAs: 'vm'
    })

    $urlRouterProvider.otherwise('/');// cargar por defecto el landing page
  }
//oclazyload recarga todas los controladores
})();