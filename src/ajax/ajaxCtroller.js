/**
 * Created by cWX280216 on 2016/12/21.
 */
angular.module('ajaxApp',[])
.controller('ajaxCtroller',function($scope){
        $scope.loadXMLDoc=function()
        {
            var xmlhttp;
            if (window.XMLHttpRequest)
            {
                //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                xmlhttp=new XMLHttpRequest();
            }
            else
            {
                // IE6, IE5 浏览器执行代码
                xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange=function()
            {
                if (xmlhttp.readyState==4 && xmlhttp.status==200)
                {
                    document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
                }
            }
            xmlhttp.open("GET","ajax/ajax_text.txt",true);
            xmlhttp.send();
        }

    })
