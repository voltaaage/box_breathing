(function() {
  var app = angular.module("boxBreathing");

  var TimerController = function($scope, $timeout) {
    // Init
    $scope.currentTime = 0;
    $scope.currentTimeMS = 0;
    

    var breathingActions = ["Breathe In", "Hold", "Breathe Out", "Hold"];
    var backgroundColors = ["DarkSeaGreen","Gold","CornflowerBlue","Gold"];
    var actionIndex = 0;
    var intervalLength = 4;


    //  Controls
    $scope.start = function() {
      runTimer();
      $scope.currentBreathingAction = breathingActions[0];
      $scope.backgroundColor = "DarkSeaGreen";
    };

    $scope.pause = function() {
      $timeout.cancel($scope.timeout)
    };

    $scope.reset = function() {
      $timeout.cancel($scope.timeout)
      $scope.currentTime = 0;
      $scope.currentTimeMS = 0;
    }


    // Processes
    var runTimer = function() {
      updateTimer();
      if ($scope.currentTime % intervalLength == 0) {
        nextAction();
      };
      $scope.timeout = $timeout(runTimer,1000);
    }

    var updateTimer = function() {
       $scope.currentTime++;
    }

    var nextAction = function() {
      incrementActionIndex();
      updateAction();
    }

    var incrementActionIndex = function() {
      actionIndex ++;
      if (actionIndex >= breathingActions.length) { actionIndex = 0; }
    }

    var updateAction = function() {
      $scope.currentBreathingAction = breathingActions[actionIndex];
      $scope.backgroundColor = backgroundColors[actionIndex];
    }


  };

  app.controller("TimerController", ["$scope", "$timeout", TimerController]);
}());