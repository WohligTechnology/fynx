var adminurl="http://localhost/demo/";

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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

  }
});
