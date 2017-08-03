(function() {
'use strict';

angular.module('CarApp')
  .controller('CarController', CarController);

CarController.$inject = ['$scope', '$rootScope', 'CarService', '$state', '$stateParams'];

function CarController($scope, $rootScope, CarService, $state, $stateParams) {
  $scope.cars = [];

  if ($state.current.name == "cars") {
    $rootScope.Title = "Car Listing";
    CarService.getCars().then(function(res) {
      console.log(res.data);
      $scope.cars = res.data;
    }).catch(function(err) {
      console.log(err);
    });

    $scope.deleteCar = function(id) {
      if (confirm('Are you sure to delete?')) {
        CarService.deleteCar(id).then(function(res) {
          if (res.data == "deleted") {
            $state.go("cars", {}, {
              reload: true
            });
          }
        }).catch(function(err) {
          console.log(err);
        });
      }
    };
  } else if ($state.current.name == "edit") {
    $rootScope.Title = "Edit Car";
    var id = $stateParams.id;
    CarService.getCar(id).then(function(res) {
      $scope.car = res.data;
    }).catch(function(err) {
      console.log(err);
    });

    $scope.saveData = function(car) {
      if ($scope.carForm.$valid) {
        CarService.updateCar(car).then(function(res) {
          if (res.data == "updated") {
            $state.go("cars");
          }
        }).catch(function(err) {
          console.log(err);
        });
      }
    };
  } else if ($state.current.name == "create") {
    $rootScope.Title = "Create Car";
    $scope.saveData = function(car) {
      console.log("Save Car ..");
      $scope.IsSubmit = true;
      if ($scope.carForm.$valid) {
        console.log("it's valid now");
        CarService.createCar(car).then(function(res) {
          // if (res.data == "created") {
          //   $state.go("cars");
          // }
        }).catch(function(err) {
          console.log(err);
        });
      } else {
        console.log("it's not valid yet");
      }
    };
  }
}

})();