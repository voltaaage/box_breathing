(function(){
  var app = angular.module("boxBreathing", ["ui.router","templates"]);

  app.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
      .state("home", {
        url: "/home",
        controller: "HomeController",
        templateUrl: "home/_home.html"
      })
      .state("timer", {
        url: "/timer",
        controller: "TimerController",
        templateUrl: "timer/_timer.html"
      });

    $urlRouterProvider.otherwise("home");
  });

}());