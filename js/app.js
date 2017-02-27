var app = angular.module('sport', 
    ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      templateUrl: 'views/home.html' 
    })
    .when('/calciatori', { 
      controller: 'CalciatoriController', 
      templateUrl: 'views/atleti.html' 
    })
    .when('/squadre', { 
      controller: 'SquadreController', 
      templateUrl: 'views/squadre.html' 
    }) 
    .when('/calendari', { 
      controller: 'CalendariController', 
      templateUrl: 'views/calendari.html' 
    }) 
    .otherwise({ 
      redirectTo: '/' 
    }); 
});

app.config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};    
    }    
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);

app.constant("settings", {
    "ver": "1.0.0",
    "url": "../sport_be/"
});
