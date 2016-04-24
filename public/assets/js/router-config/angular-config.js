var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(['$stateProvider','$urlRouterProvider','$locationProvider', function($stateProvider, $urlRouterProvider,$locationProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: 'partial-about.html'     
        });

        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        // .state('welcome', {
        //     url: '/welcome',
        //     templateUrl: 'partial-welcome_page.html'     
        // });

        $locationProvider.html5Mode(true);
        
}]);
