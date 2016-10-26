'use strict';

angular.module('notifyApp', ['ngTouch'])
  .controller('notifyCtrl', function($scope, $http, $timeout) {

    $scope.notify = function(choice) {
      console.log(choice, $scope.email)
      var data = { "email" : $scope.email, "vendor" : choice}

      $http.post('http://localhost:3002/api/notificator/promoNotify', data)
      .then(function(response){
        $scope.response = "Message Sent!"
        $timeout(removeResponse, 2000)
      }, function e(error){
        $scope.response = error.data.error.message
        $timeout(removeResponse, 2000)
      })
    }

    function removeResponse(){
      $scope.response = null
    }
  });


