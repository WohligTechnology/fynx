// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ui.router',
  'phonecatControllers',
  'templateservicemod',
  'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

  // for http request with session
  $httpProvider.defaults.withCredentials = true;

  $stateProvider

  .state('home', {
    url: "/home",
    templateUrl: "views/template.html",
    controller: 'HomeCtrl'
  })

  .state('privacy', {
    url: "/privacy",
    templateUrl: "views/template.html",
    controller: 'PrivacyCtrl'
  })
    .state('terms-conditions', {
    url: "/terms-conditions",
    templateUrl: "views/template.html",
    controller: 'TermsCtrl'
  })

  .state('productlist', {
    url: "/product/men",
    templateUrl: "views/template.html",
    controller: 'ProductListCtrl'
  })

  .state('productview', {
    url: "/product/men/1",
    templateUrl: "views/template.html",
    controller: 'ProductViewCtrl'
  })

  .state('customization', {
    url: "/custom",
    templateUrl: "views/template.html",
    controller: 'CustomCtrl'
  })

  .state('chooseAttire', {
    url: "/custom/choose",
    templateUrl: "views/template.html",
    controller: 'CustomChooseCtrl'
  })

  .state('customCreate', {
    url: "/custom/create",
    templateUrl: "views/template.html",
    controller: 'CustomCreateCtrl'
  })

  .state('contact', {
    url: "/contact",
    templateUrl: "views/template.html",
    controller: 'ContactCtrl'
  })

  $urlRouterProvider.otherwise("/home");

});


firstapp.directive('img', function($compile, $parse) {
  return {
    restrict: 'E',
    replace: false,
    link: function($scope, element, attrs) {
      var $element = $(element);
      if (!attrs.noloading) {
        $element.after("<img src='img/loading.gif' class='loading' />");
        var $loading = $element.next(".loading");
        $element.load(function() {
          $loading.remove();
          $(this).addClass("doneLoading");
        });
      } else {
        $($element).addClass("doneLoading");
      }
    }
  };
});
