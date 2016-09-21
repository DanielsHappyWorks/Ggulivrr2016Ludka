// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: '/main/',
    templateUrl: 'templates/main.html',
    controller: 'mainCtrl'      
  })
  
  .state('register', {
    url: '/register/',
    templateUrl: 'templates/register.html',
    controller: 'registerCtrl'      
  })

  .state('login', {
    url: '/login/',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'      
  })
  
  .state('homemenu', {
    url: '/homemenu/',
    templateUrl: 'templates/homemenu.html',
    controller: 'homemenuCtrl'      
  })

  .state('screen1', {
    url: '/screen1/',
    templateUrl: 'templates/screen1.html',
    controller: 'screen1Ctrl'      
  })

  .state('screen2', {
    url: '/screen2/',
    templateUrl: 'templates/screen2.html',
    controller: 'screen2Ctrl'      
  })

  .state('screen6', {
    url: '/screen6/',
    templateUrl: 'templates/screen6.html',
    controller: 'screen6Ctrl'      
  })

  .state('screen3', {
    url: '/screen3/',
    templateUrl: 'templates/screen3.html',
    controller: 'screen3Ctrl'      
  })

  .state('screen4', {
    url: '/screen4/',
    templateUrl: 'templates/screen4.html',
    controller: 'screen4Ctrl'      
  })

  .state('screen5', {
    url: '/screen5/',
    templateUrl: 'templates/screen5.html',
    controller: 'screen5Ctrl'      
  })
  
  .state('profile', {
    url: '/profile/',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'    
  })

  .state('panda1', {
    url: '/introduction/',
    templateUrl: 'templates/panda1Introduction.html',
    controller: 'panda1IntroCtrl'
  })

  .state('credits', {
    url: '/credits/',
    templateUrl: 'templates/credits.html',
    controller: 'creditsCtrl'      
  })

  .state('gallery', {
    url: '/gallery/',
    templateUrl: 'templates/gallery.html',
    controller: 'galleryCtrl'      
  })

  .state('profileGallery', {
    url: '/profileGallery/',
    templateUrl: 'templates/profileGallery.html',
    controller: 'profileGalleryCtrl'      
  })

  .state('panda2', {
    url: '/panda2/',
    templateUrl: 'templates/panda2.html',
    controller: 'panda2'
  })

  .state('panda3', {
    url: '/panda3/',
    templateUrl: 'templates/panda3.html',
    controller: 'panda3'
  })
  .state('panda4', {
    url: '/panda4/',
    templateUrl: 'templates/panda4.html',
    controller: 'panda4'
  })
  .state('panda5', {
    url: '/panda5/',
    templateUrl: 'templates/panda5.html',
    controller: 'panda5'
  })  
  .state('game', {
    url: '/game/',
    templateUrl: 'templates/game.html',
    controller: 'gameCtrl'
  })

  $urlRouterProvider.otherwise('/main/');
});