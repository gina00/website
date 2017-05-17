/**
 * Created by cWX280216 on 2016/12/30.
 */
angular.module('animateApp',['ui.router'])
    .controller('animateCtroller', function ($scope) {
        //$scope.imageList=["img1","img2","img3","img4","img5","img6","img7","img8","img9"];
        $scope.imageList=[
            {
                'name':'img1',
                'description':'this is img1'
            },
            {
                'name':'img2',
                'description':'this is img2'
            },
            {
                'name':'img3',
                'description':'this is img3'
            },
            {
                'name':'img4',
                'description':'this is img4'
            },
            {
                'name':'img5',
                'description':'this is img5'
            },
            {
                'name':'img6',
                'description':'this is img6'
            }
        ];
        $scope.moveImage=function(direction) {
            var imgList = document.getElementById("imageList");
            var pre = document.getElementById("pre");
            var next = document.getElementById("next");
            var ul_list=document.getElementById("imageList-ul");
            var li_list=ul_list.getElementsByTagName("li");
            var ul_w=0;
            var listWidth=(li_list[0].clientWidth+20)*4;
            for(var i=0;i<li_list.length;i++){
                ul_w +=li_list[i].clientWidth+20;
            }
            if (direction == "left") {
                imgList.scrollLeft -= li_list[0].clientWidth+20;//li的宽度
            }
            else {
                imgList.scrollLeft += li_list[0].clientWidth+20;
            }
            var showWidth=ul_w-listWidth;
            if(imgList.scrollLeft==0){
                pre.style.display="none";
            }
            else{
                pre.style.display="block";
                }
            if(imgList.scrollLeft==showWidth){
                next.style.display="none";
            }
            else{
                next.style.display="block";
            }
            ul_list.style.width=ul_w+"px";
        }
        $scope.animate=function(){
            var testBox=document.getElementsByClassName("testBox")[0];
            testBox.className +=' '+'move';
            var width=testBox.offsetWidth;
            // setTimeout(function(){
            //     testBox.style.width=;
            // },1000);
        }
        $scope.showDetail=function(){
            var fold=document.getElementById("fold");
            var listBox=document.getElementsByClassName("listBox")[0];
            //var textValue=fold.childNodes[0].nodeValue;
            var textValue=$("#fold").text();
            var cName=listBox.className;
            if(textValue=="Show"){
                fold.innerHTML="Fold";
                $(".listBox").addClass("fold");
                //listBox.className +=' '+'fold';
            }
            else{
                fold.innerHTML="Show";
                $(".listBox").removeClass("fold");
                //listBox.removeClass("fold");
            } 
            console.log();
        }
        function addLoadEvent(func){
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
        function moveMessage(){
            var elem=document.getElementById("message");
            var xpos=parseInt(elem.style.left);
            var ypos=parseInt(elem.style.top);
            var movement;
                if(xpos==200&&ypos==100){
                    return true;
                }
                if(xpos<200){
                    xpos++;
                }
                if(xpos>200){
                    xpos--;
                }
                if(ypos<100){
                    ypos++;
                }
                if(ypos>100){
                    ypos--;
                }
                elem.style.left=xpos+"px";
                elem.style.top=ypos+"px";
                //movement=setTimeout("moveMessage()",10);
        }
        function pstMessage(){
            var elem=document.getElementById("message");
            elem.style.position="absolute";
            elem.style.left="50px";
            elem.style.top="100px";
            movement=setTimeout(function(){
                var elem=document.getElementById("message");
                var xpos=parseInt(elem.style.left);
                var ypos=parseInt(elem.style.top);
                var movement;
                    if(xpos==200&&ypos==100){
                        return true;
                    }
                    if(xpos<200){
                        xpos++;
                    }
                    if(xpos>200){
                        xpos--;
                    }
                    if(ypos<100){
                        ypos++;
                    }
                    if(ypos>100){
                        ypos--;
                    }
                    elem.style.left=xpos+"px";
                    elem.style.top=ypos+"px";
            },10);
            
        }
        addLoadEvent(pstMessage);
        addLoadEvent(moveMessage);
        //$scope.addLoadEvent(moveMessage());
        //clearTimeout(movement);
    })
    
