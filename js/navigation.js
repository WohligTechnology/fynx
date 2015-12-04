var adminurl = "http://localhost/newfynx/index.php/json/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
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
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        gethomecontent: function(callback) {
            return $http.get(adminurl + 'gethomecontent', {}, {
                withCredentials: true
            }).success(callback);
        },
        getProductByCategory: function(filters, callback) {
            return $http.get(adminurl + 'getproductbycategory?category=' + filters.category + '&subcategory=' + filters.subcategory + '&color=' + filters.color + '&size=' + filters.size + '&price=' + filters.price + '&type=' + filters.type, {}, {
                withCredentials: true
            }).success(callback);
        },
        getFilters: function(categoryid, callback) {
            return $http.get(adminurl + 'getFilters?category=' + categoryid, {}, {
                withCredentials: true
            }).success(callback);
        },
        registerUser: function(userData, callback) {
            $http({
                url: adminurl + 'registeruser',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback);
        },
        login: function(userData, callback) {
            $http({
                url: adminurl + 'loginuser',
                method: 'POST',
                withCredentials: true,
                data: userData
            }).success(callback);
        },
        usercontact: function(contact, callback) {
            return $http.get(adminurl + 'usercontact?name=' + contact.name + '&email=' + contact.email + '&phone=' + contact.phone + '&comment=' + contact.comment, {}, {
                withCredentials: true
            }).success(callback);
        },
        getUser: function() {
            return $.jStorage.get('user');
        },
        setUser: function(data) {
            return $.jStorage.set('user', data);
        }
    }
});
