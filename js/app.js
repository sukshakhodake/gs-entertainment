// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "views/template.html",
            controller: 'HomeCtrl'
        })
        .state('movies', {
            url: "/movies",
            templateUrl: "views/template.html",
            controller: 'MoviesCtrl'
        })
        .state('moviesinside', {
            url: "/moviesinside/:id",
            templateUrl: "views/template.html",
            controller: 'MoviesInsideCtrl'
        })
        .state('talent', {
            url: "/talent",
            templateUrl: "views/template.html",
            controller: 'TalentsCtrl'
        })
        .state('wedding', {
            url: "/wedding",
            templateUrl: "views/template.html",
            controller: 'WeddingCtrl'
        })
        .state('weddinginside', {
            url: "/weddinginside",
            templateUrl: "views/template.html",
            controller: 'WeddingInsideCtrl'
        })
        .state('clients', {
            url: "/clients",
            templateUrl: "views/template.html",
            controller: 'ClientsCtrl'
        })
        .state('asfc', {
            url: "/asfc",
            templateUrl: "views/template.html",
            controller: 'AsfcCtrl'
        })
        .state('jpp', {
            url: "/jpp",
            templateUrl: "views/template.html",
            controller: 'JppCtrl'
        })
        .state('jppseason1', {
            url: "/jppseason1",
            templateUrl: "views/template.html",
            controller: 'Jppseason1Ctrl'
        })
        .state('pfh', {
            url: "/pfh",
            templateUrl: "views/template.html",
            controller: 'PfhCtrl'
        })
        .state('sports', {
            url: "/sports",
            templateUrl: "views/template.html",
            controller: 'SportCtrl'
        })
        .state('diaries', {
            url: "/diaries",
            templateUrl: "views/template.html",
            controller: 'DiariesCtrl'
        })
        .state('mehendi', {
            url: "/mehendi",
            templateUrl: "views/template.html",
            controller: 'MehendiCtrl'
        })
        .state('contact', {
            url: "/contact",
            templateUrl: "views/template.html",
            controller: 'ContactCtrl'
        })
        .state('blogtext', {
            url: "/blogtext",
            templateUrl: "views/template.html",
            controller: 'BlogTextCtrl'
        })
        .state('blogimage', {
            url: "/blogimage",
            templateUrl: "views/template.html",
            controller: 'BlogImageCtrl'
        })
        .state('blogvideo', {
            url: "/blogvideo",
            templateUrl: "views/template.html",
            controller: 'BlogVideoCtrl'
        });
    $urlRouterProvider.otherwise("/home");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
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
    };
});

firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        var other = "";
        if (width && width != "") {
            other += "&width=" + width;
        }
        if (height && height != "") {
            other += "&height=" + height;
        }
        if (style && style != "") {
            other += "&style=" + style;
        }
        if (input) {
            return imgpath + input + other;
        }
    };
});
