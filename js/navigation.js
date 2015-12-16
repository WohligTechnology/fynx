//var mainurl = "http://wohlig.co.in/newfynx/index.php/";
var mainurl = "http://localhost/newfynx/index.php/";
var adminurl = mainurl + "json/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
	var navigation = [{
		name: "Men",
		active: "",
		link: "#/product/men",
		classis: "active",
		subnav: []
    }, {
		name: "Women",
		active: "",
		link: "#/product/women",
		classis: "active",
		subnav: []
    }, {
		name: "Infants",
		active: "",
		link: "#/product/infants",
		classis: "active",
		subnav: []
    }, {
		name: "Pets",
		active: "",
		link: "#/product/pets",
		classis: "active",
		subnav: []
    }, {
		name: "Custom",
		active: "",
		link: "#/custom",
		classis: "active",
		subnav: []
    }];

	return {
		getnav: function () {
			return navigation;
		},
		authenticate: function (callback) {
			return $http.get(adminurl + 'authenticate', {}, {
				withCredentials: true
			}).success(callback);
		},
		makeactive: function (menuname) {
			for (var i = 0; i < navigation.length; i++) {
				if (navigation[i].name == menuname) {
					navigation[i].classis = "active";
				} else {
					navigation[i].classis = "";
				}
			}
			return menuname;
		},
		gethomecontent: function (callback) {
			return $http.get(adminurl + 'gethomecontent', {}, {
				withCredentials: true
			}).success(callback);
		},
		getProductByCategory: function (filters, callback) {
			return $http.get(adminurl + 'getproductbycategory?category=' + filters.category + '&subcategory=' + filters.subcategory + '&color=' + filters.color + '&size=' + filters.size + '&price=' + filters.price + '&type=' + filters.type, {}, {
				withCredentials: true
			}).success(callback);
		},
		getFilters: function (categoryid, callback) {
			return $http.get(adminurl + 'getFilters?category=' + categoryid, {}, {
				withCredentials: true
			}).success(callback);
		},
		registerUser: function (userData, callback) {
			$http({
				url: adminurl + 'registeruser',
				method: 'POST',
				withCredentials: true,
				data: userData
			}).success(callback);
		},
		login: function (userData, callback) {
			$http({
				url: adminurl + 'loginuser',
				method: 'POST',
				withCredentials: true,
				data: userData
			}).success(callback);
		},
		addToWishlist: function (filter, callback) {
			console.log(filter);
			$http({
				url: adminurl + 'addtowishlist',
				method: 'POST',
				withCredentials: true,
				data: {
					"product": filter.product,
					"quantity": 1,
					"design":filter.design
				}
			}).success(callback);
		},
		usercontact: function (contact, callback) {
			return $http.get(adminurl + 'usercontact?name=' + contact.name + '&email=' + contact.email + '&phone=' + contact.phone + '&comment=' + contact.comment, {}, {
				withCredentials: true
			}).success(callback);
		},
		getProductDetails: function (filter, callback) {
			return $http.get(adminurl + 'getProductDetails?id=' + filter.product + "&color=" + filter.color + "&size=" + filter.size, {}, {
				withCredentials: true
			}).success(callback);
		},
		getAllSize: function (callback) {
			return $http.get(adminurl + 'getAllSize', {}, {
				withCredentials: true
			}).success(callback);
		},
		addToCart: function (filter, callback) {
			return $http.get(adminurl + 'addToCart?product=' + filter.product + '&quantity=1&design=' +filter.design, {}, {
				withCredentials: true
			}).success(callback);
		},
		deletecart: function (id, callback) {
			return $http.get(adminurl + 'deletecart?id=' + id, {}, {
				withCredentials: true
			}).success(callback);
		},
		removeFromWishlist: function (product, design, callback) {
			
			$http({
				url: adminurl + 'removeFromWishlist',
				method: 'POST',
				withCredentials: true,
				data: {
					"product": product,
					"design": design
				}
			}).success(callback);
		},
		showWishlist: function (callback) {
			return $http.get(adminurl + 'showwishlist?user=' + $.jStorage.get("user").id, {}, {
				withCredentials: true
			}).success(callback);
		},
		gettotalcart: function (callback) {
			return $http.get(adminurl + 'totalitemcart', {}, {
				withCredentials: true
			}).success(callback);
		},
		showCart: function (callback) {
			return $http.get(adminurl + 'showCart', {}, {
				withCredentials: true
			}).success(callback);
		},
		totalcart: function (callback) {
			return $http.get(adminurl + 'totalcart', {}, {
				withCredentials: true
			}).success(callback);
		},
		getUser: function () {
			return $.jStorage.get('user');
		},
		setUser: function (data) {
			return $.jStorage.set('user', data);
		}
	}
});
