/**
 * Created by cWX280216 on 2016/12/30.
 */
angular.module('testApp',[])
    .controller('testCtroller', function ($scope) {
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.name=["John","Doe","Gina","May"];

        //通过javascript的日期对象来得到当前的日期，并输出。
  
  var today= new Date();
  var year=today.getFullYear();//2017
  var month=today.getMonth();//1
  var day=today.getDate();
  var weekday=today.getDay();
  var monthArr=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
  var weekdayArr=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  var totalDay=year+"年"+monthArr[month]+day+"日"+"  "+weekdayArr[weekday];
  //document.write(totalDay+"<br/>");

  
  var newArr2,newNum;
  //成绩是一长窜的字符串不好处理，找规律后分割放到数组里更好操作哦
  var scoreStr = "小明:87;小花:81;小红:97;小天:76;小张:74;小小:94;小西:90;小伍:76;小迪:64;小曼:76";
  var newArr=scoreStr.split(";");
   //document.write(newArr+"<br/>");
   for(var i=0;i<newArr.length;i++){
       newArr2=newArr[i].split(":").slice(1);
       newNum=newNum+parseInt(newArr2);
    
       
   }
   //document.write(newNum+"<br>");

  //从数组中将成绩撮出来，然后求和取整，并输出。
  
    })
function clock(){
      var time=new Date();               	  
      document.getElementById("clock").value = time;
   }
    var i=setInterval("clock()",100) ;
