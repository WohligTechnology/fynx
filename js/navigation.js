// var mainurl = "http://wohlig.co.in/newfynx/";
// var mainurl = "http://localhost/newfynx/";
 var mainurl = "http://www.myfynx.com/newfynx/";
// var mainurl = "http://192.168.0.121/newfynx/";
// mainurlpaymentgateway is url for frontend
var websiteurl = "http://www.myfynx.com/testing/";
var mainurlpaymentgateway = "http://www.myfynx.com/newfynx/";
var adminurl = mainurl + "index.php/json/";
var countries = [{
        "value": "Please Select"
    }, {
        "value": "Afganistan"
    }, {
        "value": "Albania"
    }, {
        "value": "Algeria"
    }, {
        "value": "American Samoa"
    }, {
        "value": "Andorra"
    }, {
        "value": "Angola"
    }, {
        "value": "Anguilla"
    }, {
        "value": "Antigua &amp; Ba"
    }, {
        "value": "Argentina"
    }, {
        "value": "Armenia"
    }, {
        "value": "Aruba"
    }, {
        "value": "Australia"
    }, {
        "value": "Austria"
    }, {
        "value": "Azerbaijan"
    }, {
        "value": "Bahamas"
    }, {
        "value": "Bahrain"
    }, {
        "value": "Bangladesh"
    }, {
        "value": "Barbados"
    }, {
        "value": "Belarus"
    }, {
        "value": "Belgium"
    }, {
        "value": "Belize"
    }, {
        "value": "Benin"
    }, {
        "value": "Bermuda"
    }, {
        "value": "Bhutan"
    }, {
        "value": "Bolivia"
    }, {
        "value": "Bonaire"
    }, {
        "value": "Bosnia &amp; Herzegovina"
    }, {
        "value": "Botswana"
    }, {
        "value": "Brazil"
    }, {
        "value": "British Indian Ocean Ter"
    }, {
        "value": "Brunei"
    }, {
        "value": "Bulgaria"
    }, {
        "value": "Burkina Faso"
    }, {
        "value": "Burundi"
    }, {
        "value": "Cambodia"
    }, {
        "value": "Cameroon"
    }, {
        "value": "Canada"
    }, {
        "value": "Canary Islands"
    }, {
        "value": "Cape Verde"
    }, {
        "value": "Cayman Islands"
    }, {
        "value": "Central African Republic"
    }, {
        "value": "Chad"
    }, {
        "value": "Channel Islands"
    }, {
        "value": "Chile"
    }, {
        "value": "China"
    }, {
        "value": "Christmas Island"
    }, {
        "value": "Cocos Island"
    }, {
        "value": "Colombia"
    }, {
        "value": "Comoros"
    }, {
        "value": "Congo"
    }, {
        "value": "Cook Islands"
    }, {
        "value": "Costa Rica"
    }, {
        "value": "Cote DIvoire"
    }, {
        "value": "Croatia"
    }, {
        "value": "Cuba"
    }, {
        "value": "Curacao"
    }, {
        "value": "Cyprus"
    }, {
        "value": "Czech Republic"
    }, {
        "value": "Denmark"
    }, {
        "value": "Djibouti"
    }, {
        "value": "Dominica"
    }, {
        "value": "Dominican Republic"
    }, {
        "value": "East Timor"
    }, {
        "value": "Ecuador"
    }, {
        "value": "Egypt"
    }, {
        "value": "El Salvador"
    }, {
        "value": "Equatorial Guinea"
    }, {
        "value": "Eritrea"
    }, {
        "value": "Estonia"
    }, {
        "value": "Ethiopia"
    }, {
        "value": "Falkland Islands"
    }, {
        "value": "Faroe Islands"
    }, {
        "value": "Fiji"
    }, {
        "value": "Finland"
    }, {
        "value": "France"
    }, {
        "value": "French Guiana"
    }, {
        "value": "French Polynesia"
    }, {
        "value": "French Southern Ter"
    }, {
        "value": "Gabon"
    }, {
        "value": "Gambia"
    }, {
        "value": "Georgia"
    }, {
        "value": "Germany"
    }, {
        "value": "Ghana"
    }, {
        "value": "Gibraltar"
    }, {
        "value": "Great Britain"
    }, {
        "value": "Greece"
    }, {
        "value": "Greenland"
    }, {
        "value": "Grenada"
    }, {
        "value": "Guadeloupe"
    }, {
        "value": "Guam"
    }, {
        "value": "Guatemala"
    }, {
        "value": "Guinea"
    }, {
        "value": "Guyana"
    }, {
        "value": "Haiti"
    }, {
        "value": "Hawaii"
    }, {
        "value": "Honduras"
    }, {
        "value": "Hong Kong"
    }, {
        "value": "Hungary"
    }, {
        "value": "Iceland"
    }, {
        "value": "India"
    }, {
        "value": "Indonesia"
    }, {
        "value": "Iran"
    }, {
        "value": "Iraq"
    }, {
        "value": "Ireland"
    }, {
        "value": "Isle of Man"
    }, {
        "value": "Israel"
    }, {
        "value": "Italy"
    }, {
        "value": "Jamaica"
    }, {
        "value": "Japan"
    }, {
        "value": "Jordan"
    }, {
        "value": "Kazakhstan"
    }, {
        "value": "Kenya"
    }, {
        "value": "Kiribati"
    }, {
        "value": "Korea North"
    }, {
        "value": "Korea South"
    }, {
        "value": "Kuwait"
    }, {
        "value": "Kyrgyzstan"
    }, {
        "value": "Laos"
    }, {
        "value": "Latvia"
    }, {
        "value": "Lebanon"
    }, {
        "value": "Lesotho"
    }, {
        "value": "Liberia"
    }, {
        "value": "Libya"
    }, {
        "value": "Liechtenstein"
    }, {
        "value": "Lithuania"
    }, {
        "value": "Luxembourg"
    }, {
        "value": "Macau"
    }, {
        "value": "Macedonia"
    }, {
        "value": "Madagascar"
    }, {
        "value": "Malaysia"
    }, {
        "value": "Malawi"
    }, {
        "value": "Maldives"
    }, {
        "value": "Mali"
    }, {
        "value": "Malta"
    }, {
        "value": "Marshall Islands"
    }, {
        "value": "Martinique"
    }, {
        "value": "Mauritania"
    }, {
        "value": "Mauritius"
    }, {
        "value": "Mayotte"
    }, {
        "value": "Mexico"
    }, {
        "value": "Midway Islands"
    }, {
        "value": "Moldova"
    }, {
        "value": "Monaco"
    }, {
        "value": "Mongolia"
    }, {
        "value": "Montserrat"
    }, {
        "value": "Morocco"
    }, {
        "value": "Mozambique"
    }, {
        "value": "Myanmar"
    }, {
        "value": "Nambia"
    }, {
        "value": "Nauru"
    }, {
        "value": "Nepal"
    }, {
        "value": "Netherland Antilles"
    }, {
        "value": "Netherlands (Holland, Europe)"
    }, {
        "value": "Nevis"
    }, {
        "value": "New Caledonia"
    }, {
        "value": "New Zealand"
    }, {
        "value": "Nicaragua"
    }, {
        "value": "Niger"
    }, {
        "value": "Nigeria"
    }, {
        "value": "Niue"
    }, {
        "value": "Norfolk Island"
    }, {
        "value": "Norway"
    }, {
        "value": "Oman"
    }, {
        "value": "Pakistan"
    }, {
        "value": "Palau Island"
    }, {
        "value": "Palestine"
    }, {
        "value": "Panama"
    }, {
        "value": "Papua New Guinea"
    }, {
        "value": "Paraguay"
    }, {
        "value": "Peru"
    }, {
        "value": "Philippines"
    }, {
        "value": "Pitcairn Island"
    }, {
        "value": "Poland"
    }, {
        "value": "Portugal"
    }, {
        "value": "Puerto Rico"
    }, {
        "value": "Qatar"
    }, {
        "value": "Republic of Montenegro"
    }, {
        "value": "Republic of Serbia"
    }, {
        "value": "Reunion"
    }, {
        "value": "Romania"
    }, {
        "value": "Russia"
    }, {
        "value": "Rwanda"
    }, {
        "value": "St Barthelemy"
    }, {
        "value": "St Eustatius"
    }, {
        "value": "St Helena"
    }, {
        "value": "St Kitts-Nevis"
    }, {
        "value": "St Lucia"
    }, {
        "value": "St Maarten"
    }, {
        "value": "St Pierre &amp; Miquelon"
    }, {
        "value": "St Vincent &amp; Grenadines"
    }, {
        "value": "Saipan"
    }, {
        "value": "Samoa"
    }, {
        "value": "Samoa American"
    }, {
        "value": "San Marino"
    }, {
        "value": "Sao Tome &amp; Principe"
    }, {
        "value": "Saudi Arabia"
    }, {
        "value": "Senegal"
    }, {
        "value": "Serbia"
    }, {
        "value": "Seychelles"
    }, {
        "value": "Sierra Leone"
    }, {
        "value": "Singapore"
    }, {
        "value": "Slovakia"
    }, {
        "value": "Slovenia"
    }, {
        "value": "Solomon Islands"
    }, {
        "value": "Somalia"
    }, {
        "value": "South Africa"
    }, {
        "value": "Spain"
    }, {
        "value": "Sri Lanka"
    }, {
        "value": "Sudan"
    }, {
        "value": "Suriname"
    }, {
        "value": "Swaziland"
    }, {
        "value": "Sweden"
    }, {
        "value": "Switzerland"
    }, {
        "value": "Syria"
    }, {
        "value": "Tahiti"
    }, {
        "value": "Taiwan"
    }, {
        "value": "Tajikistan"
    }, {
        "value": "Tanzania"
    }, {
        "value": "Thailand"
    }, {
        "value": "Togo"
    }, {
        "value": "Tokelau"
    }, {
        "value": "Tonga"
    }, {
        "value": "Trinidad &amp; Tobago"
    }, {
        "value": "Tunisia"
    }, {
        "value": "Turkey"
    }, {
        "value": "Turkmenistan"
    }, {
        "value": "Turks &amp; Caicos Is"
    }, {
        "value": "Tuvalu"
    }, {
        "value": "Uganda"
    }, {
        "value": "Ukraine"
    }, {
        "value": "United Arab Emirates"
    }, {
        "value": "United Kingdom"
    }, {
        "value": "United States of America"
    }, {
        "value": "Uruguay"
    }, {
        "value": "Uzbekistan"
    }, {
        "value": "Vanuatu"
    }, {
        "value": "Vatican City State"
    }, {
        "value": "Venezuela"
    }, {
        "value": "Vietnam"
    }, {
        "value": "Virgin Islands (Brit)"
    }, {
        "value": "Virgin Islands (USA)"
    }, {
        "value": "Wake Island"
    }, {
        "value": "Wallis &amp; Futana Is"
    }, {
        "value": "Yemen"
    }, {
        "value": "Zaire"
    }, {
        "value": "Zambia"
    }, {
        "value": "Zimbabwe"
    }
];

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
			return $http.get(adminurl + 'getproductbycategory?name=' + filters.name + '&category=' + filters.category + '&subcategory=' + filters.subcategory + '&color=' + filters.color + '&size=' + filters.size + '&price=' + filters.price + '&type=' + filters.type + '&maxrow=5' + '&pageno=' + filters.pageno, {}, {
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
    getorderbyorderid: function(id,callback) {
        return $http.get(adminurl + 'getorderbyorderid?id=' + id , {}, {
            withCredentials: true
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
					"quantity": filter.quantity,
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
			return $http.get(adminurl + 'getProductDetails?id=' + filter.product + "&color=" + filter.color + "&size=" + filter.size+"&design="+filter.design, {}, {
				withCredentials: true
			}).success(callback);
		},
		getUserDetails: function (callback) {
			return $http.get(adminurl + 'getUserDetails?id='+$.jStorage.get('user').id, {}, {
				withCredentials: true
			}).success(callback);
		},
		getAllSize: function (callback) {
			return $http.get(adminurl + 'getAllSize', {}, {
				withCredentials: true
			}).success(callback);
		},
    logout: function (callback) {
    			return $http.get(adminurl + 'logout', {}, {
    				withCredentials: true
    			}).success(callback);
    		},
		addToCart: function (filter, callback) {
			return $http.get(adminurl + 'addToCart?product=' + filter.product + '&quantity=' + filter.quantity + '&design=' +filter.design+'&json=', {}, {
				withCredentials: true
			}).success(callback);
		},
		addToCartCustom: function (filter, callback) {
			return $http.get(adminurl + 'addToCart?product=' + filter.id + '&quantity=' + filter.quantity + '&design=&json=' + JSON.stringify(filter), {}, {
				withCredentials: true
			}).success(callback);
		},
		deletecart: function (id, design, callback) {
			return $http.get(adminurl + 'deletecart?id=' + id + '&design=' + design, {}, {
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
		changePassword: function (password, callback) {
			$http({
				url: adminurl + 'changepassword',
				method: 'POST',
				withCredentials: true,
				data: {
					"email": $.jStorage.get('user').email,
					"oldpassword": password.oldpassword,
					"newpassword": password.newpassword,
					"confirmpassword": password.confirmpassword
				}
			}).success(callback);
		},
		updateProfile: function (profile, callback) {
			$http({
				url: adminurl + 'updateProfile',
				method: 'POST',
				withCredentials: true,
				data: profile
			}).success(callback);
		},
		placeOrder: function (checkout, callback) {
			$http({
				url: adminurl + 'placeOrder',
				method: 'POST',
				withCredentials: true,
				data: checkout
			}).success(callback);
		},
		showWishlist: function (callback) {
			return $http.get(adminurl + 'showwishlist?user=' + $.jStorage.get("user").id, {}, {
				withCredentials: true
			}).success(callback);
		},
		getproductbycategory: function (filter, callback) {
			return $http.get(adminurl + 'getproductbycategory?type=' + filter.type + '&color='+filter.color+ '&size='+filter.size+'&price='+filter.price, {}, {
				withCredentials: true
			}).success(callback);
		},
		gettotalcart: function (callback) {
			return $http.get(adminurl + 'totalitemcart', {}, {
				withCredentials: true
			}).success(callback);
		},
		getImageForCustomize: function (type, color, callback) {
			return $http.get(adminurl + 'getImageForCustomize?type='+type+'&color='+color, {}, {
				withCredentials: true
			}).success(callback);
		},
		showCart: function (callback) {
			return $http.get(adminurl + 'showCart', {}, {
				withCredentials: true
			}).success(callback);
		},
		checkoutCheck: function (callback) {
			return $http.get(adminurl + 'checkoutCheck', {}, {
				withCredentials: true
			}).success(callback);
		},
		totalcart: function (callback) {
			return $http.get(adminurl + 'totalcart', {}, {
				withCredentials: true
			}).success(callback);
		},
		getHomeSlider: function (callback) {
			return $http.get(adminurl + 'getallslider', {}, {
				withCredentials: true
			}).success(callback);
		},
		getUser: function () {
			return $.jStorage.get('user');
		},
		setOrder: function (order) {
			$.jStorage.set('order',order);
		},
		getOrder: function () {
			return $.jStorage.get('order');
		},
		setUser: function (data) {
			return $.jStorage.set('user', data);
		}
	}
});
