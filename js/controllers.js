var myfunction = '';
var myImage = {
  image: "",
  image1: ""
};
var isf = 1;
var img = '';
var filter = {};
var custom = {};
var uploadres = [];
var myfunc = {};
window.uploadUrl = 'http://www.myfynx.com/newfynx/index.php/json/uploadImage';
angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider', 'angularRangeSlider', 'infinite-scroll', 'angularFileUpload', 'angular-loading-bar'])


.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {

  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  NavigationService.gethomecontent(function(data) {
    console.log(data);
    // $scope.mySlides = data;
  });

  NavigationService.getHomeSlider(function(data) {
    $scope.mySlides = data;
  })

  // $scope.mySlides = [{
  //   id: 1,
  //   src: "img/slider2.jpg",
  //   template: '<img src="img/custom-tee.png" class="img-responsive doneLoading img-spacer"/>',
  //   button: {
  //     class: 'btn-dark',
  //     text: 'Enter Now',
  //     url: '#/custom',
  //     centerAlign: true
  //   }
  // }, {
  //   id: 2,
  //   src: "img/slider1.jpg",
  //   template: '<h3>Superhero <br>Stuff</h3><p>EXCLUSIVE DC COMICS COLLECTION BY MY FYNX</p>',
  //   button: {
  //     class: 'btn-primary',
  //     text: 'Shop Now',
  //     url: '#/product/men',
  //     centerAlign: false
  //   }
  // }];

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


.controller('AboutCtrl', function($scope, TemplateService, NavigationService) {

  $scope.template = TemplateService.changecontent("about");
  $scope.menutitle = NavigationService.makeactive("About Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})

.controller('ThankYouCtrl', function($scope, TemplateService, NavigationService, $stateParams) {

  $scope.template = TemplateService.changecontent("thankyou");
  $scope.menutitle = NavigationService.makeactive("Thank You");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  myfunction();
  NavigationService.getorderbyorderid($stateParams.order, function(data) {
    $scope.order = data;
  })
})

.controller('SorryCtrl', function($scope, TemplateService, NavigationService, $stateParams) {

  $scope.template = TemplateService.changecontent("sorry");
  $scope.menutitle = NavigationService.makeactive("Sorry");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  myfunction();
  NavigationService.getorderbyorderid($stateParams.order, function(data) {
    $scope.order = data;
  })
})


.controller('TermsCtrl', function($scope, TemplateService, NavigationService) {

  $scope.template = TemplateService.changecontent("terms-conditions");
  $scope.menutitle = NavigationService.makeactive("Terms Conditions");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
})


.controller('ProductListCtrl', function($scope, TemplateService, NavigationService, $stateParams, $filter) {

  $scope.template = TemplateService.changecontent("product-list");
  $scope.menutitle = NavigationService.makeactive($filter('capitalize', 'true')($stateParams.category));
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.filters = {};
  $scope.filters.pageno = 1;
  $scope.filters.category = $stateParams.category;
  $scope.filters.subcategory = '';
  $scope.filters.color = '';
  $scope.filters.size = '';
  $scope.filters.price = '';
  $scope.filters.type = [];
  $scope.filters.check = '';
  $scope.filters.name = '';
  $scope.freeze = {};
  $scope.freeze.freezeSize = "";
  $scope.freeze.freezeColor = "";
  $scope.freeze.freezeType = [];
  $scope.noData = false;
  $scope.check = false;
  $scope.sizes = [];
  $scope.colors = [];
  $scope.subcategory = [];
  $scope.productList = [];
  $scope.categoryName = $stateParams.category;
  var lastpage = 0;
  $scope.filters.pageno = 0;
  $scope.price = [{
    id: "",
    name: "Price"
  }, {
    id: "1",
    name: "Low - High"
  }, {
    id: "2",
    name: "High - Low"
  }];

  $scope.loadProducts = function() {
    console.log("demo");
    if (lastpage >= $scope.filters.pageno) {
      ++$scope.filters.pageno;
      NavigationService.getProductByCategory($scope.filters, function(data) {
        if (data) {
          console.log(data);
          lastpage = data.product.lastpage;
          if ($scope.freeze.freezeColor == "") {
            $scope.colors = data.filter.color;
            $scope.colors.unshift({
              id: "",
              name: "Color"
            });
          }
          if ($scope.freeze.freezeSize == "") {
            $scope.sizes = data.filter.size;
            $scope.sizes.unshift({
              id: "",
              name: "size"
            });
          }
          if ($scope.freeze.freezeType == "") {
            $scope.subcategory = data.filter.subcategory;
            _.each($scope.subcategory, function(n) {
              n.state = false;
            });
          }
          _.each(data.product.queryresult, function(n) {
            $scope.productList.push(n);
          });
          // $scope.productList = data.product.queryresult;

          if (data.product.queryresult.length == 0 && $scope.productList.length == 0) {
            $scope.noData = true;
          } else {
            $scope.noData = false;
          }
        }
      });
    }

  }

  $scope.loadProducts();

  $scope.loadProductsSearch = function() {
    lastpage = 0;
    $scope.filters.pageno = 0;
    $scope.productList = [];
    $scope.loadProducts();
  }

  $scope.addtype = function(type, index) {
    $scope.productList = [];
    lastpage = 0;
    $scope.filters.pageno = 0;
    var addToArray = true;
    _.each($scope.filters.type, function(n, key) {
      if (n === type.id) {
        addToArray = false;
      }
    });
    if (addToArray) {
      $scope.filters.type.push(type.id);
    } else {
      $scope.filters.type = _.filter($scope.filters.type, function(n) {
        return n != type.id;
      });

    }
    if ($scope.filters.type == "") {
      $scope.freeze.freezeType = "";
    } else {
      $scope.freeze.freezeType = $scope.subcategory;
    }
    console.log($scope.filters.type);
    $scope.loadProducts();

  }

  $scope.hideshow = function(cat) {
    console.log("AAA");
    cat.state = !cat.state;
    setTimeout(function() {
      showingalldone = true;
    }, 600);
  }

  $scope.changeFilter = function(check) {
    $scope.productList = [];
    switch (check) {
      case 1:
        {
          if ($scope.filters.size == "")
            $scope.freeze.freezeSize = "";
          else
            $scope.freeze.freezeSize = $scope.sizes;
        }
        break;
      case 2:
        {
          if ($scope.filters.color == "")
            $scope.freeze.freezeColor = "";
          else
            $scope.freeze.freezeColor = $scope.colors;
        }
        break;
      default:
    }
    lastpage = 0;
    $scope.filters.pageno = 0;
    $scope.filters.check = check;
    $scope.loadProducts();
  }

})


.controller('ProductViewCtrl', function($scope, TemplateService, NavigationService, $stateParams, $uibModal, cfpLoadingBar) {

  $scope.template = TemplateService.changecontent("product-view");
  $scope.menutitle = NavigationService.makeactive("Men");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.outofstock = false;
  $scope.product = {};
  $scope.alerts = [];
  //selcted color
  $scope.filter = {};
  $scope.filter.color = "";
  //selected size
  $scope.filter.size = "";
  $scope.filter.quantity = "1";
  $scope.filter.product = $stateParams.id;
  $scope.categoryname = $stateParams.category;
  cfpLoadingBar.start();

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.myfunc = function(n) {
    console.log(n);
  }
  $scope.validateQuantity = function(data) {
    console.log(data);
    if (parseInt($scope.filter.quantity) > parseInt(data.product.quantity)) {
      $scope.outofstock = true;
    } else {
      $scope.outofstock = false;
    }
  }
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.onColorClick = function(color) {
    console.log(color);
    _.each($scope.product.color, function(n) {
      n.selected = "";
    });
    color.selected = "selected";
    $scope.filter.color = color.id;
    if ($scope.filter.size && $scope.filter.size != '' && $scope.filter.color && $scope.filter.color != '') {
      $scope.loadProduct($scope.filter);
    }
  }

  $scope.onSizeClick = function(size) {
    _.each($scope.sizes, function(n) {
      n.style = "";
    });
    if (size.state != 'canceled') {
      size.style = "size-selected";
      $scope.filter.size = size.id;
      if ($scope.filter.size && $scope.filter.size != '' && $scope.filter.color && $scope.filter.color != '') {
        $scope.loadProduct($scope.filter);
      }
    }
  }
  $scope.loadProduct = function(filter) {
    $scope.outofstock = false;
    filter.design = $stateParams.design;
    NavigationService.getProductDetails(filter, function(data, status) {
      cfpLoadingBar.complete();
      if (data.product != '') {
        data.product.image = data.productdesignimage;
        console.log(data.product.image);
        if (data.product.quantity === "0") {
          $scope.outofstock = true;
        }
        // _.each(data.product, function(n, key) {
        //   if (key.split('image')[1]) {
        //     console.log(n);
        //     data.product.image.push(n);
        //   }
        // })
        $scope.viewImage = data.product.image1;
        NavigationService.getAllSize(function(data1) {

          _.each(data.size, function(n, key1) {
            _.each(data1, function(m, key2) {

              if (n.id == m.id) {
                m.state = "";

              } else {
                console.log(m.state);
                if (!m.state && m.state != '') {
                  m.state = "canceled";
                }
              }
              if (m.id == data.product.size) {
                $scope.filter.size = n.id;
                m.style = "size-selected";
              }
            });
            //					if (key1 == data.sportname.length - 1) {
            //						$scope.checkmenu = true;
            //						demo = 1;
            //						//                    $scope.loadStudents();
            //					}


          });


          //	set size canceled
          //				_.each(data1, function (n, key) {
          //						if (data.size && data.size != '') {
          //							_.each(data.size, function (m, key1) {
          //								if (n.id == m.id) {
          //									n.status = "";
          //								} else {
          //									n.status = "canceled";
          //								}
          //								if(n.id==data.product.size){
          //									$scope.filter.size = n.id;
          //									n.style = "color:#FC483F";
          //								}
          //							})
          //						} else {
          //							n.status = "canceled";
          //						}
          //					})
          //	set color selected
          _.each(data.color, function(n, key) {
            if (n.id == data.product.color) {
              n.selected = "selected";
              $scope.filter.color = n.id;
            } else {
              n.selected = "";
            }
          })
          $scope.sizes = data1;


          $scope.product = data;
        });
        $scope.filter.product = data.product.id;
      } else {
        $scope.outofstock = true;
      }
    });
  }
  $scope.loadProduct($scope.filter);

  $scope.otherImage = function(image) {
    $scope.viewImage = image.image;
  }

  //	ADD TO BAG
  $scope.addToCart = function() {
    if ($scope.filter.size != "") {
      $scope.filter.design = $stateParams.design;
      NavigationService.addToCart($scope.filter, function(data, status) {
        console.log(data);
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

  //    sizechart popup
  $scope.sizeChart = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/sizechart.html',
      controller: 'ProductViewCtrl'
    })
  }

  //	ADD TO WISHLIST
  $scope.addToWishlist = function() {
    if (NavigationService.getUser()) {
      $scope.filter.design = $stateParams.design;
      NavigationService.addToWishlist($scope.filter, function(data, status) {
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



.controller('ContactCtrl', function($scope, TemplateService, NavigationService) {

  $scope.template = TemplateService.changecontent("contact");
  $scope.menutitle = NavigationService.makeactive("Contact Us");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.alerts = [];

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.contact = {};

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
      NavigationService.usercontact(contact, function(data, status) {
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
  $scope.profile = {};
  $scope.profile.nameemailedit = 'edit';
  $scope.profile.changepasswordedit = 'edit';
  $scope.profile.billingaddressedit = 'edit';
  $scope.profile.shippingaddressedit = 'edit';
  $scope.password = {};
  $scope.alerts = [];
  $scope.countries = countries;
  $scope.updateuser = {};
  $scope.updateuser.user = {};

  if (!NavigationService.getUser()) {
    $state.go("home");
  }

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.myProfile = {};
  NavigationService.getUserDetails(function(data) {
    console.log(data);
    $scope.user = data;
    $scope.updateuser.user = data;
  });

  $scope.saveUser = function() {
    NavigationService.updateProfile($scope.updateuser.user, function(data) {
      console.log(data);
    })
  }

  $scope.editProfile = function(num) {
    switch (num) {
      case 1:
        {
          console.log("name email");
          console.log($scope.profile.nameemailedit);
          if ($scope.profile.nameemailedit == 'edit') {
            $scope.profile.nameemailedit = 'save';
          } else {
            $scope.profile.nameemailedit = 'edit';
            $scope.saveUser()
          }
        }
        break;
      case 2:
        {
          if ($scope.profile.changepasswordedit == 'edit') {
            $scope.profile.changepasswordedit = 'save';
          } else {
            $scope.allvalidation = [{
              field: $scope.password.oldpassword,
              validation: ""
            }, {
              field: $scope.password.newpassword,
              validation: ""
            }, {
              field: $scope.password.confirmpassword,
              validation: ""
            }];

            var check = formvalidation($scope.allvalidation);
            if (check) {
            if ($scope.password.newpassword === $scope.password.confirmpassword) {
              if ($scope.password.newpassword === $scope.password.confirmpassword === $scope.password.oldpassword) {
                $scope.addAlert("danger", "No change in password.");
              }else {
                NavigationService.changePassword($scope.password, function(data) {
                  console.log(data);
                  if (data == 1) {
                    $scope.addAlert("success", "Password changed successfully. ");
                    $scope.profile.changepasswordedit = 'edit';
                    $scope.password = {};
                  } else {
                    $scope.addAlert("danger", "Wrong password");
                  }
                });
              }
            } else {
              $scope.addAlert("danger", "Re-entered password should be same as new password.");
            }
          }else {
            $scope.addAlert("danger", "Please Fill All Fields.");
          }
          }
        }
        break;
      case 3:
        {
          if ($scope.profile.billingaddressedit == 'edit') {
            $scope.profile.billingaddressedit = 'save';
          } else {
            $scope.allvalidation = [];
            $scope.allvalidation = [{
              field: $scope.updateuser.user.billingline1,
              validation: ""
            }, {
              field: $scope.updateuser.user.billingcity,
              validation: ""
            }, {
              field: $scope.updateuser.user.billingpincode,
              validation: ""
            }, {
              field: $scope.updateuser.user.billingstate,
              validation: ""
            }, {
              field: $scope.updateuser.user.billingcountry,
              validation: ""
            }];

            var check = formvalidation($scope.allvalidation);
            if (check) {
              $scope.saveUser();
              $scope.profile.billingaddressedit = 'edit';
            } else {
              $scope.addAlert("danger", "Enter Manditory Fields.");
            }
          }
        }
        break;
      case 4:
        {
          if ($scope.profile.shippingaddressedit == 'edit') {
            $scope.profile.shippingaddressedit = 'save';
          } else {
            $scope.allvalidation = [];
            $scope.allvalidation = [{
              field: $scope.updateuser.user.shippingline1,
              validation: ""
            }, {
              field: $scope.updateuser.user.shippingcity,
              validation: ""
            }, {
              field: $scope.updateuser.user.shippingpincode,
              validation: ""
            }, {
              field: $scope.updateuser.user.shippingstate,
              validation: ""
            }, {
              field: $scope.updateuser.user.shippingcountry,
              validation: ""
            }];

            var check = formvalidation($scope.allvalidation);
            if (check) {
              $scope.saveUser();
              $scope.profile.shippingaddressedit = 'edit';
            } else {
              $scope.addAlert("danger", "Enter Manditory Fields.");
            }
          }
        }
        break;
      default:
        {

        }
    }
  }


  $scope.assign = function(sameasbilling, line1, line2, line3, city, pincode, state, country) {
    console.log("sdfasdfs");
    if (sameasbilling == true) {
      console.log("intrue");
      $scope.updateuser.user.shippingline1 = line1;
      $scope.updateuser.user.shippingline2 = line2;
      $scope.updateuser.user.shippingline3 = line3;
      $scope.updateuser.user.shippingcity = city;
      $scope.updateuser.user.shippingpincode = pincode;
      $scope.updateuser.user.shippingstate = state;
      $scope.updateuser.user.shippingcountry = country;
    }
  }


  $scope.sameAsBilling = function(sameasbilling) {
    console.log(sameasbilling);
    if (sameasbilling == true) {
      $scope.assign(true, $scope.updateuser.user.billingline1, $scope.updateuser.user.billingline2, $scope.updateuser.user.billingline3, $scope.updateuser.user.billingcity, $scope.updateuser.user.billingpincode, $scope.updateuser.user.billingstate, $scope.updateuser.user.billingcountry);
    }
  }

})

.controller('OrderCtrl', function($scope, TemplateService, NavigationService, $state) {

  $scope.template = TemplateService.changecontent("order");
  $scope.menutitle = NavigationService.makeactive("Orders");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.orders = [];
  $scope.lastpage = 0;
  $scope.pageno = 0;
  $scope.msg = "Loading...";

  if (!NavigationService.getUser()) {
    $state.go("home");
  }
  NavigationService.fedexTrack('',function(data){
    console.log(data.TrackPackagesResponse.packageList[0]);
  })
  $scope.loadOrders = function() {
    if ($scope.lastpage >= $scope.pageno) {
      ++$scope.pageno;
      NavigationService.getorders($scope.pageno, function(data) {
        _.each(data.queryresult, function(n) {
          $scope.orders.push(n);
        })
        $scope.lastpage = data.lastpage;
      });
      if ($scope.orders=='') {
        $scope.msg = "No Orders.";
      }else {
        $scope.msg = "";
      }
    }

  }
  $scope.loadOrders();
  $scope.loadProducts = function() {
    $scope.loadOrders();
  }

})

.controller('CartCtrl', function($scope, TemplateService, NavigationService, $stateParams, $state) {

  $scope.template = TemplateService.changecontent("cart");
  $scope.menutitle = NavigationService.makeactive("Cart");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.allCart = [];
  $scope.alerts = [];
  $scope.amount = 0;
  $scope.msg = "Loading...";

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };
  $scope.checkoutCheck = function() {
    NavigationService.checkoutCheck(function(data) {
      console.log(data);
      if (data === "true") {
        console.log("here");
        $state.go("checkout");
      } else {
        $scope.addAlert('danger', 'Remove out of stock items and proceed.');
      }
    });
  };
  $scope.isNoCart = function() {
    if ($scope.allCart == '') {
      $state.go('home');
    }
  }
  $scope.validateQuantity = function(cart) {
    if (parseInt(cart.qty) > parseInt(cart.maxQuantity)) {
      return true;
    } else {
      return false;
    }
  }
  $scope.loadcart = function() {
    NavigationService.showCart(function(data, status) {
      $scope.allCart = data;
      console.log("afsdfasdf");
      _.each($scope.allCart, function(n) {
        n.exceeds = $scope.validateQuantity(n);
        if (n.options.json) {
          n.json = JSON.parse(n.options.json);
          console.log(n.json);
        }
      })
      console.log($scope.allCart);
      if (data == 0) {
        $scope.msg = "Cart is empty.";
      } else {
        $scope.msg = "";
      }
      //			$scope.isNoCart();
    })
  }

  $scope.loadcart();

  $scope.deleteCart = function(cart) {
    console.log(cart);
    NavigationService.deletecart(cart.id, cart.design, function(data, status) {
      $scope.loadcart();
      myfunction();
      $scope.inTotalCart();
      //				$scope.isNoCart();
    })
  }
  $scope.inTotalCart = function() {
    NavigationService.totalcart(function(data) {
      $scope.amount = data;
    });
  }
  $scope.inTotalCart();

})


.controller('ConfirmationmailCtrl', function($scope, TemplateService, NavigationService) {

  $scope.template = TemplateService.changecontent("confirmationmail");
  $scope.menutitle = NavigationService.makeactive("Confirmationmail");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;

})


.controller('CheckoutCtrl', function($scope, TemplateService, NavigationService, $state, $timeout, $interval) {

  $scope.template = TemplateService.changecontent("checkout");
  $scope.menutitle = NavigationService.makeactive("Checkout");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.login = {};
  $scope.sameasbilling = false;
  $scope.checkout = {};
  $scope.checkout.payment_mode = "";
  $scope.shippingaddress = {};
  $scope.billingaddress = {};
  $scope.register = {};
  $scope.predetail = {};
  $scope.order = "";
  $scope.mainurl = mainurlpaymentgateway;
  $scope.adminurl = adminurl;

  $scope.alerts = [];
  if (NavigationService.getUser()) {
    NavigationService.getUserDetails(function(data) {
      $scope.checkout = data;
    });
  }

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };
  $scope.validateQuantity = function(cart) {
    if (parseInt(cart.qty) > parseInt(cart.maxQuantity)) {
      return true;
    } else {
      return false;
    }
  };
  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.checkoutAsGuest = function(asguest) {
    if (asguest == true) {
      $timeout(function() {
        $scope.tabchange('step2', 2);
      }, 1000);

    }
  }

  $scope.loadCart = function() {
    NavigationService.totalcart(function(data) {
      $scope.amount = data;
    });
    NavigationService.showCart(function(data, status) {
      $scope.allCart = data;
      _.each($scope.allCart, function(key) {
        key.exceeds = $scope.validateQuantity(key);
      });
      if (data == 0) {
        $scope.msg = "Cart is empty.";
      } else {
        $scope.msg = "";
      }
      //			$scope.isNoCart();
    })
  }
  $scope.checkoutCheck = function() {
    NavigationService.checkoutCheck(function(data) {
      console.log(data);
      if (data == "true") {
        $scope.tabchange('step3', 3);
      } else {
        $scope.addAlert('danger', 'Remove out of stock items and proceed.');
        $timeout(function() {
          $state.go("cart");
        }, 3000);
      }
    });
  };
  $scope.tabchange = function(tab, a) {
    //        console.log(tab);

    if (a == 1) {
      $scope.tab = tab;
      if (!NavigationService.getUser()) {
        $scope.classa = "yellow-btn";
        $scope.classb = '';
        $scope.classc = '';
        $scope.classd = '';
      } else {
        $scope.tabchange('step2', 2);
      }
    } else if (a == 2) {
      $scope.tab = tab;
      $scope.classa = '';
      $scope.classb = "yellow-btn";
      $scope.classc = '';
      $scope.classd = '';
      $scope.loadCart();
    } else if (a == 3) {
      $scope.tab = tab;
      $scope.classa = '';
      $scope.classb = '';
      $scope.classc = "yellow-btn";
      $scope.classd = '';
    } else {
      $scope.allvalidation = [{
        field: $scope.checkout.firstname,
        validation: ""
      }, {
        field: $scope.checkout.lastname,
        validation: ""
      }, {
        field: $scope.checkout.phone,
        validation: ""
      }, {
        field: $scope.checkout.email,
        validation: ""
      }, {
        field: $scope.checkout.billingline1,
        validation: ""
      }, {
        field: $scope.checkout.billingline2,
        validation: ""
      }, {
        field: $scope.checkout.billingline3,
        validation: ""
      }, {
        field: $scope.checkout.billingcity,
        validation: ""
      }, {
        field: $scope.checkout.billingpincode,
        validation: ""
      }, {
        field: $scope.checkout.billingstate,
        validation: ""
      }, {
        field: $scope.checkout.billingcountry,
        validation: ""
      }, {
        field: $scope.checkout.shippingline1,
        validation: ""
      }, {
        field: $scope.checkout.shippingline2,
        validation: ""
      }, {
        field: $scope.checkout.shippingline3,
        validation: ""
      }, {
        field: $scope.checkout.shippingcity,
        validation: ""
      }, {
        field: $scope.checkout.shippingpincode,
        validation: ""
      }, {
        field: $scope.checkout.shippingstate,
        validation: ""
      }, {
        field: $scope.checkout.shippingcountry,
        validation: ""
      }];

      var check = formvalidation($scope.allvalidation);
      if (check) {
        $scope.tab = tab;
        $scope.checkout.cart = $scope.allCart;
        NavigationService.placeOrder($scope.checkout, function(data) {
          if (data != 0) {
            $scope.order = data;
            $scope.checkout.billingaddress = $scope.checkout.billingline1 + "," + $scope.checkout.billingline2 + "," + $scope.checkout.billingline3;
            $scope.checkout.shippingaddress = $scope.checkout.shippingline1 + "," + $scope.checkout.shippingline2 + "," + $scope.checkout.shippingline3;
            NavigationService.setOrder(data);
            $scope.classa = '';
            $scope.classb = '';
            $scope.classc = '';
            $scope.classd = "yellow-btn";
          } else {
            $scope.tab = "step3";
          }

        })
      } else {
        $scope.addAlert("danger", "Please enter all Information");
      }


      // checkout cade goes here..

    }
  };
  $scope.tabchange('step1', 1);

  $scope.assign = function(line1, line2, line3, city, pincode, state, country) {
    $scope.checkout.shippingline1 = line1;
    $scope.checkout.shippingline2 = line2;
    $scope.checkout.shippingline3 = line3;
    $scope.checkout.shippingcity = city;
    $scope.checkout.shippingpincode = pincode;
    $scope.checkout.shippingstate = state;
    $scope.checkout.shippingcountry = country;
  }

  $scope.shippingchange = function(data, num) {
    switch (num) {
      case 1:
        {
          $scope.predetail.shippingline1 = data;
        }
        break;
      case 2:
        {
          $scope.predetail.shippingline2 = data;
        }
        break;
      case 3:
        {
          $scope.predetail.shippingline3 = data;
        }
        break;
      case 4:
        {
          $scope.predetail.shippingcity = data;
        }
        break;
      case 5:
        {
          $scope.predetail.shippingpincode = data;
        }
        break;
      case 6:
        {
          $scope.predetail.shippingstate = data;
        }
        break;
      case 7:
        {
          $scope.predetail.shippingcountry = data;
        }
        break;
      default:
        {}

    }
  }

  $scope.sameAsBilling = function(sameasbilling) {

    if (sameasbilling == true) {
      $scope.assign($scope.checkout.billingline1, $scope.checkout.billingline2, $scope.checkout.billingline3, $scope.checkout.billingcity, $scope.checkout.billingpincode, $scope.checkout.billingstate, $scope.checkout.billingcountry);

    } else {
      $scope.assign($scope.predetail.shippingline1, $scope.predetail.shippingline2, $scope.predetail.shippingline3, $scope.predetail.shippingcity, $scope.predetail.shippingpincode, $scope.predetail.shippingstate, $scope.predetail.shippingcountry);
    }
  }



  $scope.checkoutLogin = function() {
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
      NavigationService.login($scope.login, function(data) {
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


  $scope.checkoutRegister = function() {
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
        NavigationService.registerUser($scope.register, function(data) {
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

  // GOOGLE AND FACEBOOK LOGIN
  var checktwitter = function(data, status) {
    if (data != "false") {
      $interval.cancel(stopinterval);
      ref.close();
      NavigationService.authenticate(authenticatesuccess);
    } else {

    }

  };

  var callAtIntervaltwitter = function() {
    NavigationService.authenticate(checktwitter);
  };
  var authenticatesuccess = function(data, status) {
    if (data != "false") {
      $.jStorage.set("user", data);
      user = data;
      $state.go('checkout');
      window.location.reload();
    }
  };

  $scope.facebooklogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Facebook?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }
  $scope.googlelogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Google?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }

  $scope.twitterlogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Twitter?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }

})


.controller('WishlistCtrl', function($scope, TemplateService, NavigationService, $state) {

  $scope.template = TemplateService.changecontent("wishlist");
  $scope.menutitle = NavigationService.makeactive("Wishlist");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.alerts = [];
  $scope.pageno = 0;
  $scope.lastpage = 0;
  $scope.msg = "Loading...";
  $scope.wishlistProduct = [];

  if (!NavigationService.getUser()) {
    $state.go("home");
  }

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  // GET WISHLISTw
  $scope.loadWishlist = function() {
    if ($scope.lastpage >= $scope.pageno) {
      ++$scope.pageno;
      NavigationService.showWishlist($scope.pageno, function(data, status) {
        _.each(data.queryresult, function(n){
          $scope.wishlistProduct.push(n);
        });
        $scope.lastpage = data.lastpage;
        if ($scope.wishlistProduct=='') {
          $scope.msg = "Your wishlist is currently empty.";
        }else {
          $scope.msg = "";
        }
      });

    }
  }
  $scope.loadWishlist();

  $scope.loadProducts = function(){
    $scope.loadWishlist();
  }

  $scope.removeFromWishlist = function(mywish) {
    NavigationService.removeFromWishlist(mywish.id, mywish.designId, function(data) {
      $scope.loadWishlist();
      $scope.wishlistProduct = [];
      $scope.pageno = 0;
      $scope.lastpage = 0;
    })
  }

  $scope.addToCart = function(mywish) {
    console.log(mywish);
    if (mywish.size != "") {
      mywish.product = mywish.id;
      mywish.design = mywish.designId;
      mywish.quantity = 1;
      NavigationService.addToCart(mywish, function(data, status) {
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


})


.controller('CustomCreateCtrl', function($scope, TemplateService, NavigationService, $filter, $uibModal, $http, $upload, $timeout, $filter, $stateParams, cfpLoadingBar) {

  $scope.template = TemplateService.changecontent("custom-create");
  $scope.menutitle = NavigationService.makeactive("Custom");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.footerBlack = true;
  $scope.showSize = true;
  $scope.showSize1 = true;
  $scope.showFirst = true;
  $scope.showSecond = true;
  $scope.first = false;
  $scope.second = false;
  $scope.third = false;
  $scope.filter = {};
  $scope.filter.custom = [{
    "id": 1,
    "text": "",
    "state":false,
    "css": {
      "z-index": 1
    }
  }, {
    "id": 2,
    "text": "",
    "state":false,
    "css": {
      "z-index": 2
    }
  }, {
    "id": 3,
    "text": "",
    "state":false,
    "css": {
      "z-index": 1
    }
  }, {
    "id": 4,
    "text": "",
    "state":false,
    "css": {
      "z-index": 2
    }
  },{
    "id": 5,
    "text": "",
    "state":false,
    "css": {
      "z-index": 3
    }
  },{
    "id": 6,
    "text": "",
    "state":false,
    "css": {
      "z-index": 3
    }
  }];
  $scope.filter.type = $stateParams.id;
  $scope.filter.color = "";
  $scope.filter.size = "";
  $scope.filter.price = "";
  $scope.filter.image1 = myImage;
  $scope.filter.image = {};
  $scope.filter.image = myImage;
  $scope.filter.distance = 1;
  $scope.filter.angle = 1;
  $scope.type = $stateParams.id;
  $scope.shadowColor = "";
  $scope.selectedJustify = "center";
  // $scope.strokeWidth = 5;
  $scope.color = "";
  // $scope.filter.
  // modal
  $scope.tab = {};
  $scope.tab.editpro = true;
  $scope.tab.addimage = false;
  $scope.tab.addtext = false;
  $scope.tab.buy = false;
  $scope.nostockquantity = false;
  $scope.design = {};
  $scope.alerts = [];
  $scope.clr = 'red';
  cfpLoadingBar.start();

  myfunc = $scope;

  $scope.deleteElement = function(elm,num,reset){
    switch (num) {
      case 0:
        {
          if (reset==="") {
            elm.text = "";
            elm.css = {
              "font-size": "100px",
              "z-index": 2
            }
          }else {
            $texts = $('.movetext');
            $texts.eq(reset).css("top","0px");
            $texts.eq(reset).css("left","0px");
          }
        }
        break;
        case 1:
          {
            if (reset==1) {
              var img = $('.movefirstimage');
              img.eq(0).css("top","0px")
              img.eq(0).css("left","0px")
            }else {
              $scope.filter.image.image = "";
              elm.css = {
                "height": "100px",
                "z-index": 3
              }
            }

          }
          break;
          case 2:
            {
              if (reset==1) {
                var img = $('.movesecondimage');
                img.eq(0).css("top","0px")
                img.eq(0).css("left","0px")
              }else {
                $scope.filter.image.image1 = "";
                elm.css = {
                  "height": "100px",
                  "z-index": 3
                }
              }
            }
            break;
      default:

    }
  }

  $scope.deselectAll = function(){
    _.each($scope.filter.custom, function(n){
      n.state = false;
    });
  }

  $scope.showDelete = function(cust){
    console.log("trudkfjhaldjskfhlkj");
    _.each($scope.filter.custom, function(n){
      n.state = false;
    });
    cust.state = true;
  }


  $scope.bringForward = function(maindata, data) {
    _.merge(maindata.css, {
      "position": "relative",
      "z-index": 2
    });
    _.merge(data.css, {
      "position": "relative",
      "z-index": 1
    });
  }
  $scope.sendBackward = function(maindata, data) {

    _.merge(maindata.css, {
      "position": "relative",
      "z-index": 1
    });
    _.merge(data.css, {
      "position": "relative",
      "z-index": 2
    });
  }

  $scope.changeDesign = function() {
    _.each($scope.imageSetting, function(n){
      n.value++;
    })
    _.each($scope.imageSetting, function(n){
      n.value--;
    })
    _.each($scope.imageSetting1, function(n){
      n.value++;
    })
    _.each($scope.imageSetting1, function(n){
      n.value--;
    })


    _.each($scope.items, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    _.each($scope.items, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }
    });
    _.each($scope.items1, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    _.each($scope.items1, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }
    });
    _.each($scope.items2, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    _.each($scope.items2, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }
    });
    _.each($scope.items3, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    _.each($scope.items3, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }
    });

    _.each($scope.design.design, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    $scope.$apply();
    _.each($scope.design.design, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }

    });
    _.each($scope.design.design1, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    $scope.$apply();
    _.each($scope.design.design1, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }

    });
    _.each($scope.design.design2, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    $scope.$apply();
    _.each($scope.design.design2, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }

    });
    _.each($scope.design.design3, function(n) {
      if (n.name != 'Arc') {
        n.value++;
      }
    });
    $scope.$apply();
    _.each($scope.design.design3, function(n) {
      if (n.name != 'Arc') {
        n.value--;
      }

    });
    $scope.$apply();
  };

  // myImage = {image: ""};
  $scope.validateQuantity = function(data) {
    $scope.nostockquantity = false;
    if ($scope.filter.quantity > parseInt(data.quantity)) {
      $scope.nostockquantity = true;
    } else {
      $scope.nostockquantity = false;

    }
  };

  function calculateTextShadow(angle, distance, num) {
    switch (num) {
      case 0:
        if ($scope.shadowColor != '') {
          angle = angle * ((Math.PI) / 180);
          x = Math.round(distance * Math.cos(angle));
          y = Math.round(distance * Math.sin(angle));
          var mi = x + 'px ' + y + 'px 10px ' + $scope.shadowColor;
          _.merge($scope.filter.custom[0].css, {
            "text-shadow": mi
          });
        }
        break;
      case 1:
        if ($scope.shadowColor1 != '') {
          angle = angle * ((Math.PI) / 180);
          x = Math.round(distance * Math.cos(angle));
          y = Math.round(distance * Math.sin(angle));
          var mi = x + 'px ' + y + 'px 10px ' + $scope.shadowColor1;
          _.merge($scope.filter.custom[1].css, {
            "text-shadow": mi
          });
        }
        break;
      case 2:
        if ($scope.shadowColor2 != '') {
          angle = angle * ((Math.PI) / 180);
          x = Math.round(distance * Math.cos(angle));
          y = Math.round(distance * Math.sin(angle));
          var mi = x + 'px ' + y + 'px 10px ' + $scope.shadowColor2;
          _.merge($scope.filter.custom[2].css, {
            "text-shadow": mi
          });
        }
        break;
      case 3:
        if ($scope.shadowColor3 != '') {
          angle = angle * ((Math.PI) / 180);
          x = Math.round(distance * Math.cos(angle));
          y = Math.round(distance * Math.sin(angle));
          var mi = x + 'px ' + y + 'px 10px ' + $scope.shadowColor3;
          _.merge($scope.filter.custom[3].css, {
            "text-shadow": mi
          });
        }
        break;
      default:

    }

  }

  $scope.addAlert = function(type, msg) {
    $scope.alerts[0] = {
      type: type,
      msg: msg
    };
  };

  $scope.closeAlert = function(index) {
    $scope.alerts.splice(index, 1);
  };

  $scope.tabchange = function(tab) {
    switch (tab) {
      case 2:
        {
          $scope.isfront = true;
          $scope.tab.editpro = false;
          $scope.tab.addimage = true;
          $scope.tab.addtext = false;
          $scope.tab.buy = false;
        }
        break;
      case 3:
        {
          console.log("text text");
          $scope.isfront = false;
          $scope.tab.editpro = false;
          $scope.tab.addimage = false;
          $scope.tab.addtext = true;
          $scope.tab.buy = false;
        }
        break;
      case 4:
        {
          $scope.tab.editpro = false;
          $scope.tab.addimage = false;
          $scope.tab.addtext = false;
          $scope.tab.buy = true;
        }
        break;
      default:
        {
          $scope.tab.editpro = false;
          $scope.tab.addimage = false;
          $scope.tab.addtext = false;
          $scope.tab.buy = true;
          $scope.showSecond = true;
        }

    }
  }

  $scope.saveDesign = function(){
    var design = $('#tango').html();
    console.log(design);
    design = "<html><head><base href='http://192.168.0.122/images/' target ='_blank'><link rel='stylesheet' href='main.scss'></head><body style='background-color: red;'>"+design+"</body></html>";
    NavigationService.createImage(design,function(data){
      console.log(data);
    })
  }

  $scope.loadProduct = function() {
    NavigationService.getImageForCustomize($scope.filter.type, $scope.filter.color, function(data) {
      $scope.outofstock = false;
      console.log(data);
      cfpLoadingBar.complete();
      $scope.color = data.color;
      _.each($scope.color, function(n) {
        n.class = "";
      });
      if (parseInt(data.image.quantity) <= 0) {
        $scope.outofstock = true;
      }
      $scope.images = data.image;
      if ($scope.images.id) {
        $scope.filter.id = $scope.images.id;
      }
      $scope.size = data.size;
      if ($scope.size.length > 1) {
        $scope.sizelength = $scope.size[$scope.size.length - 1];
      }

      $scope.custom = {
        frontSrc: $filter('serverimage')(data.image.image1),
        backSrc: $filter('serverimage')(data.image.image2)
      };
    });
  }

  $scope.loadProduct();

  //T-shirt front-back
  $scope.isfront = true;
  $scope.textchange = function() {
    $scope.isfront = true;
  }
  $scope.textchange1 = function() {
    $scope.isfront = false;
  }
  $scope.colorText = function(col, num) {
    switch (num) {
      case 1:
        {
          _.merge($scope.filter.custom[0].css, {
            "color": col
          });
        }
        break;
      case 2:
        {
          _.merge($scope.filter.custom[1].css, {
            "color": col
          });
        }
        break;
      case 3:
        {
          _.merge($scope.filter.custom[2].css, {
            "color": col
          });
        }
        break;
      case 4:
        {
          _.merge($scope.filter.custom[3].css, {
            "color": col
          });
        }
        break;
      default:

    }

  }
  $scope.strokeText = function(col, num) {
    switch (num) {
      case 0:
        {
          _.merge($scope.filter.custom[0].css, {
            '-webkit-text-stroke-color': col.color
          });
        }
        break;
      case 1:
        {
          _.merge($scope.filter.custom[1].css, {
            '-webkit-text-stroke-color': col.color
          });
        }
        break;
      case 2:
        {
          _.merge($scope.filter.custom[2].css, {
            '-webkit-text-stroke-color': col.color
          });
        }
        break;
      case 3:
        {
          _.merge($scope.filter.custom[3].css, {
            '-webkit-text-stroke-color': col.color
          });
        }
        break;
      default:

    }

  }
  $scope.strokeRemoveText = function() {
    _.merge($scope.filter.css, {
      "-webkit-text-stroke-color": ''
    });
  }
  $scope.shadowText = function(col, num) {

    switch (num) {
      case 0:
        {
          $scope.shadowColor = col.color;
          calculateTextShadow($scope.items[1].value, $scope.items[0].value, num);
        }
        break;
      case 1:
        {
          $scope.shadowColor1 = col.color;
          calculateTextShadow($scope.items1[1].value, $scope.items1[0].value, num);
        }
        break;
      case 2:
        {
          $scope.shadowColor2 = col.color;
          calculateTextShadow($scope.items2[1].value, $scope.items2[0].value, num);
        }
        break;
      case 3:
        {
          $scope.shadowColor3 = col.color;
          calculateTextShadow($scope.items3[1].value, $scope.items3[0].value, num);
        }
        break;
      default:

    }

  }
  $scope.shadowRemoveText = function() {
      $scope.shadowColor = "";
      _.merge($scope.filter.css, {
        "text-shadow": ''
      });
    }
    // distance and angle of shadow
  $scope.$watch('items[0].value', function(newValue, oldValue) {
    $scope.filter.custom[0].shadowDistance = newValue;
    calculateTextShadow($scope.items[1].value, newValue, 0);
  });

  $scope.$watch('items[1].value', function(newValue, oldValue) {
    $scope.filter.custom[0].shadowAngle = newValue;
    calculateTextShadow(newValue, $scope.items[0].value, 0);
  });
  // distance and angle of shadow
  // distance and angle of shadow
  $scope.$watch('items1[0].value', function(newValue, oldValue) {
    $scope.filter.custom[1].shadowDistance = newValue;
    calculateTextShadow($scope.items[1].value, newValue, 1);
  });

  $scope.$watch('items1[1].value', function(newValue, oldValue) {
    $scope.filter.custom[1].shadowAngle = newValue;
    calculateTextShadow(newValue, $scope.items[0].value, 1);
  });
  // distance and angle of shadow
  // distance and angle of shadow
  $scope.$watch('items2[0].value', function(newValue, oldValue) {
    $scope.filter.custom[2].shadowDistance = newValue;
    calculateTextShadow($scope.items[1].value, newValue, 2);
  });

  $scope.$watch('items2[1].value', function(newValue, oldValue) {
    $scope.filter.custom[2].shadowAngle = newValue;
    calculateTextShadow(newValue, $scope.items[0].value, 2);
  });
  // distance and angle of shadow
  // distance and angle of shadow
  $scope.$watch('items3[0].value', function(newValue, oldValue) {
    $scope.filter.custom[3].shadowDistance = newValue;
    calculateTextShadow($scope.items[1].value, newValue, 3);
  });

  $scope.$watch('items3[1].value', function(newValue, oldValue) {
    $scope.filter.custom[3].shadowAngle = newValue;
    calculateTextShadow(newValue, $scope.items[0].value, 3);
  });
  // distance and angle of shadow

  $scope.isArcChange = false;
  $scope.$watch('filter.custom[0].text', function(newValue, oldValue) {
    $scope.filter.custom[0].text = newValue;
    if ($scope.isArcChange == true) {
      $('#example1').show().arctext({
        radius: newValue
      });
      $('#example1').arctext('destroy');
      // $('#example1').html($(this).val().replace(newValue));
    }

    // $scope.changeArc();
    // $('#example1').arctext({
    //   radius: 1100
    // });

  });

  $scope.changeArc = function(value, num) {
      var newValue = value;
      var pos;
      if (newValue > 0)
        pos = 1;
      else {
        pos = -1;
      }
      switch (num) {
        case 1:
          {
            var $example1 = $('#example1').hide();
          }
          break;
        case 2:
          {
            var $example1 = $('#example2').hide();
          }
          break;
        case 3:
          {
            var $example1 = $('#example3').hide();
          }
          break;
        case 4:
          {
            var $example1 = $('#example4').hide();
          }
          break;
        default:

      }

      $example1.show().arctext({
        radius: newValue
      });
      $example1.arctext('set', {
        radius: newValue,
        dir: pos,
        animation: {
          speed: 300,
          easing: 'ease-out'
        }
      });
    }
    // Start For First Text
  $scope.$watch('design.design[0].value', function(newValue, oldValue) {
    $scope.filter.custom[0].fontsize = newValue;
    _.merge($scope.filter.custom[0].css, {
      "font-size": newValue
    });
  });
  $scope.$watch('design.design[1].value', function(newValue, oldValue) {
    if (oldValue != newValue) {
      $scope.filter.custom[0].arc = newValue;
      $scope.isArcChange = true;
      $scope.changeArc($scope.design.design[1].value, 1);
    }

  });

  $scope.$watch('design.design[3].value', function(newValue, oldValue) {
    $scope.filter.custom[0].spacing = newValue;
    _.merge($scope.filter.custom[0].css, {
      "letter-spacing": newValue
    });
  });

  $scope.$watch('design.design[2].value', function(newValue, oldValue) {
    $scope.filter.custom[0].rotation = newValue;
    var scale = $scope.design.design[4].value;
    _.merge($scope.filter.custom[0].css, {
      "-webkit-transform": "rotate(" + newValue + "deg) scale(1," + scale / 100 + ")"
    });
  });

  $scope.$watch('items[3].value', function(newValue, oldValue) {
    $scope.filter.custom[0].stroke = newValue;
    _.merge($scope.filter.custom[0].css, {
      "-webkit-text-stroke-width": newValue
    });
  });

  $scope.$watch('design.design[4].value', function(newValue, oldValue) {
    $scope.filter.custom[0].strech = newValue;
    var rotate = $scope.design.design[2].value;
    _.merge($scope.filter.custom[0].css, {
      "-webkit-transform": "rotate(" + rotate + "deg) scale(1," + newValue / 100 + ")"
    });
  });
  // End For First Text
  // Start For Second Text
  $scope.$watch('design.design1[0].value', function(newValue, oldValue) {
    $scope.filter.custom[1].fontsize = newValue;
    _.merge($scope.filter.custom[1].css, {
      "font-size": newValue
    });
  });
  $scope.$watch('design.design1[1].value', function(newValue, oldValue) {
    if (oldValue != newValue) {
      $scope.filter.custom[1].arc = newValue;
    $scope.isArcChange = true;
    $scope.changeArc($scope.design.design1[1].value, 2);
  }
  });

  $scope.$watch('design.design1[3].value', function(newValue, oldValue) {
    $scope.filter.custom[1].spacing = newValue;
    _.merge($scope.filter.custom[1].css, {
      "letter-spacing": newValue
    });
  });

  $scope.$watch('design.design1[2].value', function(newValue, oldValue) {
    $scope.filter.custom[1].rotation = newValue;
    var scale = $scope.design.design1[4].value;
    _.merge($scope.filter.custom[1].css, {
      "-webkit-transform": "rotate(" + newValue + "deg) scale(1," + scale / 100 + ")"
    });
  });

  $scope.$watch('items1[3].value', function(newValue, oldValue) {
    $scope.filter.custom[1].stroke = newValue;
    _.merge($scope.filter.custom[1].css, {
      "-webkit-text-stroke-width": newValue
    });
  });

  $scope.$watch('design.design1[4].value', function(newValue, oldValue) {
    $scope.filter.custom[1].strech = newValue;
    var rotate = $scope.design.design1[2].value;
    _.merge($scope.filter.custom[1].css, {
      "-webkit-transform": "rotate(" + rotate + "deg) scale(1," + newValue / 100 + ")"
    });
  });
  // End For Second Text
  // Start For Third Text
  $scope.$watch('design.design2[0].value', function(newValue, oldValue) {
    $scope.filter.custom[2].fontsize = newValue;
    _.merge($scope.filter.custom[2].css, {
      "font-size": newValue
    });
  });
  $scope.$watch('design.design2[1].value', function(newValue, oldValue) {
    if (oldValue != newValue) {
      $scope.filter.custom[2].arc = newValue;
    $scope.isArcChange = true;
    $scope.changeArc($scope.design.design2[1].value, 3);
  }
  });

  $scope.$watch('design.design2[3].value', function(newValue, oldValue) {
    $scope.filter.custom[2].spacing = newValue;
    _.merge($scope.filter.custom[2].css, {
      "letter-spacing": newValue
    });
  });

  $scope.$watch('design.design2[2].value', function(newValue, oldValue) {
    $scope.filter.custom[2].rotation = newValue;
    var scale = $scope.design.design2[4].value;
    _.merge($scope.filter.custom[2].css, {
      "-webkit-transform": "rotate(" + newValue + "deg) scale(1," + scale / 100 + ")"
    });
  });

  $scope.$watch('items2[3].value', function(newValue, oldValue) {
    $scope.filter.custom[2].stroke = newValue;
    _.merge($scope.filter.custom[2].css, {
      "-webkit-text-stroke-width": newValue
    });
  });

  $scope.$watch('design.design2[4].value', function(newValue, oldValue) {
    $scope.filter.custom[2].strech = newValue;
    var rotate = $scope.design.design2[2].value;
    _.merge($scope.filter.custom[2].css, {
      "-webkit-transform": "rotate(" + rotate + "deg) scale(1," + newValue / 100 + ")"
    });
  });
  // End For Third Text
  // Start For Fourth Text
  $scope.$watch('design.design3[0].value', function(newValue, oldValue) {
    $scope.filter.custom[3].fontsize = newValue;
    _.merge($scope.filter.custom[3].css, {
      "font-size": newValue
    });
  });
  $scope.$watch('design.design3[1].value', function(newValue, oldValue) {
    if (oldValue != newValue) {
      $scope.filter.custom[3].arc = newValue;
    $scope.isArcChange = true;
    $scope.changeArc($scope.design.design3[1].value, 4);
  }
  });

  $scope.$watch('design.design3[3].value', function(newValue, oldValue) {
    $scope.filter.custom[3].spacing = newValue;
    _.merge($scope.filter.custom[3].css, {
      "letter-spacing": newValue
    });
  });

  $scope.$watch('design.design3[2].value', function(newValue, oldValue) {
    $scope.filter.custom[3].rotation = newValue;
    var scale = $scope.design.design3[4].value;
    _.merge($scope.filter.custom[3].css, {
      "-webkit-transform": "rotate(" + newValue + "deg) scale(1," + scale / 100 + ")"
    });
  });

  $scope.$watch('items3[3].value', function(newValue, oldValue) {
    $scope.filter.custom[3].stroke = newValue;
    _.merge($scope.filter.custom[3].css, {
      "-webkit-text-stroke-width": newValue
    });
  });

  $scope.$watch('design.design3[4].value', function(newValue, oldValue) {
    $scope.filter.custom[3].strech = newValue;
    var rotate = $scope.design.design3[2].value;
    _.merge($scope.filter.custom[3].css, {
      "-webkit-transform": "rotate(" + rotate + "deg) scale(1," + newValue / 100 + ")"
    });
  });
  // End For Fourth Text
  // Start image setting
  $scope.$watch('imageSetting[1].value', function(newValue, oldValue) {
    $scope.filter.custom[4].rotation = newValue;
    var rotate = $scope.imageSetting[1].value;
    _.merge($scope.filter.custom[4].css, {
      "-webkit-transform": "rotate(" + rotate + "deg)"
    });
  });
  $scope.$watch('imageSetting[0].value', function(newValue, oldValue) {
    _.merge($scope.filter.custom[4].css, {
      "height": newValue + "px"
    });
  });
  $scope.$watch('imageSetting1[1].value', function(newValue, oldValue) {
    $scope.filter.custom[5].rotation = newValue;
    var rotate = $scope.imageSetting1[1].value;
    _.merge($scope.filter.custom[5].css, {
      "-webkit-transform": "rotate(" + rotate + "deg)"
    });
  });
  $scope.$watch('imageSetting1[0].value', function(newValue, oldValue) {
    _.merge($scope.filter.custom[5].css, {
      "height": newValue + "px"
    });
  });
  // End image setting


  $scope.changeJustify = function(val) {
    console.log(val);
    _.merge($scope.filter.css, {
      "text-align": val
    });
  }

  //Text on Cloth
  $scope.imgText = {
    value: ""
  };

  //Select FONT
  $scope.showSelect = false;
  // $scope.productStyle = {
  // 	font-family: 'Advent Pro';
  // };
  $scope.fonts = [{
    family: "Advent Pro"
  }, {
    family: "Roboto"
  }, {
    family: "Slabo 27px"
  }, {
    family: "Roboto Condensed"
  }, {
    family: "Oswald"
  }, {
    family: "Fjalla One"
  }, {
    family: "Abel"
  }, {
    family: "Archivo Narrow"
  }, {
    family: "Ubuntu Condensed"
  }, {
    family: "Cuprum"
  }, {
    family: "Varela Round"
  }, {
    family: "Istok Web"
  }, {
    family: "News Cycle"
  }];

  $scope.showSelecter = function(num) {
    switch (num) {
      case 0:
        {
          $scope.showSelect = true;
        }
        break;
      case 1:
        {
          $scope.showSelect1 = true;
        }
        break;
      case 2:
        {
          $scope.showSelect2 = true;
        }
        break;
      case 3:
        {
          $scope.showSelect3 = true;
        }
        break;
      default:

    }

  };
  $scope.fontSelect = function(val, num) {
    switch (num) {
      case 0:
        {
          $scope.selectedFont = val;
          $scope.showSelect = false;
          $scope.filter.custom[0].font = val;
          _.merge($scope.filter.custom[0].css, {
            "font-family": val
          });
        }
        break;
      case 1:
        {
          $scope.selectedFont1 = val;
          $scope.showSelect1 = false;
          $scope.filter.custom[1].font = val;
          _.merge($scope.filter.custom[1].css, {
            "font-family": val
          });
        }
        break;
      case 2:
        {
          $scope.selectedFont2 = val;
          $scope.showSelect2 = false;
          $scope.filter.custom[2].font = val;
          _.merge($scope.filter.custom[2].css, {
            "font-family": val
          });
        }
        break;
      case 3:
        {
          $scope.selectedFont3 = val;
          $scope.showSelect3 = false;
          $scope.filter.custom[3].font = val;
          _.merge($scope.filter.custom[3].css, {
            "font-family": val
          });
        }
        break;
      default:

    }

  };

  $scope.changeColor = function(index, val) {
    $scope.showSize = false;
    $scope.showSize1 = false;
    $scope.showSize2 = false;
    $scope.showSize3 = false;
    // $scope.isfront = false;
    console.log(index);
    switch (val) {
      case 0:
        {
          switch (index) {
            case 0:
              {
                $scope.first = true;
                $scope.second = false;
                $scope.third = false;
              }
              break;
            case 1:
              {
                $scope.first = false;
                $scope.second = true;
                $scope.third = false;
              }
              break;
            case 2:
              {
                $scope.first = false;
                $scope.second = false;
                $scope.third = true;
              }
              break;

            default:

          }
        }
        break;
      case 1:
        {
          switch (index) {
            case 0:
              {
                $scope.first1 = true;
                $scope.second1 = false;
                $scope.third1 = false;
              }
              break;
            case 1:
              {
                $scope.first1 = false;
                $scope.second1 = true;
                $scope.third1 = false;
              }
              break;
            case 2:
              {
                $scope.first1 = false;
                $scope.second1 = false;
                $scope.third1 = true;
              }
              break;

            default:

          }
        }
        break;
      case 2:
        {
          switch (index) {
            case 0:
              {
                $scope.first2 = true;
                $scope.second2 = false;
                $scope.third2 = false;
              }
              break;
            case 1:
              {
                $scope.first2 = false;
                $scope.second2 = true;
                $scope.third2 = false;
              }
              break;
            case 2:
              {
                $scope.first2 = false;
                $scope.second2 = false;
                $scope.third2 = true;
              }
              break;

            default:

          }
        }
        break;
      case 3:
        {
          switch (index) {
            case 0:
              {
                $scope.first3 = true;
                $scope.second3 = false;
                $scope.third3 = false;
              }
              break;
            case 1:
              {
                $scope.first3 = false;
                $scope.second3 = true;
                $scope.third3 = false;
              }
              break;
            case 2:
              {
                $scope.first3 = false;
                $scope.second3 = false;
                $scope.third3 = true;
              }
              break;

            default:

          }
        }
        break;
      default:

    }

  }

  $scope.closeandshowsize = function() {
    $scope.showSize = !$scope.showSize;
    $scope.first = false;
    $scope.second = false;
    $scope.third = false;
  }

  $scope.closeandshowsize1 = function() {
    $scope.showSize1 = !$scope.showSize1;
    $scope.first1 = false;
    $scope.second1 = false;
    $scope.third1 = false;
  }

  $scope.closeandshowsize2 = function() {
    $scope.showSize2 = !$scope.showSize2;
    $scope.first2 = false;
    $scope.second2 = false;
    $scope.third2 = false;
  }

  $scope.closeandshowsize3 = function() {
    $scope.showSize3 = !$scope.showSize3;
    $scope.first3 = false;
    $scope.second3 = false;
    $scope.third3 = false;
  }

  $scope.showorfirst = function() {

    setInterval(function() {
      $scope.changeDesign();
    }, 100);
    $scope.showFirst = false;
  }
  $scope.showorfirst();

  $scope.closeorfirst = function() {
    $scope.showFirst = true;
  }
  $scope.showor = function() {
    console.log($scope.filter.size);
    if ($scope.filter.quantity && $scope.filter.size != '') {
      if ($scope.showSecond == true) {
        if ($scope.filter.custom[2].text!='' || $scope.filter.custom[3].text!='' || $scope.filter.image.image1!='') {
          console.log("in back");
          $scope.amount = (parseInt($scope.images.price) + parseInt(200)) * $scope.filter.quantity;
        }else {
          $scope.amount = $scope.images.price * $scope.filter.quantity;
        }
      }
      $scope.showSecond = !$scope.showSecond;
    } else {
      $scope.addAlert('danger', 'Enter valid quantity and size');
    }
  }

  $scope.size = [{
    src: "img/sizechart.jpg"
  }];

  $scope.tshirt = {
    name: "ULTRA COTTON TSHIRT",
    from: "YXS",
    to: "3XL"

  };

  $scope.changefont = function(data) {
    console.log(data);
  }

  // $scope.color = [{
  // 	color: "red",
  // 	class: "active"
  //
  //   }, {
  // 	color: "black",
  // 	class: ""
  //
  //   }, {
  // 	color: "grey",
  // 	class: ""
  //
  //   }, {
  // 	color: "cyan",
  // 	class: ""
  //
  //   }, {
  // 	color: "blue",
  // 	class: ""
  //
  //   }, {
  // 	color: "pink",
  // 	class: ""
  //
  //   }, {
  // 	color: "green",
  // 	class: ""
  //
  //   }, {
  // 	color: "orange",
  // 	class: ""
  //
  //   }];

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
  $scope.colors1 = [{
    color: "red",
    name: "COLOR",
  }, {
    color: "black",
    name: "STROKE"
  }, {
    color: "grey",
    name: "SHADOW"
  }];
  $scope.colors2 = [{
    color: "red",
    name: "COLOR",
  }, {
    color: "black",
    name: "STROKE"
  }, {
    color: "grey",
    name: "SHADOW"
  }];
  $scope.colors3 = [{
    color: "red",
    name: "COLOR",
  }, {
    color: "black",
    name: "STROKE"
  }, {
    color: "grey",
    name: "SHADOW"
  }];

  $scope.design.design = [{
    name: 'Size',
    value: 100,
    from: 10,
    to: 200,
    step: 1,
  }, {
    name: 'Arc',
    value: -1000,
    from: -1000,
    to: 1000,
    step: 1
  }, {
    name: 'Rotation',
    value: 0,
    from: 0,
    to: 360,
    step: 1
  }, {
    name: 'Spacing',
    value: 0,
    from: 0,
    to: 200,
    step: 1
  }, {
    name: 'Stetch',
    value: 40,
    from: 20,
    to: 200,
    step: 1
  }];

  $scope.design.design1 = [{
    name: 'Size',
    value: 100,
    from: 10,
    to: 200,
    step: 1,
  }, {
    name: 'Arc',
    value: -1000,
    from: -1000,
    to: 1000,
    step: 1
  }, {
    name: 'Rotation',
    value: 0,
    from: 0,
    to: 360,
    step: 1
  }, {
    name: 'Spacing',
    value: 0,
    from: 0,
    to: 200,
    step: 1
  }, {
    name: 'Stetch',
    value: 40,
    from: 20,
    to: 200,
    step: 1
  }];

  $scope.design.design2 = [{
    name: 'Size',
    value: 100,
    from: 10,
    to: 200,
    step: 1,
  }, {
    name: 'Arc',
    value: -1000,
    from: -1000,
    to: 1000,
    step: 1
  }, {
    name: 'Rotation',
    value: 0,
    from: 0,
    to: 360,
    step: 1
  }, {
    name: 'Spacing',
    value: 0,
    from: 0,
    to: 200,
    step: 1
  }, {
    name: 'Stetch',
    value: 40,
    from: 20,
    to: 200,
    step: 1
  }];

  $scope.design.design3 = [{
    name: 'Size',
    value: 100,
    from: 10,
    to: 200,
    step: 1,
  }, {
    name: 'Arc',
    value: -1000,
    from: -1000,
    to: 1000,
    step: 1
  }, {
    name: 'Rotation',
    value: 0,
    from: 0,
    to: 360,
    step: 1
  }, {
    name: 'Spacing',
    value: 0,
    from: 0,
    to: 200,
    step: 1
  }, {
    name: 'Stetch',
    value: 40,
    from: 20,
    to: 200,
    step: 1
  }];

  $scope.changedDis = function() {
    console.log("lkasdfj");
  }

  $scope.items = [{
    name: 'First Item',
    value: 20
  }, {
    name: 'Second Item',
    value: 1
  }, {
    name: 'Third Item',
    value: 700
  }, {
    name: 'fourth Item',
    value: 1
  }, {
    name: 'fifth Item',
    value: 10
  }];
  $scope.items1 = [{
    name: 'First Item',
    value: 20
  }, {
    name: 'Second Item',
    value: 1
  }, {
    name: 'Third Item',
    value: 700
  }, {
    name: 'fourth Item',
    value: 1
  }, {
    name: 'fifth Item',
    value: 10
  }];
  $scope.items2 = [{
    name: 'First Item',
    value: 20
  }, {
    name: 'Second Item',
    value: 1
  }, {
    name: 'Third Item',
    value: 700
  }, {
    name: 'fourth Item',
    value: 1
  }, {
    name: 'fifth Item',
    value: 10
  }];
  $scope.items3 = [{
    name: 'First Item',
    value: 20
  }, {
    name: 'Second Item',
    value: 1
  }, {
    name: 'Third Item',
    value: 700
  }, {
    name: 'fourth Item',
    value: 1
  }, {
    name: 'fifth Item',
    value: 10
  }];

  $scope.imageSetting = [{
    name: 'First Item',
    value: 100
  }, {
    name: 'Second Item',
    value: 1
  }];

  $scope.imageSetting1 = [{
    name: 'First Item',
    value: 100
  }, {
    name: 'Second Item',
    value: 1
  }];

  $scope.makeactive = function(color) {
    _.each($scope.color, function(n) {
      n.class = "";
    });
    color.class = "active";
    $scope.filter.color = color.id;
    $scope.loadProduct();

    // var i = 0;
    // _.each($scope.color, function (n) {
    // 	if (i == index) {
    // 		n.class = "active";
    // 	} else {
    // 		n.class = "";
    // 	}
    // 	i++;
    // })
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
  var imagempdel = '';
  $scope.imgUploadModal = function(isf) {
    $scope.isf = isf;
    imagempdel = $uibModal.open({
      animation: true,
      windowClass: 'large-Modal',
      templateUrl: 'views/modal/upload.html',
      scope: $scope
    })
  }

  $scope.imgUpload = function(isf) {
    $scope.isf = isf;
    $uibModal.open({
      animation: true,
      windowClass: 'large-Modal',
      templateUrl: 'views/modal/uploadimage.html',
      scope: $scope
    })
  }

  $scope.previewDesign = function(filter,custom) {
    $scope.filter1 = filter;
    $scope.custom1 = custom;
    $uibModal.open({
      animation: true,
      windowClass: 'large-Modal',
      templateUrl: 'views/modal/previewdesign.html',
      scope: $scope
    })
  }


  $scope.addToCart = function() {
    $movefirstimage = $(".movefirstimage");
    $movefirstimageimg = $(".movefirstimage img");
    $movesecondimage = $(".movesecondimage");
    $movesecondimageimg = $(".movesecondimage img");
    if($movefirstimage=="") {
      $scope.filter.custom[4].top = $movefirstimage.eq(0).css("top").split("px")[0];
      $scope.filter.custom[4].left = $movefirstimage.eq(0).css("left").split("px")[0];
      $scope.filter.custom[4].height = $movefirstimageimg.eq(0).css("height").split("px")[0];
      $scope.filter.custom[4].width = $movefirstimageimg.eq(0).css("width").split("px")[0];
    }
    if($movesecondimage=="") {
      $scope.filter.custom[4].top = $movesecondimage.eq(0).css("top").split("px")[0];
      $scope.filter.custom[4].left = $movesecondimage.eq(0).css("left").split("px")[0];
      $scope.filter.custom[4].height = $movesecondimageimg.eq(0).css("height").split("px")[0];
      $scope.filter.custom[4].width = $movesecondimageimg.eq(0).css("width").split("px")[0];
    }

    $texts = $(".movetext");
    var getVal = function(cust, key){
        var topt = $texts.eq(key).css("top");
        if ($texts.eq(key).css("top")!="auto") {
          cust.top = $texts.eq(key).css("top").split("px")[0];
        }
        if ($texts.eq(key).css("left")!="auto") {
          cust.left = $texts.eq(key).css("left").split("px")[0];
        }
    }
    _.each($texts , function(n,key){
      switch (key) {
        case 0:
            {
              getVal($scope.filter.custom[0],key);
            }
          break;
        case 1:
            {
              getVal($scope.filter.custom[1],key);
            }
          break;
        case 8:
            {
              getVal($scope.filter.custom[3],key);
            }
          break;
        case 9:
            {
              getVal($scope.filter.custom[4],key);
            }
          break;
        default:

      }
    })

    NavigationService.addToCartCustom($scope.filter, function(data) {
      if (data == "true") {
        $scope.addAlert("success", "Added to cart");
        myImage = {
          image: ""
        };
      } else {
        $scope.addAlert("danger", "Something has gone wrong");
      }
      myfunction();
    });

  }

  //imageupload
  var imagejstupld = "";
  $scope.usingFlash = FileAPI && FileAPI.upload != null;
  $scope.fileReaderSupported = window.FileReader != null && (window.FileAPI == null || FileAPI.html5 != false);
  $scope.uploadRightAway = true;
  $scope.changeAngularVersion = function() {
    window.location.hash = $scope.angularVersion;
    window.location.reload(true);
  };
  $scope.hasUploader = function(index) {
    return $scope.upload[index] != null;
  };
  $scope.abort = function(index) {
    $scope.upload[index].abort();
    $scope.upload[index] = null;
  };
  $scope.angularVersion = window.location.hash.length > 1 ? (window.location.hash.indexOf('/') === 1 ?
    window.location.hash.substring(2) : window.location.hash.substring(1)) : '1.2.20';

  $scope.onFileSelect = function($files) {
    $scope.isloading = true;
    $scope.selectedFiles = [];
    $scope.progress = [];
    console.log($files);
    if ($scope.upload && $scope.upload.length > 0) {
      for (var i = 0; i < $scope.upload.length; i++) {
        if ($scope.upload[i] != null) {
          $scope.upload[i].abort();
        }
      }
    }
    $scope.upload = [];
    $scope.uploadResult = uploadres;
    $scope.selectedFiles = $files;
    $scope.dataUrls = [];
    for (var i = 0; i < $files.length; i++) {
      var $file = $files[i];
      if ($scope.fileReaderSupported && $file.type.indexOf('image') > -1) {
        var fileReader = new FileReader();
        fileReader.readAsDataURL($files[i]);
        var loadFile = function(fileReader, index) {
          fileReader.onload = function(e) {
            $timeout(function() {
              $scope.dataUrls[index] = e.target.result;
            });
          }
        }(fileReader, i);
      }
      $scope.progress[i] = -1;
      if ($scope.uploadRightAway) {
        $scope.start(i);
      }
    }
  };
  $scope.start = function(index) {
    // cfpLoadingBar.start();
    $scope.progress[index] = 0;
    $scope.errorMsg = null;
    $scope.howToSend = 1;
    if ($scope.howToSend == 1) {
      $scope.upload[index] = $upload.upload({
        url: uploadUrl,
        method: "POST",
        headers: {
          'Content-Type': 'Content-Type'
        },
        data: {
          myModel: $scope.myModel
        },
        file: $scope.selectedFiles[index],
        fileFormDataName: 'image'
      });
      $scope.upload[index].then(function(response) {
        $timeout(function() {
          // cfpLoadingBar.complete();
          $scope.uploadResult.push(response.data);
          if (response.data.value != "") {
            $scope.isloading = false;
            console.log($scope.isloading);

            // console.log($scope.isf);
            if ($scope.isf) {
              $scope.filter.image.image = response.data.value;
            } else {
              $scope.filter.image.image1 = response.data.value;
            }

          }
        });
      }, function(response) {
        if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
      }, function(evt) {
        $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
      });
      $scope.upload[index].xhr(function(xhr) {});
    } else {
      var fileReader = new FileReader();
      fileReader.onload = function(e) {
        $scope.upload[index] = $upload.http({
          url: uploadUrl,
          headers: {
            'Content-Type': $scope.selectedFiles[index].type
          },
          data: e.target.result
        }).then(function(response) {
          $scope.uploadResult.push(response.data);
        }, function(response) {
          if (response.status > 0) $scope.errorMsg = response.status + ': ' + response.data;
        }, function(evt) {
          $scope.progress[index] = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
        });
      }
      fileReader.readAsArrayBuffer($scope.selectedFiles[index]);
    }
  };

  $scope.dragOverClass = function($event) {
    var items = $event.dataTransfer.items;
    var hasFile = false;
    if (items != null) {
      for (var i = 0; i < items.length; i++) {
        if (items[i].kind == 'file') {
          hasFile = true;
          break;
        }
      }
    } else {
      hasFile = true;
    }
    return hasFile ? "dragover" : "dragover-err";
  };
  //imageupload

})


.controller('headerctrl', function($scope, TemplateService, $uibModal, NavigationService, $state, $interval, $location) {

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
  myfunction = function() {
    NavigationService.gettotalcart(function(data) {
      $scope.totalcart = data;
    });
    //		NavigationService.totalcart(function (data) {
    //			$scope.amount = data;
    //		});
  }


  myfunction();


  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });

  $scope.openLogin = function() {
    $uibModal.open({
      animation: true,
      templateUrl: 'views/modal/login.html',
      controller: 'headerctrl'
    })
  };

  if (NavigationService.getUser()) {
    $scope.showLogout = true;
    $scope.myuser = NavigationService.getUser('user');
    if ($scope.myuser.firstname != '' || $scope.myuser.lastname != '') {
      $scope.user.name = NavigationService.getUser('user').firstname + " " + NavigationService.getUser('user').lastname;
    } else {
      $scope.user.name = $scope.myuser.name;
    }
  }

  $scope.registerUser = function() {
    console.log($scope.register);
    if ($scope.register.accept == true) {
      $scope.acceptTerms = false;
      NavigationService.registerUser($scope.register, function(data) {
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

  $scope.loginUser = function() {
    console.log($scope.login);
    NavigationService.login($scope.login, function(data) {
      if (data) {
        console.log(data);
        if (data != "false") {
          NavigationService.setUser(data);
          myfunction();
          window.location.reload();
          // $state.go('setting');
        } else {
          $scope.invalidLogin = true;
        }
      }
    })
  }

  $scope.logout = function() {
    $scope.showLogout = false;
    NavigationService.logout(function(data) {
      if (data == "true") {
        if (window.location.hash == "#/profile") {
          $state.go('home');
        }
        $.jStorage.flush();
        window.location.reload();
      }
    });
  }

  // GOOGLE AND FACEBOOK LOGIN
  var checktwitter = function(data, status) {
    if (data != "false") {
      $interval.cancel(stopinterval);
      ref.close();
      NavigationService.authenticate(authenticatesuccess);
    } else {

    }

  };

  var callAtIntervaltwitter = function() {
    NavigationService.authenticate(checktwitter);
  };
  var authenticatesuccess = function(data, status) {
    if (data != "false") {
      $.jStorage.set("user", data);
      user = data;
      $state.go('home');
      window.location.reload();
    }
  };

  $scope.facebooklogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Facebook?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }
  $scope.googlelogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Google?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }

  $scope.twitterlogin = function() {
    ref = window.open(mainurl + 'index.php/hauth/login/Twitter?returnurl=' + websiteurl, '_blank', 'location=yes');
    stopinterval = $interval(callAtIntervaltwitter, 2000);
    ref.addEventListener('exit', function(event) {
      NavigationService.authenticate(authenticatesuccess);
      $interval.cancel(stopinterval);
    });
  }

});
