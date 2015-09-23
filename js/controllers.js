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
    
     $scope.mySlides = ["img/slider1.jpg"];

    $scope.footerBlack = false;
})

.controller('PrivacyCtrl', function($scope, TemplateService, NavigationService) {
    $scope.template = TemplateService.changecontent("privacy");
    $scope.menutitle = NavigationService.makeactive("Privacy");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
    $scope.footerBlack = true;
})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
})

;