// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

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

	.state('profile', {
		url: "/profile",
		templateUrl: "views/template.html",
		controller: 'ProfileCtrl'
	})

	.state('order', {
		url: "/order",
		templateUrl: "views/template.html",
		controller: 'OrderCtrl'
	})

	.state('wishlist', {
		url: "/wishlist",
		templateUrl: "views/template.html",
		controller: 'WishlistCtrl'
	})

	.state('cart', {
		url: "/cart",
		templateUrl: "views/template.html",
		controller: 'CartCtrl'
	})

	.state('confirmationmail', {
		url: "/confirmationmail",
		templateUrl: "views/template.html",
		controller: 'ConfirmationmailCtrl'
	})

	.state('checkout', {
		url: "/checkout",
		templateUrl: "views/template.html",
		controller: 'CheckoutCtrl'
	})

	.state('terms-conditions', {
		url: "/terms-conditions",
		templateUrl: "views/template.html",
		controller: 'TermsCtrl'
	})

	.state('about', {
		url: "/about",
		templateUrl: "views/template.html",
		controller: 'AboutCtrl'
	})

	.state('productlist', {
		url: "/product/:category",
		templateUrl: "views/template.html",
		controller: 'ProductListCtrl'
	})

	.state('productview', {
		url: "/product/:category/:id/:design",
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
		url: "/custom/create/:id",
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


firstapp.directive('img', function ($compile, $parse) {
	return {
		restrict: 'E',
		replace: false,
		link: function ($scope, element, attrs) {
			var $element = $(element);
			if (!attrs.noloading) {
				$element.after("<img src='img/loading.gif' class='loading' />");
				var $loading = $element.next(".loading");
				$element.load(function () {
					$loading.remove();
					$(this).addClass("doneLoading");
				});
			} else {
				$($element).addClass("doneLoading");
			}
		}
	};
});

firstapp.directive('imgZoomer', function () {
	return {
		restrict: 'EA',
		link: function (scope, element, attrs) {
			var $element = $(element);

			//Zoom Function
			var basezoom = 1.0;
			var maxzoom;

			var zoom = function (newValue) {
				$element.css({
					"transform": "scale(" + newValue + ")",
					"transition": "all 300ms ease"
				});
			}

			$(".reset-zoom").click(function () {
				basezoom = 1.0;
				zoom(basezoom);
			});

			$(".zoom-img").click(function () {
				maxzoom = 1.9;
				if (basezoom <= maxzoom) {
					basezoom += 0.3;
					zoom(basezoom);
				};
			});

		}
	};
});

firstapp.directive('onlyDigits', function () {
	return {
		require: 'ngModel',
		restrict: 'A',
		link: function (scope, element, attr, ctrl) {
			function inputValue(val) {
				if (val) {
					var digits = val.replace(/[^0-9]/g, '');

					if (digits !== val) {
						ctrl.$setViewValue(digits);
						ctrl.$render();
					}
					return parseInt(digits, 10);
				}
				return undefined;
			}
			ctrl.$parsers.push(inputValue);
		}
	};
});

firstapp.filter('serverimage', function () {
	return function (input) {
		if (input) {
			// return  mainurl + "uploads/" + input;
			return  "http://wohlig.co.in/newfynx/uploads/" + input;
		} else {
			return "img/logo.png";
		}
	};
});


firstapp.filter('capitalize', function () {
	return function (input, all) {
		var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
		return (!!input) ? input.replace(reg, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		}) : '';
	}
});

var setfilter = function (freezed, newdata) {
	_.each(newdata, function (n) {
		var check = false;
		_.each(freezed, function (m) {
			if (m.id == n.id) {
				check = true;
			}

		})
		if (check == false) {
			freezed.push(n);
		}
	});
	return freezed;
}

var formvalidation = function (allvalidation) {
	var isvalid2 = true;
	for (var i = 0; i < allvalidation.length; i++) {
		console.log("checking");
		if (allvalidation[i].field == "" || !allvalidation[i].field || allvalidation[i].field == "Please select" || allvalidation[i].field == "Please Select") {
			allvalidation[i].validation = "ng-invalid";
			isvalid2 = false;
		}
	}
	return isvalid2;
};

var clearvalidation = function (allvalidation) {
	for (var i = 0; i < allvalidation.length; i++) {
		allvalidation[i].validation = "";
	}
};

firstapp.directive('fancyboxBox', function ($document) {
	return {
		restrict: 'EA',
		replace: false,
		link: function (scope, element, attr) {
			var $element = $(element);
			if (attr.rel) {
				var target = $("[rel='" + attr.rel + "']");
			} else {
				var target = element;
			}

			target.fancybox({
				openEffect: 'fade',
				closeEffect: 'fade',
				closeBtn: true,
				helpers: {
					media: {}
				}
			});

		}
	}
});
