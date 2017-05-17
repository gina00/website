/**
 * Created by cWX280216 on 2016/11/29.
 */

angular.module("domApp",[
    //"loadApp",
    "oc.lazyLoad"
])
    //.run(function(){})
    .controller('domCtroller', function ($scope,$ocLazyLoad) {
        //console.log($ocLazyLoad.load('src/dom/addLoadEvent.js'));
        // $ocLazyLoad.load([
        //     'src/dom/addLoadEvent.js',
        //     'theme/css/style.css',
        // ]);
        function showPic(whichpic) {
            if(!document.getElementById("placeholder")){
                return true;
            }
            var source = whichpic.getAttribute("href");
            var placeholder = document.getElementById("placeholder");
            placeholder.setAttribute("src", source);
            if(!document.getElementById("text")){
                return false;
            }
            var title = whichpic.getAttribute("title");
            var text = document.getElementById("text");
            text.childNodes[0].nodeValue = title;
            //text.innerHTML=title;
            return false;
        }
        function prepare() {
            var showpic = document.getElementById("showpic");
            var imglink = showpic.getElementsByTagName("a");
            for (var i = 0; i < imglink.length; i++) {
                imglink[i].onclick = function () {
                    return showPic(this);
                }
            }
        }
        function preparePlaceholder(){
            var imgNode=document.createElement("img");
            var pNode=document.createElement("span");
            var pTxt=document.createTextNode("choose images");
            var showpic = document.getElementById("showpicBox");
            var divimgBox = document.createElement("div");
            imgNode.setAttribute("id","placeholder");
            imgNode.setAttribute("src","");
            imgNode.setAttribute("alt","");
            imgNode.setAttribute("class","imgBox");
            pNode.setAttribute("id","text");
            pNode.appendChild(pTxt);
            divimgBox.appendChild(imgNode);
            divimgBox.appendChild(pNode);
            insetAfter(divimgBox,showpic);
            /*insetAfter(imgNode,showpic);
            insetAfter(pNode,imgNode);*/
        }
        function insetAfter(newElement,targetElement){
            var parent=targetElement.parentNode;
            if(parent.lastChild==targetElement){
                parent.appendChild(newElement);
            }
            else{
                parent.insertBefore(newElement,targetElement.nextSibling);
            }
        }

        $scope.stripeTables=function(){
            if (!document.getElementsByTagName) {
                return false;
            }
            var tables = document.getElementsByTagName("table");
            for (var i = 0; i < tables.length; i++) {
                var odd = false;
                var rows = tables[i].getElementsByTagName("tr");
                console.log(rows.length);
                for (var j = 0; j < rows.length; j++) {
                    if (odd == true) {
                        rows[j].style.backgroundColor = "#f5f5f5";
                        odd = false;
                    }
                    else {
                        odd = true;
                    }
                }
            }
            //console.log('test');
        }

        /*$scope.addLoadEvent=function(func){
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
        //$scope.stripeTables();
        preparePlaceholder();
        prepare();
        $scope.addLoadEvent($scope.stripeTables());    
        
        //addLoadEvent($scope.stripeTables());

    })
;