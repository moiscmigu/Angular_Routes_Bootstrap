console.log('js');
var app = angular.module('routeApp', ['ngRoute']);


app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl:'views/partials/hulk.html',
        controller:'DefaultController as dc'
    }).when('/hulk', {
        templateUrl:'views/partials/hulk.html',
        controller:'hulkController as hc'
    }).when('/thor', {
        templateUrl:'views/partials/thor.html',
        controller:'thorController as wc',
    }).when('/spiderman', {
        templateUrl:'views/partials/spiderman.html',
        controller:'spidermanController as sm',
    });
});//end config


app.controller('DefaultController', DefaultController );
app.controller('hulkController', hulkController);
app.controller('spidermanController', spiderman);
app.controller('thorController', thor);


function DefaultController() {
    var vm = this;
    console.log('default controller is loaded');
}

function hulkController() {
    var vm = this;
    console.log('hulk controller is loaded');
}


function spiderman() {
    var vm = this;
    console.log('inside of spiderman controller');
}

function thor() {
    var vm = this;
    console.log('inside of thor controller');
}
