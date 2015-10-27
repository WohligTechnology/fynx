angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [{
    id: 1,
    src: "img/slider2.jpg",
    template: '<img src="img/custom-tee.png" class="img-responsive doneLoading img-spacer"/>',
    button: {
      class: 'btn-dark',
      text: 'Enter Now',
      url: '#/custom',
      centerAlign: true
    }
  }, {
    id: 2,
    src: "img/slider1.jpg",
    template: '<h3>Superhero <br>Stuff</h3><p>EXCLUSIVE DC COMICS COLLECTION BY MY FYNX</p>',
    button: {
      class: 'btn-primary',
      text: 'Shop Now',
      url: '#/product/men',
      centerAlign: false
    }
  }];

  $scope.slideSet = [{
    src: 'img/shoe1.png'
  }, {
    src: 'img/shoe2.png'
  }, {
    src: 'img/shoe3.png'
  }, {
    src: 'img/shoe4.png'
  }, {
    src: 'img/shoe4.png'
  }, {
    src: 'img/shoe3.png'
  }, {
    src: 'img/shoe2.png'
  }, {
    src: 'img/shoe1.png'
  }];

  $scope.slideSet = _.chunk($scope.slideSet, 4);

  $scope.footerBlack = false;
})

.controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("privacy");
  $scope.menutitle = NavigationService.makeactive("Privacy Policy");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})

.controller('TermsCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("terms-conditions");
  $scope.menutitle = NavigationService.makeactive("Terms Conditions");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})

.controller('ProductListCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("product-list");
  $scope.menutitle = NavigationService.makeactive("Men");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

  $scope.productList = [{
    src: "img/tee.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }, {
    src: "img/t2.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }, {
    src: "img/t3.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }, {
    src: "img/t4.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }, {
    src: "img/t5.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }, {
    src: "img/t6.jpg",
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699"
  }];

})

.controller('ProductViewCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("product-view");
  $scope.menutitle = NavigationService.makeactive("Men");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

  $scope.product = {
    name: "SPACE PRINT SLIM FIT T-SHIRT",
    price: "699",
    img: ["img/thumb1.jpg", "img/thumb2.jpg", "img/thumb3.jpg", "img/thumb4.jpg"]
  };

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService) {

})


.controller('CustomCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("custom");
  $scope.menutitle = NavigationService.makeactive("Custom");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

})

.controller('CustomChooseCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("custom-choose");
  $scope.menutitle = NavigationService.makeactive("Choose Your Attire");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

})

.controller('CustomCreateCtrl', function($scope, TemplateService, NavigationService) {
  $scope.template = TemplateService.changecontent("custom-create");
  $scope.menutitle = NavigationService.makeactive("Funk It Up");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

})

.controller('headerctrl', function($scope, TemplateService, $uibModal) {
  $scope.template = TemplateService;

  $scope.openLogin = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/login.html',
      controller: 'LoginCtrl'
    })
  }

});
