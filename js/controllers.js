angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("home");
    $scope.menutitle = NavigationService.makeactive("Home");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();

    /* $scope.mySlides = [{
        src: "img/slider1.jpg",
        head: "Superhero Stuff",
        sub: "EXCLUSIVE DC COMICS COLLECTION BY MY FYNX"
    }, {
        src: "img/slider1.jpg",
        head: "Superhero Stuff",
        sub: "EXCLUSIVE DC COMICS COLLECTION BY MY FYNX"
    }];*/

    //    $scope.mySlides = ['img/slider1.jpg'];
    $scope.mySlides = [
        'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
        'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
    ];

    $scope.footerBlack = false;
})

.controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("privacy");
    $scope.menutitle = NavigationService.makeactive("Privacy Policy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;
})

.controller('ProductCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("product-list");
    $scope.menutitle = NavigationService.makeactive("Men");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;

    $scope.productList = [{
        src: "img/logo.png",
        name: "SPACE PRINT SLIM FIT T-SHIRT",
        price: "699"
    }, {
        src: "img/logo.png",
        name: "SPACE PRINT SLIM FIT T-SHIRT",
        price: "699"
    }];

})

.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("contact");
    $scope.menutitle = NavigationService.makeactive("Contact Us");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

;