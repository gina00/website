var app = angular.module("myApp", [
    //"ajaxApp",
    "ui.router",
    "oc.lazyLoad"
    //"testApp",
]);
app.config(function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.when("", "/contain");
    $stateProvider
        .state("home", {
            url: "/contain",
            templateUrl: "containView/contain.html"

        })
        .state("ajax", {
            url: "/ajax",
            templateUrl: "ajax/ajax.html",
            controller: 'ajaxCtroller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('ajax/ajaxCtroller.js');
                }]
            }
        })
        .state("test", {
            url: "/test",
            templateUrl: 'test/text.html',
            controller: 'testCtroller',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load('test/testCtroller.js');
                }]
            }
            //templateUrl:"src/test/text.html"
        })
        .state("dom", {
            url: "/dom",
            templateUrl: "dom/dom.html",
            controller: "domCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'dom/addLoadEvent.js',
                        'dom/dom.js',
                        'css/style.css'                        
                        ]);
                }]
            }
        })
        .state("animate", {
            url: "/animate",
            templateUrl: "Animate/animate.html",
            controller: "animateCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'Animate/animateCtroller.js',
                        'Animate/animate.css'                        
                        ]);
                }]
            }
        })
        .state("flex", {
            url: "/flex",
            templateUrl: "flex/flex.html",
            controller: "flexCtroller",
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        'flex/flexCtroller.js',
                        'flex/flex.css'                        
                        ]);
                }]
            }
        })
})
    .controller('myAppCotroller', function ($scope) {
        $scope.menu = {
            url: "publicView/header.html"
        }
        $scope.footer = {
            url: "publicView/footer.html"
        }
        // $(".navbar-nav").on("click","li",function(){
        //     console.log("aaa")
        //     $(this).addClass("active").siblings("li").removeClass("active");
        // })
    })
    .controller('addLoadctrl',function($scope,loadMyCtrl,util){
        
    });
 
