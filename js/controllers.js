angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'api.services', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angularRangeSlider'])

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

.controller('ContactCtrl', function($scope, TemplateService, NavigationService, MyServices) {
  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

  $scope.contact = {};

  var usercontactcallback = function(data, status) {
    if (data) {
      $scope.msgsuccess = "Successfully Submitted!!";
      $scope.msg = "";
      clearvalidation($scope.allvalidation);
    } else {
      $scope.msg = "Invalid data try again!!";
      $scope.msgsuccess = "";
    }
  };

  $scope.submitQuery = function(contact) {
    $scope.allvalidation = [{
      field: $scope.contact.name,
      validation: ""
    }, {
      field: $scope.contact.email,
      validation: ""
    }, {
      field: $scope.contact.comment,
      validation: ""
    }];

    var check = formvalidation($scope.allvalidation);

    if (check) {
      MyServices.usercontact(contact, usercontactcallback);
    } else {
      $scope.msg = "Please fill mandatory fields!!";
      $scope.msgsuccess = "";
    };
  };

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
  $scope.menutitle = NavigationService.makeactive("Custom");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})

.controller('ProfileCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("profile");
    $scope.menutitle = NavigationService.makeactive("Profile");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

  })
  .controller('OrderCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("order");
    $scope.menutitle = NavigationService.makeactive("Orders");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

  })
  .controller('CartCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("cart");
    $scope.menutitle = NavigationService.makeactive("Cart");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

  })
  .controller('ConfirmationmailCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("confirmationmail");
    $scope.menutitle = NavigationService.makeactive("Confirmationmail");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

  })
  .controller('CheckoutCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("checkout");
    $scope.menutitle = NavigationService.makeactive("Checkout");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

    $scope.tab = 'step1';
    $scope.classa = 'yellow-btn';
    $scope.classb = '';
    $scope.classc = '';
    $scope.classd = '';
    $scope.tabchange = function(tab, a) {
      //        console.log(tab);
      $scope.tab = tab;
      if (a == 1) {

        $scope.classa = "yellow-btn";
        $scope.classb = '';
        $scope.classc = '';
        $scope.classc = '';
      } else if (a == 2) {

        $scope.classa = '';
        $scope.classb = "yellow-btn";
        $scope.classc = '';
        $scope.classd = '';
      } else if (a == 3) {

        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = "yellow-btn";
        $scope.classd = '';
      } else {
        $ionicScrollDelegate.scrollTop();
        $scope.classa = '';
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = "yellow-btn";
      }
    };


  })
  .controller('WishlistCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("wishlist");
    $scope.menutitle = NavigationService.makeactive("Wishlist");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

  })

.controller('CustomCreateCtrl', function($scope, TemplateService, NavigationService, $uibModal) {
  $scope.template = TemplateService.changecontent("custom-create");
  $scope.menutitle = NavigationService.makeactive("Custom");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.showSize = true;
  $scope.showFirst = true;
  $scope.showSecond = true;
  $scope.first = false;
  $scope.second = false;
  $scope.third = false;

  //T-shirt front-back
  $scope.isfront = true;
  $scope.custom = {
    frontSrc: "img/custom/tshirt/white-front.jpg",
    backSrc: "img/custom/tshirt/white-back.jpg"
  };

  //Text on Cloth
  $scope.imgText = {
    value: ""
  };

  //Select FONT
  $scope.showSelect = false;
  $scope.selectedFont = "Advent Pro";
  $scope.fonts = [{
    family: "Advent Pro"
  }, {
    family: "Roboto Condensed"
  }];
  $scope.showSelecter = function() {
    $scope.showSelect = true;
    console.log($scope.showSelect);
  };
  $scope.fontSelect = function(val) {
    $scope.selectedFont = val;
    $scope.showSelect = false;
  };

  $scope.changeColor = function(index) {
    $scope.showSize = false;
    console.log(index);
    if (index == 0) {
      $scope.first = true;
      $scope.second = false;
      $scope.third = false;
    } else if (index == 1) {
      $scope.first = false;
      $scope.second = true;
      $scope.third = false;
    } else {
      $scope.first = false;
      $scope.second = false;
      $scope.third = true;
    }
  }

  $scope.closeandshowsize = function() {
    $scope.showSize = !$scope.showSize;
    $scope.first = false;
    $scope.second = false;
    $scope.third = false;
  }

  $scope.showorfirst = function() {
    $scope.showFirst = false;
  }
  $scope.showor = function() {
    $scope.showSecond = false;
  }

  $scope.size = [{
    src: "img/sizechart.jpg"
  }];

  $scope.tshirt = [{
    name: "ULTRA COTTON TSHIRT",
    from: "YXS",
    to: "3XL"

  }];

  $scope.color = [{
    color: "red",
    class: "active"

  }, {
    color: "black",
    class: ""

  }, {
    color: "grey",
    class: ""

  }, {
    color: "cyan",
    class: ""

  }, {
    color: "blue",
    class: ""

  }, {
    color: "pink",
    class: ""

  }, {
    color: "green",
    class: ""

  }, {
    color: "orange",
    class: ""

  }];

  $scope.colour = [{
    color: "red",
    class: "active"
  }, {
    color: "black",
    class: ""
  }, {
    color: "grey",
    class: ""
  }, {
    color: "cyan",
    class: ""
  }, {
    color: "blue",
    class: ""
  }, {
    color: "pink",
    class: ""
  }, {
    color: "green",
    class: ""
  }, {
    color: "orange",
    class: ""
  }, {
    color: "Chocolate ",
    class: ""
  }, {
    color: "DarkCyan ",
    class: ""
  }, {
    color: "DarkKhaki ",
    class: ""
  }, {
    color: "DarkRed",
    class: ""
  }, {
    color: "DarkOliveGreen ",
    class: ""
  }, {
    color: "DarkSalmon ",
    class: ""
  }, {
    color: "DarkSlateGray ",
    class: ""
  }, {
    color: "DarkTurquoise ",
    class: ""
  }, {
    color: "DarkViolet ",
    class: ""
  }, {
    color: "DeepSkyBlue ",
    class: ""
  }, {
    color: "FireBrick ",
    class: ""
  }, {
    color: "Cornsilk ",
    class: ""
  }, {
    color: "Crimson",
    class: ""
  }, {
    color: "Khaki  ",
    class: ""
  }, {
    color: "Lavender",
    class: ""
  }, {
    color: "LavenderBlush ",
    class: ""
  }, {
    color: "LawnGreen ",
    class: ""
  }, {
    color: "LightCyan ",
    class: ""
  }, {
    color: "LightGreen",
    class: ""
  }, {
    color: "LightSalmon ",
    class: ""
  }, {
    color: "LightSteelBlue ",
    class: ""
  }, {
    color: "Lime ",
    class: ""
  }];

  $scope.colors = [{
    color: "red",
    name: "COLOR",
  }, {
    color: "black",
    name: "STROKE"
  }, {
    color: "grey",
    name: "SHADOW"
  }];

  $scope.items = [{
    name: 'First Item',
    value: 500
  }, {
    name: 'Second Item',
    value: 200
  }, {
    name: 'Third Item',
    value: 700
  }];

  $scope.item = [{
    name: 'First Item',
    value: 500
  }, {
    name: 'Second Item',
    value: 200
  }, {
    name: 'Third Item',
    value: 700
  }];

  $scope.item1 = [{
    name: 'First Item',
    value: 500
  }, {
    name: 'Second Item',
    value: 200
  }, {
    name: 'Third Item',
    value: 700
  }];

  $scope.item2 = [{
    name: 'First Item',
    value: 500
  }, {
    name: 'Second Item',
    value: 200
  }, {
    name: 'Third Item',
    value: 700
  }];

  $scope.item3 = [{
    name: 'First Item',
    value: 500
  }, {
    name: 'Second Item',
    value: 200
  }, {
    name: 'Third Item',
    value: 700
  }];

  $scope.makeactive = function(index) {
    var i = 0;
    _.each($scope.color, function(n) {
      if (i == index) {
        n.class = "active";
      } else {
        n.class = "";
      }
      i++;
    })
  };

  //    sizechart popup
  $scope.sizeChart = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/sizechart.html',
      controller: 'CustomCreateCtrl'
    })
  }

  // image upload popup
  $scope.width = "720px";
  $scope.imgUpload = function() {
    $uibModal.open({
      animation: true,
      windowClass: 'large-Modal',
      templateUrl: 'views/modal/upload.html',
      controller: 'CustomCreateCtrl'
    })
  }

})

.controller('headerctrl', function($scope, TemplateService, $uibModal) {
  $scope.template = TemplateService;

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });

  $scope.openLogin = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/login.html',
      controller: 'LoginCtrl'
    })
  };

});
