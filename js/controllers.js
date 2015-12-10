var myfunction = '';

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angularRangeSlider'])

.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout) {
	//Used to name the .html file
	$scope.template = TemplateService.changecontent("home");
	$scope.menutitle = NavigationService.makeactive("Home");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();

	NavigationService.gethomecontent(function (data) {
		console.log(data);
		// $scope.mySlides = data;
	});

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

.controller('PrivacyCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("privacy");
	$scope.menutitle = NavigationService.makeactive("Privacy Policy");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
})

.controller('TermsCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("terms-conditions");
	$scope.menutitle = NavigationService.makeactive("Terms Conditions");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
})

.controller('ProductListCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("product-list");
	$scope.menutitle = NavigationService.makeactive("Men");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
	$scope.filters = {};
	$scope.filters.pageno = 1;
	$scope.filters.category = 1;
	$scope.filters.subcategory = '';
	$scope.filters.color = '';
	$scope.filters.size = '';
	$scope.filters.price = '';
	$scope.filters.type = '';
	$scope.noData = false;

	// $scope.productList = [{
	//     src: "img/tee.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }, {
	//     src: "img/t2.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }, {
	//     src: "img/t3.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }, {
	//     src: "img/t4.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }, {
	//     src: "img/t5.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }, {
	//     src: "img/t6.jpg",
	//     name: "SPACE PRINT SLIM FIT T-SHIRT",
	//     price: "699"
	// }];

	NavigationService.getProductByCategory($scope.filters, function (data) {
		if (data) {
			console.log(data);
			$scope.productList = data.queryresult;
			// $scope.productList = [];
			if (data.queryresult.length == 0 && $scope.productList.length == 0) {
				$scope.noData = true;
			} else {
				$scope.noData = false;
			}
		}
	});

	NavigationService.getFilters($scope.filters.category, function (data) {
		if (data) {
			console.log(data);
			// $scope.productList = data.queryresult;
		}
	});
})

.controller('ProductViewCtrl', function ($scope, TemplateService, NavigationService, $stateParams) {
	$scope.template = TemplateService.changecontent("product-view");
	$scope.menutitle = NavigationService.makeactive("Men");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
	$scope.product = {};
	$scope.alerts = [];
	//selcted color
	$scope.filter = {};
	$scope.filter.color = "";
	//selected size
	$scope.filter.size = "";
	$scope.filter.product = $stateParams.id;

	$scope.addAlert = function (type, msg) {
		$scope.alerts.push({
			type: type,
			msg: msg
		});
	};

	$scope.myfunc = function (n) {
		console.log(n);
	}

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.onColorClick = function (color) {
		console.log(color);
		_.each($scope.product.color, function (n) {
			n.selected = "";
		});
		color.selected = "selected";
		$scope.filter.color = color.id;
		$scope.loadProduct($scope.filter);
	}

	$scope.onSizeClick = function (size) {
		_.each($scope.sizes, function (n) {
			n.style = "";
		});
		if (size.status != 'canceled') {
			size.style = "color:#FC483F";
			$scope.filter.size = size.id;
			$scope.loadProduct($scope.filter);
		}
	}
	$scope.loadProduct = function (filter) {
		NavigationService.getProductDetails(filter, function (data, status) {

			data.product.image = [];
			_.each(data.product, function (n, key) {
				if (key.split('image')[1]) {
					data.product.image.push(n);
				}
			})
			$scope.viewImage = data.product.image1;
			NavigationService.getAllSize(function (data1) {
				$scope.sizes = data1;

				//	set size canceled
				_.each(data1, function (n, key) {
						if (data.size && data.size != '') {
							_.each(data.size, function (m, key1) {
								if (n.id != m.id) {
									n.status = "canceled";
								} else {
									n.status = "";
								}
							})
						} else {
							n.status = "canceled";
						}
					})
					//	set color selected
				_.each(data.color, function (n, key) {
					if (n.id == data.product.color) {
						n.selected = "selected";
					} else {
						n.selected = "";
					}
				})

				$scope.product = data;

			});
			$scope.filter.product = data.product.id;
		});
	}
	$scope.loadProduct($scope.filter);

	$scope.otherImage = function (image) {
		$scope.viewImage = image;
	}

	//	ADD TO BAG
	$scope.addToCart = function () {
		console.log($scope.filter.size);
		if ($scope.filter.size != "") {
			NavigationService.addToCart($scope.filter, function (data, status) {
				if (data == "true") {
					$scope.addAlert("success", "Added to cart");
				} else {
					$scope.addAlert("danger", "Something has gone wrong");
				}
				myfunction();
			});
		} else {
			$scope.addAlert("danger", "Select SIZE to add to Shopping Bag");
		}
	}

	//	ADD TO WISHLIST
	$scope.addToWishlist = function () {
		if (NavigationService.getUser()) {
			NavigationService.addToWishlist($scope.filter, function (data, status) {
				console.log(data);
				if (data == "true")
					$scope.addAlert("success", "Added to wishlist");
				else
					$scope.addAlert("danger", "Already in wishlist");
			});
		} else {
			$scope.addAlert("danger", "Please login first");
		}
	}

})


.controller('ContactCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("contact");
	$scope.menutitle = NavigationService.makeactive("Contact Us");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
	$scope.alerts = [];

	$scope.addAlert = function (type, msg) {
		$scope.alerts.push({
			type: type,
			msg: msg
		});
	};

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index, 1);
	};

	$scope.contact = {};

	$scope.submitQuery = function (contact) {
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
			NavigationService.usercontact(contact, function (data, status) {
				if (data) {
					$scope.msgsuccess = "Kudos! We will get back to you soon!";
					$scope.type = "success";
					$scope.msg = "";
					clearvalidation($scope.allvalidation);
					$scope.contact = {};
					$scope.addAlert($scope.type, $scope.msgsuccess);
				} else {
					$scope.msg = "Please re-verify the data you've entered!";
					$scope.msgsuccess = "";
					$scope.type = "danger";
					$scope.addAlert($scope.type, $scope.msg);
				}
			});
		} else {
			$scope.msg = "Please fill mandatory fields!!";
			$scope.msgsuccess = "";
		};
	};

})

// .controller('LoginCtrl', function($scope, TemplateService, NavigationService) {

// })


.controller('CustomCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("custom");
	$scope.menutitle = NavigationService.makeactive("Custom");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;



})

.controller('CustomChooseCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("custom-choose");
	$scope.menutitle = NavigationService.makeactive("Custom");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
})

.controller('ProfileCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService.changecontent("profile");
		$scope.menutitle = NavigationService.makeactive("Profile");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.footerBlack = true;

	})
	.controller('OrderCtrl', function ($scope, TemplateService, NavigationService) {
		$scope.template = TemplateService.changecontent("order");
		$scope.menutitle = NavigationService.makeactive("Orders");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.footerBlack = true;

	})
	.controller('CartCtrl', function ($scope, TemplateService, NavigationService, $stateParams, $state) {
		$scope.template = TemplateService.changecontent("cart");
		$scope.menutitle = NavigationService.makeactive("Cart");
		TemplateService.title = $scope.menutitle;
		$scope.navigation = NavigationService.getnav();
		$scope.footerBlack = true;
		$scope.allCart = [];
		$scope.alerts = [];
		$scope.amount = 0;

		$scope.addAlert = function (type, msg) {
			$scope.alerts.push({
				type: type,
				msg: msg
			});
		};

		$scope.closeAlert = function (index) {
			$scope.alerts.splice(index, 1);
		};

		$scope.isNoCart = function () {
			if ($scope.allCart == '') {
				$state.go('home');
			}
		}

		NavigationService.showCart(function (data, status) {
			$scope.allCart = data;
			$scope.isNoCart();
		})

		$scope.deleteCart = function (cart) {
			NavigationService.deletecart(cart.id, function (data, status) {
				$scope.allCart = data;
				myfunction();
				$scope.isNoCart();
			})
		}

		NavigationService.totalcart(function (data) {
			$scope.amount = data;
		});

	})

.controller('ConfirmationmailCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("confirmationmail");
	$scope.menutitle = NavigationService.makeactive("Confirmationmail");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;

})

.controller('CheckoutCtrl', function ($scope, TemplateService, NavigationService,$state,$timeout) {
	$scope.template = TemplateService.changecontent("checkout");
	$scope.menutitle = NavigationService.makeactive("Checkout");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;
	$scope.login = {};
	$scope.sameasbilling = false;
	$scope.checkout = {};
	$scope.shippingaddress = {};
	$scope.billingaddress = {};
	$scope.register = {};

	$scope.alerts = [];

	$scope.addAlert = function (type, msg) {
		$scope.alerts.push({
			type: type,
			msg: msg
		});
	};

	$scope.closeAlert = function (index) {
		$scope.alerts.splice(index, 1);
	};
	
	$scope.checkoutAsGuest = function(asguest){
		if(asguest==true){
			$timeout(function(){
				$scope.tabchange('step2', 2);
			},1000);
			
		}
	}

	$scope.tabchange = function (tab, a) {
		//        console.log(tab);
		$scope.tab = tab;
		if (a == 1) {
			if (!NavigationService.getUser()) {
				$scope.classa = "yellow-btn";
				$scope.classb = '';
				$scope.classc = '';
				$scope.classd = '';
			} else {
				$scope.tabchange('step2', 2);
			}
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
			$scope.classa = '';
			$scope.classb = '';
			$scope.classc = '';
			$scope.classd = "yellow-btn";
		}
	};
	$scope.tabchange('step1', 1);

	$scope.sameAsBilling = function (sameasbilling) {
		if (sameasbilling == true) {
			$scope.shippingaddress.line1 = $scope.billingaddress.line1;
			$scope.shippingaddress.line2 = $scope.billingaddress.line2;
			$scope.shippingaddress.line3 = $scope.billingaddress.line3;
			$scope.checkout.shippingcity = $scope.checkout.billingcity;
			$scope.checkout.shippingpincode = $scope.checkout.billingpincode;
			$scope.checkout.shippingstate = $scope.checkout.billingstate;
			$scope.checkout.shippingcountry = $scope.checkout.billingcountry;
		} else {
			$scope.shippingaddress.line1 = "";
			$scope.shippingaddress.line2 = "";
			$scope.shippingaddress.line3 = "";
			$scope.checkout.shippingcity = "";
			$scope.checkout.shippingpincode = "";
			$scope.checkout.shippingstate = "";
			$scope.checkout.shippingcountry = "";
		}
	}

	$scope.checkoutLogin = function () {
		console.log($scope.login);

		$scope.allvalidation = [{
			field: $scope.login.email,
			validation: ""
        }, {
			field: $scope.login.password,
			validation: ""
        }];

		var check = formvalidation($scope.allvalidation);
		if (check) {
			NavigationService.login($scope.login, function (data) {
				if (data) {
					console.log(data);
					if (data != "false") {
						NavigationService.setUser(data);
						window.location.reload();
						// $state.go('setting');
					} else {
						$scope.addAlert("danger", "Invalid email or password");
					}
				}
			})
		} else {
			$scope.addAlert("danger", "Please enter a valid email");
		}
	}


	$scope.checkoutRegister = function () {
		console.log($scope.login);

		$scope.allvalidation = [{
			field: $scope.register.firstname,
			validation: ""
        }, {
			field: $scope.register.lastname,
			validation: ""
        }, {
			field: $scope.register.email,
			validation: ""	
        }, {
			field: $scope.register.password,
			validation: ""
        }, {
			field: $scope.register.cpassword,
			validation: ""
        }];

		var check = formvalidation($scope.allvalidation);
		if (check) {
			if ($scope.register.accept == true) {
				$scope.acceptTerms = false;
				NavigationService.registerUser($scope.register, function (data) {
					console.log(data);
					if (data != 'false') {
						NavigationService.setUser(data);
						// $uibModal.hide();
						window.location.reload();
					} else {
						$scope.alreadyRegistered = true;
					}
				})
			} else {
				$scope.addAlert("danger", "Please accept the terms & conditions");
			}
		} else {
			$scope.addAlert("danger", "Please enter a valid email");
		}
	}

})

.controller('WishlistCtrl', function ($scope, TemplateService, NavigationService) {
	$scope.template = TemplateService.changecontent("wishlist");
	$scope.menutitle = NavigationService.makeactive("Wishlist");
	TemplateService.title = $scope.menutitle;
	$scope.navigation = NavigationService.getnav();
	$scope.footerBlack = true;

	// GET WISHLIST


})

.controller('CustomCreateCtrl', function ($scope, TemplateService, NavigationService, $uibModal) {
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
	$scope.showSelecter = function () {
		$scope.showSelect = true;
		console.log($scope.showSelect);
	};
	$scope.fontSelect = function (val) {
		$scope.selectedFont = val;
		$scope.showSelect = false;
	};

	$scope.changeColor = function (index) {
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

	$scope.closeandshowsize = function () {
		$scope.showSize = !$scope.showSize;
		$scope.first = false;
		$scope.second = false;
		$scope.third = false;
	}

	$scope.showorfirst = function () {
		$scope.showFirst = false;
	}
	$scope.showor = function () {
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

	$scope.makeactive = function (index) {
		var i = 0;
		_.each($scope.color, function (n) {
			if (i == index) {
				n.class = "active";
			} else {
				n.class = "";
			}
			i++;
		})
	};

	//    sizechart popup
	$scope.sizeChart = function () {
		$uibModal.open({
			animation: true,
			templateUrl: 'views/modal/sizechart.html',
			controller: 'CustomCreateCtrl'
		})
	}

	// image upload popup
	$scope.width = "720px";
	$scope.imgUpload = function () {
		$uibModal.open({
			animation: true,
			windowClass: 'large-Modal',
			templateUrl: 'views/modal/upload.html',
			controller: 'CustomCreateCtrl'
		})
	}

})

.controller('headerctrl', function ($scope, TemplateService, $uibModal, NavigationService) {
	$scope.template = TemplateService;
	$scope.register = {};
	$scope.login = {};
	$scope.register.accept = false;
	$scope.showLogout = false;
	$scope.invalidLogin = false;
	$scope.alreadyRegistered = false;
	$scope.acceptTerms = false;
	$scope.user = {};
	$scope.totalcart = 0;
	$scope.loginUrl = mainurl;

	// COMMON FUNCTIONS
	myfunction = function () {
		NavigationService.gettotalcart(function (data) {
			$scope.totalcart = data;
		});
		//		NavigationService.totalcart(function (data) {
		//			$scope.amount = data;
		//		});
	}


	myfunction();


	$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
		$(window).scrollTop(0);
	});

	$scope.openLogin = function () {
		$uibModal.open({
			animation: true,
			templateUrl: 'views/modal/login.html',
			controller: 'headerctrl'
		})
	};

	if (NavigationService.getUser()) {
		$scope.showLogout = true;
		$scope.user.name = NavigationService.getUser('user').firstname + " " + NavigationService.getUser('user').lastname;
	}

	$scope.registerUser = function () {
		console.log($scope.register);
		if ($scope.register.accept == true) {
			$scope.acceptTerms = false;
			NavigationService.registerUser($scope.register, function (data) {
				console.log(data);
				if (data != 'false') {
					NavigationService.setUser(data);
					// $uibModal.hide();
					window.location.reload();
				} else {
					$scope.alreadyRegistered = true;
				}
			})
		} else {
			$scope.acceptTerms = true;
			$scope.alreadyRegistered = false;
		}
	}

	$scope.loginUser = function () {
		console.log($scope.login);
		NavigationService.login($scope.login, function (data) {
			if (data) {
				console.log(data);
				if (data != "false") {
					NavigationService.setUser(data);
					window.location.reload();
					// $state.go('setting');
				} else {
					$scope.invalidLogin = true;
				}
			}
		})
	}

	$scope.logout = function () {
		$scope.showLogout = false;
		$.jStorage.flush();
	}

});