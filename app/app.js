(function() {
// 'use strict';

angular.module('CarApp', ["ui.router"])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state("cars", {
    url: "/",
    templateUrl: "/views/car.list.html",
    controller: "CarController"
  })

  .state("create", {
    url: "/create",
    templateUrl: "/views/car.form.html",
    controller: "CarController"
  })

  .state("edit", {
    url: "/edit/:id",
    templateUrl: "/views/car.form.html",
    controller: "CarController"
  })
  
  .state("details", {
    url: "/details/:id",
    templateUrl: "/views/details.html",
    controller: "CarController"
  });

})

.constant("globalConfig", {
  apiAddress: 'http://localhost:3000/api'
})

.directive('validFile',function(){
  return {
    require: 'ngModel',
    link: function(scope,el,attrs,ngModel){
      //change event is fired when file is selected
      el.bind('change',function(){
        scope.$apply(function(){
          ngModel.$setViewValue(el.val());
          ngModel.$render();
        });
      });
    }
  }
});

})();