(function() {
  'use strict';

angular.module('CarApp')
  .factory('CarService', CarService);

CarService.$inject = ['$http', 'globalConfig'];

function CarService($http, globalConfig) {
  var url = "";
  return {
    getCars: function() {
      url = globalConfig.apiAddress + "/car";
      return $http.get(url);
    },
    getCar: function(id) {
      url = globalConfig.apiAddress + "/car/" + id;
      return $http.get(url);
    },
    createCar: function(car) {
      url = globalConfig.apiAddress + "/car";
      return $http.post(url, car);
    },
    updateCar: function(car) {
      url = globalConfig.apiAddress + "/car/" + car._id;
      return $http.put(url, car);
    },
    deleteCar: function(id) {
      url = globalConfig.apiAddress + "/car/" + id;
      return $http.delete(url);
    }
  };
}

})();