/**
 * Created by cWX280216 on 2016/12/29.
 */
angular.module('loadApp',[])
.controller('loadCtroller', function ($scope) {
        $scope.addLoadEvent=function(func){
            var oldonload = window.onload;
            if (typeof  window.onload != "function") {
                window.onload = func;
            }
            else {
                window.onload = function () {
                    oldonload();
                    func();
                }
            }
        };
    })  
// angular.element(document).ready(() => {
//         // jQuery需要放在这里面生效
//         // $(".navbar-nav li").click(function(){
//         //     $(this).addClass("active").siblings().removeClass("active");
//         // })
//         $(".navbar-nav li").each(function(){
//             $(this).addClass("active");
//         });

// });  
    
/*
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof  window.onload != "function") {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}*/
